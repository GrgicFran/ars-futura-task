const { google } = require("googleapis");
const keys = require("../config/keys");
const axios = require("axios");
var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.

const oAuth2Client = new google.auth.OAuth2(
   keys.googleClientID,
   keys.googleClientSecret,
   "/calendar"
);

module.exports = app => {
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

   app.post("/api/calendar/delete-event", async (req, res) => {
      oAuth2Client.setCredentials(keys.apiKey);
      oAuth2Client.setCredentials({
         access_token: req.session.token
      });
      const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
      calendar.events.delete(
         { calendarId: "primary", eventId: req.body.eventId },
         function(err, event) {
            if (err) console.log("failed with:", err);
            console.log(event.data);
         }
      );
   });

   app.post("/api/calendar/new-event", async (req, res) => {
      oAuth2Client.setCredentials(keys.apiKey);
      oAuth2Client.setCredentials({
         access_token: req.session.token
      });

      const calendar = google.calendar({ version: "v3", oAuth2Client });
      let startDate = new Date(req.body.start).toISOString();
      let endDate = new Date(req.body.end).toISOString();
      calendar.events.insert(
         {
            auth: oAuth2Client,
            calendarId: "primary",
            resource: {
               summary: req.body.summary,
               start: {
                  dateTime: startDate,
                  timeZone: "Europe/Zagreb"
               },
               end: {
                  dateTime: endDate,
                  timeZone: "Europe/Zagreb"
               },
               description: "added with calendarko"
            }
         },
         function(err, event) {
            if (err) {
               console.log(
                  "There was an error contacting the Calendar service: " + err
               );
               return;
            }
            console.log("Event created: %s", event.htmlLink);
         }
      );
      res.send({ hello: "there" });
   });

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
                  orderBy: "startTime",
                  singleEvents: true,
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
