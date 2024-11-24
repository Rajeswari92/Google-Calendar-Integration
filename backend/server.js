const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
//const authRoutes = require('./routes/auth');
//app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))