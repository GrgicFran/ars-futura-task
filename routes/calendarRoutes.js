const { google } = require("googleapis");
const keys = require("../config/keys");
const oAuth2Client = new google.auth.OAuth2(
   keys.googleClientID,
   keys.googleClientSecret,
   "/calendar"
);

module.exports = app => {
   app.get("/api/calendar", (req, res) => {
      oAuth2Client.setCredentials(req.session.token);
   });
};
