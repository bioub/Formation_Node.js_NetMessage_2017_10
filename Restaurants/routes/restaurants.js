const Router = require('express').Router;
const ctrlRestaurant = require('../controllers/restaurants');
const authenticate = require('../middlewares/authenticate');
const bodyParser = require('body-parser');

const router = new Router();

router.get('/',
  ctrlRestaurant.list,
);

router.post('/',
  authenticate,
  bodyParser.json(),
  ctrlRestaurant.add,
);

router.get('/:id',
  ctrlRestaurant.show,
);

router.delete('/:id',
  authenticate,
  ctrlRestaurant.delete,
);

module.exports = router;
