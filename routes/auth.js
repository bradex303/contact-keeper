const express = require('express');
const router = express.Router();

// @route		GET api/auth
// @desc		Get logged in user
// @access	Privet
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route		POST api/auth
// @desc		Auth user and get tokern
// @access	Public
router.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = router;
