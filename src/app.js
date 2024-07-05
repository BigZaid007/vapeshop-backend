const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoute');  // Import admin routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { dbName: 'vapeshop' })  // Specify dbName here
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/admin', adminRoutes);  // Use admin routes

app.get('/', (req, res) => {
    res.send('Welcome to the Vapeshop API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
