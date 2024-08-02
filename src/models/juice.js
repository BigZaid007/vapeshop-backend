const mongoose = require('mongoose');

const juiceSchema = new mongoose.Schema({
    items: [{
        name: String,
        flavors: [String],
        img: {
            type: Map,
            of: String
        },
        price: Number,
        nicotine: Number,
        description: {
            type: Map,
            of: String
        },
        isIced: {
            type: Map,
            of: Boolean
        },
        size: {
            type: Map,
            of: Number
        },
        mainimage: String,

    }]
});

const Juice = mongoose.model('juice', juiceSchema, 'juice');

module.exports = Juice;