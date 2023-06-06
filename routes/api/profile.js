const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post(
  "/",
  [auth, [check("phone", "Phone number is required").not().isEmpty()]],
  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() });

    const { phone} = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.phone = phone;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user id
// @access  Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId")
      return res.status(400).json({ msg: "Profile not found" });
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/profile
// @desc    Delete profile & user
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });

    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/movie
// @desc    Add favorite movie
// @access  Private
router.put(
  "/movie",
  [
    auth,
    [
      check("id", "Id is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() });

    const { id } = req.body;

    const newExp = {
      id
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.movies.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/profile/series
// @desc    Add favorite series
// @access  Private
router.put(
  "/series",
  [
    auth,
    [
      check("id", "Id is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() });

    const { id } = req.body;

    const newExp = {
      id
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.series.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/profile/movie/:movie_id
// @desc    Delete profile movie
// @access  Private
router.delete("/movie/:movie_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const removeIndex = profile.movies
      .map((item) => item.id)
      .indexOf(req.params.movie_id);

    profile.movies.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/profile/movie/:movie_id
// @desc    Delete profile movie
// @access  Private
router.delete("/series/:series_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const removeIndex = profile.seriess
      .map((item) => item.id)
      .indexOf(req.params.series_id);

    profile.series.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;