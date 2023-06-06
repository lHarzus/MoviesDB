const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  phone: {
    type: Number,
    required: true,
  },
  movies: [
    {
      id : {
        type: Number
      }
    }
  ],
  series: [
    {
      id : {
        type: Number
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
