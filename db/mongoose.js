const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => console.log("Connected to mongodb atlas"))
  .catch(() => console.log("Error from mongoose connect"));
