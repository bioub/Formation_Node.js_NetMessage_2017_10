const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/test';

mongoose.connect(mongoUri);

const Restaurant = mongoose.model('restaurants', {
  name: {
    type: String,
    required: true,
  },
  cuisine: String,
});

Restaurant.find({cuisine: 'English'}, (err, restaurants) => {
  restaurants.forEach(r => {
    console.log(r.name);
  });
  mongoose.disconnect();
})