const Juice = require('../models/juice');



exports.listItems = async (req, res) => {
    try {
        const items = await Juice.find({});
        console.log('Items fetched from Juice collection:', items);

        // Send the list of items as a JSON response
        res.status(200).json(items);
    } catch (error) {
        // Handle any errors by sending a 500 status code and error message
        res.status(500).json({ message: error.message });
    }
};
