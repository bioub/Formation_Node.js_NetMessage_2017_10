const mongoose = require('mongoose');

const Restaurant = mongoose.model('restaurants', {
  name: {
    type: String,
    required: true,
  },
  cuisine: String,
});

module.exports = Restaurant;
