const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('hi from comment router POST');
});

router.get('/', (req, res) => {
  res.send('hi from comment router GET');
});

module.exports = router;
