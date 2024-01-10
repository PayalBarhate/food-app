const mongoose = require('mongoose')

const { Schema } = mongoose;

const FoodSchema = new Schema({
    CategoryName: {
        type: String,
    },
    name: {
        type: String,
    },
    img: {
        type: String,
    },
    options: {
        type: Array,
    },
    description: {
        type: String,
    },

});

module.exports = mongoose.model('food_items', FoodSchema)