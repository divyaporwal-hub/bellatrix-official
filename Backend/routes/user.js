const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.js");

router.post("/saveuser", async (req, res) => {
  const { fullName, userEmail, userPassword } = req.body;
  const user = new UserModel({
    fullName: fullName,
    userEmail: userEmail,
    userPassword: userPassword,
  });
  console.log(fullName);
  try {
    let result = await user.save();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});
router.get("/getuser",async (req, res) => {
  const {userEmail, userPassword } = req.query;
  // console.log(req.query);
  const result = await UserModel.find({
    userEmail: userEmail,
    userPassword: userPassword,
  });
  
  // console.log(userEmail);
  try {
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});
// router.get("/divya",(req,res)=>
// {
//   res.send("Porwal");
// })
module.exports = router;
