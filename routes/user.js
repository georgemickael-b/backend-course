const express = require('express');
const router = express.Router();
const users = require('../db');

router.post('/', (req, res) => {
  const newUserDetails = req.body;
  users.push(newUserDetails);
  res.send(newUserDetails);
});

router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;
