'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const RecipesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    ingredients: [{
        _id: false,
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
        quantity: { type: String },
    }],
}, {
    timestamps: true,
});

RecipesSchema.plugin(uniqueValidator);

restaurantSchema.virtual('addressString').get(function() {
  return `${this.address.building} ${this.address.street}`.trim();});

restaurantSchema.methods.serialize = function() {

  return {
    id: this._id,
    name: this.name,
    cuisine: this.cuisine,
    borough: this.borough,
    grade: this.grade,
    address: this.addressString
  };
};

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {Restaurant};