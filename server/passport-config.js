const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user-model");
const bcrypt = require("bcrypt");

const initialize = (passport) => {
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({ email }).select("+password").exec();

    if (!user) {
      return done(null, false, { message: "No user with that email." });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect." });
      }
    } catch (err) {
      return done(err);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      return done(err, user);
    });
  });
};

module.exports = initialize;
