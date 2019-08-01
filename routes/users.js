const express = require('express');
const router = express.Router();

// @route		POST api/user
// @desc		Register a user
// @access	Private
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
