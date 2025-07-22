const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ msg: 'User not found' });
  if (user.password !== password) return res.status(401).json({ msg: 'Invalid password' });
  res.json({ msg: 'Login success' });
});

module.exports = router;
