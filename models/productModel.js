'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectIdType = Schema.Types.ObjectId;

const ProductSchema = new Schema({
    _id: {
        type: ObjectIdType
    },
    id: {
        type: Number
    },
    barcode: {
        type: String,
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    photo: {
        type: String
    },
    tags: [{
        type: String
    }],
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
