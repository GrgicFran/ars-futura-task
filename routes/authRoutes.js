const passport = require("passport");

module.exports = app => {
   app.get(
      "/auth/google",
      passport.authenticate("google", {
         scope: [
            "profile",
            "email",
            "https://www.googleapis.com/auth/calendar",
            "https://www.googleapis.com/auth/calendar.events",
            "https://www.googleapis.com/auth/calendar.events.readonly",
            "https://www.googleapis.com/auth/calendar.readonly",
            "https://www.googleapis.com/auth/calendar.settings.readonly"
         ]
      })
   );

   app.get(
      "/auth/google/callback",
      passport.authenticate("google"),
      (req, res) => {
         res.redirect("/calendar");
      }
   );

   app.get("/api/logout", (req, res) => {
      req.logout();
      res.redirect("/");
   });

   app.get("/api/current_user", (req, res) => {
      res.send(req.user);
   });
};
