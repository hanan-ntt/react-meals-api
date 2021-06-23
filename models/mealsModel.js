const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is required for every new meal added'],
    unique: [true, 'Meal with this name already exists'],
  },
  description: {
    type: String,
    required: [true, 'Description must be added for each meal.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required for every new meal that is added.'],
  },
});

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;
