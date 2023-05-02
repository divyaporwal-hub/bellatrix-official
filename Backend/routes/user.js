const express = require("express");
const router = express.Router();

const UserModel = require("../../models/User.js");

router.post("/saveuser", async (req, res) => {
  const { fullName, userEmail, userPassword } = req.body;
  const user = new UserModel({
    fullName: fullName,
    userEmail: userEmail,
    userPassword: userPassword,
  });
  try {
    let result = await user.save();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
