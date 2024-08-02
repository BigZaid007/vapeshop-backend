const Juice = require('../models/juice');


exports.listhome = async (req, res) => {
    try {
        // Fetch all documents from the Juice collection
        const juices = await Juice.find({});

        // Flatten the items arrays from each document into a single list
        const allItems = juices.reduce((acc, juice) => {
            return acc.concat(juice.items);
        }, []);

        console.log('Flattened items list:', allItems);

        // Send the flattened list of items as a JSON response
        res.status(200).json(allItems);
    } catch (error) {
        // Handle any errors by sending a 500 status code and error message
        res.status(500).json({ message: error.message });
    }
};

