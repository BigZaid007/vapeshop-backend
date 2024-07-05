const mongoose = require('mongoose');

// Define schema for the 'banners' collection
const bannerSchema = new mongoose.Schema({
    urls: {
        type: [String],  // Assuming 'urls' is an array of strings
        required: true
    }
});

// Create and export the Banner model
const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
