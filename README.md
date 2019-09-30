# Ars Futura React task

> This is my solution to `JavaScript Engineer @ Ars Futura` task

## Technology stack

-  Front end: React + Redux
-  Back end: Node.js with Express + MongoDB

## Getting started

You can either...

### Run it locally

1. Clone the repo
2. Go to `{project-root}/config`
3. Create `dev.js` file and fill it with all the required items.

   -  Google Client ID
   -  Google Client Secret
   -  mongoURI
   -  cookieKey
   -  apiKey

> `dev.js` should look like this:

```javascript
module.exports = {
   googleClientID: "{yourGoogleClientID}",
   googleClientSecret: "{yourGoogleClientSecret}",
   mongoURI: "{yourMongoURI}",
   cookieKey: "{someRandomString}",
   apiKey: "{googleAPIKey}"
};
```

4. Go back to project root directory
5. Type `npm run dev`

**React** runs on `localhost:3000`, and the **Express server** is on `localhost:5000`.

Or you can...

### Go to deployed version

> [Heroku deploy](https://frozen-shore-41171.herokuapp.com)

Please allow for up to half a minute for server to start if it wasn't used for a long time.

## 1. oAuth part

Most of the oAuth stuff is in the `routes/authRoutes.js`, and `services/passport.js`.

### Security

User's access token is saved to browser session, and all the sensitive info (Google Client ID, Google Client Secret, API key, etc.) is stored in a file that is never pushed to git.

### Front end

App header is always showing either Login with Google button if the user is not logged in, or Logout button if the user is logged in.

## 2. Calendar API part

Calendar API requests are in `routes/calendarRoutes.js`. Access token from oAuth and API key are required for all the calls.
The app exclusively uses user's primary calendar

### Front end

#### Events

By default, the app shows elements from the next 7 days from user's calendar (Week view). Month and day views are also awailable from the menu below the header.

#### New Event

> Date picker **works** on **Chrome**.

The app offers the simplest possible event creator with just a title (`summary`), start date and time (`start`) and end date and time (`end`).
