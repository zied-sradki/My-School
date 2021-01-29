const express = require("express");
const router = express.Router();
const auth = require("../../midelwar/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

// @route   GET api/auth
// @desc    auth user with jwt
// @access  Protcted
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/auth/
// @desc    Authenticate user get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email }).exec();
      // Check if user exists

      if (!user) {
        return res.send({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // Check password match
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.send({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // JWT Token generation
      //this should be taken into consideration
      // await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.send({
            token: token,
            messangerId: user.messangerId,
            username: user.firstName + " " + user.lastName,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.send("Server error");
    }
  }
);

module.exports = router;
