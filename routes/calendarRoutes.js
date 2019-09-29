const { google } = require("googleapis");
const keys = require("../config/keys");
const axios = require("axios");

// const oAuth2Client = new google.auth.OAuth2(
//    keys.googleClientID,
//    keys.googleClientSecret,
//    "/api/calendar_list"
// );

module.exports = app => {
   app.get("/api/calendar/list", async (req, res) => {
      try {
         const list = await axios.get(
            "https://www.googleapis.com/calendar/v3/users/me/calendarList",
            {
               params: {
                  key: keys.apiKey,
                  access_token: req.session.token
               }
            }
         );
         res.send(list.data);
      } catch (err) {
         res.redirect("/auth/google");
      }
   });

   app.get("/api/calendar/primary/month", async (req, res) => {
      let date = new Date();
      try {
         const events = await axios.get(
            "https://www.googleapis.com/calendar/v3/calendars/primary/events",
            {
               params: {
                  key: keys.apiKey,
                  access_token: req.session.token,
                  orderBy: "startTime",
                  singleEvents: true,
                  timeMin: date.toISOString(),
                  timeMax: new Date(
                     date.setMonth(date.getMonth() + 1)
                  ).toISOString()
               }
            }
         );

         res.send(events.data);
      } catch (err) {
         res.redirect("/auth/google");
      }
   });

   app.get("/api/calendar/primary/week", async (req, res) => {
      let date = new Date();
      try {
         const events = await axios.get(
            "https://www.googleapis.com/calendar/v3/calendars/primary/events",
            {
               params: {
                  key: keys.apiKey,
                  access_token: req.session.token,
                  orderBy: "startTime",
                  singleEvents: true,
                  timeMin: date.toISOString(),
                  timeMax: new Date(
                     date.setDate(date.getDate() + 7)
                  ).toISOString()
               }
            }
         );

         res.send(events.data);
      } catch (err) {
         res.redirect("/auth/google");
      }
   });

   app.get("/api/calendar/primary/day", async (req, res) => {
      let date = new Date();
      try {
         const events = await axios.get(
            "https://www.googleapis.com/calendar/v3/calendars/primary/events",
            {
               params: {
                  key: keys.apiKey,
                  access_token: req.session.token,
                  timeMin: date.toISOString(),
                  timeMax: new Date(
                     date.setDate(date.getDate() + 1)
                  ).toISOString()
               }
            }
         );

         res.send(events.data);
      } catch (err) {
         res.redirect("/auth/google");
      }
   });
};
