const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./auth');
const financeRoutes = require('./finance');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb+srv://Sendan:bss@768212@cluster0.msxehep.mongodb.net/fcapp?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => {
    console.error('❌ MongoDB Error:', err.message);
    process.exit(1);
  });

app.use('/api/auth', authRoutes);
app.use('/api/finance', financeRoutes);

app.get('/', (req, res) => res.send('Finance App Backend is working!'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
