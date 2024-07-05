const Banner = require('../models/banner');

exports.listCollections = async (req, res) => {
    try {
        // Fetch all documents from the 'banners' collection using the Banner model
        const banners = await Banner.find({}, { _id: 0, urls: 1 });

        // Extract 'urls' from each banner and log them
        const urls = banners.map(banner => banner.urls);
        console.log('URLs from banners collection:', urls);

        // Send the list of URLs as a JSON response
        res.status(200).json(urls);
    } catch (error) {
        // Handle any errors by sending a 500 status code and error message
        res.status(500).json({ message: error.message });
    }
};
