const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose
  .connect(
    "mongodb+srv://van:fyckpassword@cluster0-gwtte.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connection Success"))
  .catch(err => {
    console.log("Unable to connect to the mongodb instance. Error: ", err);
  });
