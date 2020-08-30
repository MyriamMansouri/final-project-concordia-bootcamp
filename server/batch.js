require("dotenv").config();
const mongoose = require("mongoose");
const Marker = require("./models/marker-model");
const User = require("./models/user-model");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
mongoose.set("useFindAndModify", false);

const batch = async () => {
    await User.deleteMany().exec()
    await Marker.deleteMany().exec()
}

batch()