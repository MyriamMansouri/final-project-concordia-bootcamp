const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require('cloudinary')
const passport = require("passport");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const favicon = require("express-favicon");
const path = require("path");
const initializePassport = require("./passport-config");
const users = require("./routes/users");
const markers = require("./routes/markers");
require("dotenv").config();

const PORT = process.env.PORT || 5678;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

cloudinary.config({
  cloud_name: "hcrafbjaa",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

initializePassport(passport);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/users", users);
app.use("/api/markers", markers);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.use("/", express.static(__dirname));
  app.use("/images", express.static(path.join(__dirname, "./build/assets")));
  app.use(favicon(__dirname + '/build/favicon.ico'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
} else {
  // default routing
  app.use(favicon(__dirname + "../build/favicon.ico"));
  app.use("/images", express.static(path.join(__dirname, "../public/assets")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

// real routes from FE

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
