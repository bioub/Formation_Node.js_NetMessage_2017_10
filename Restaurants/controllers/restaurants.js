const Restaurant = require('../models/restaurant');

const listRestaurants = (req, res, next) => {
  Restaurant.find()
    .limit(10)
    .exec()
    .then(restaurants => {
      res.json(restaurants);
    })
    .catch(next);
};

const showRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      req.errorMsg = 'Restaurant not found';
      return next();
    }

    res.json(restaurant);
  }
  catch(err) {
    next(err);
  }
};

const deleteRestaurant = (req, res, next) => {
  Restaurant.findByIdAndRemove(req.params.id)
  .then(restaurant => {
    if (!restaurant) {
      req.errorMsg = 'Restaurant not found';
      return next();
    }

    res.json(restaurant);
  })
  .catch(next);
};

const addRestaurant = async(req, res, next) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();

    res.statusCode = 201;
    res.json(restaurant);
  }
  catch(err) {
    next(err);
  }
};

exports.list = listRestaurants;
exports.show = showRestaurant;
exports.delete = deleteRestaurant;
exports.add = addRestaurant;
