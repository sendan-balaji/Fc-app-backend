const express = require('express');
const router = express.Router();
const Record = require('./models/record');

router.post('/add', async (req, res) => {
  const record = new Record(req.body);
  await record.save();
  res.json({ msg: 'Record added' });
});

router.get('/all', async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

module.exports = router;
