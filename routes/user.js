const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const dataInReq = req.body;
  // Create a new User Model Object
  const newUser = new User();
  try {
    newUser.email = dataInReq.email;
    newUser.password = dataInReq.password;
    newUser.interests = dataInReq.interests;
    newUser.place = dataInReq.place;
    newUser.gender = dataInReq.gender;
    // Call the save() method and dont forget to put await
    await newUser.save();
  } catch (e) {
    // There is something wrong while creating new user
    res.status(400).send(e);
  }
  res.status(200).send(newUser);
});

router.get('/', (req, res) => {});

module.exports = router;
