const mongoose = require('mongoose');
//schema for Menu
const menuSchema = new mongoose.Schema({
    short_name: {
        type: String,
        required: [true, "Shortname is required"],
        unique: true,
    },
    item_name: {
        type: String,
        required: [true, "itemName is required"],
        unique: true,
    },

    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },

});
// Collection will be created with Menu
const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
