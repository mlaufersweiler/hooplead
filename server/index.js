require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");

const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db is in here");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(SERVER_PORT, () => {
  console.log(`docked at port: ${SERVER_PORT}`);
});
