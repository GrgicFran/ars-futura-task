const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
   done(null, user.profile.id);
});

passport.deserializeUser((id, done) => {
   User.findById(id).then(user => {
      done(null, user);
   });
});

passport.use(
   new googleStrategy(
      {
         clientID: keys.googleClientID,
         clientSecret: keys.googleClientSecret,
         callbackURL: "/auth/google/callback",
         proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
         const existingUser = await User.findOne({ googleId: profile.id });
         if (existingUser) {
            return done(null, { profile: existingUser, token: accessToken });
         }
         const user = await new User({ googleId: profile.id }).save();
         done(null, { profile: user, token: accessToken });
      }
   )
);
