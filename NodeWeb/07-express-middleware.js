const express = require('express');
const morgan = require('morgan');
const port = 8080;

const restaurants = [{
  name: 'Pizzaillo',
  cuisine: 'Italian',
  restaurant_id: '123' 
}, {
  name: 'Sushi Boulogne',
  cuisine: 'Japanese',
  restaurant_id: '456' 
}];

// Développer un API REST à partir du tableau
// ou de la base mongo de ce matin (au choix)
const app = express();

app.use(morgan('dev'));
/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
*/

const authenticate = (req, res, next) => {
  if (false) { // test à remplacer par la vérification d'un token
    res.statusCode = 401;
    return res.json({
      msg: 'Unauthorized',
    });
  }
  
  next();
};

// GET /api/restaurants
// qui retourne dans la réponse en JSON
// tous les restaurants du tableaux (ou les 20 premiers
// si mongo)
app.get('/api/restaurants', authenticate, (req, res, next) => {
  res.json(restaurants);
});

// GET /api/restaurants/:id
// qui retourne dans la réponse en JSON
// le restaurant dont l'id passera par l'URL
app.get('/api/restaurants/:id', authenticate, (req, res, next) => {
  const id = req.params.id;

  if (!id.match(/[1-9][0-9]*/)) {
    return next(new Error("L'id doit être un nombre entier"))
  }

  const restaurant = restaurants.find(r => r.restaurant_id === id);

  if (!restaurant) {
    req.errorMsg = 'Restaurant not found';
    next();
  }

  res.json(restaurant);
});

// DELETE /api/restaurants/:id
// qui supprime et retourne dans la réponse en JSON
// le restaurant dont l'id passera par l'URL
app.delete('/api/restaurants/:id', authenticate, (req, res, next) => {
  const id = req.params.id;
  
  if (!id.match(/[1-9][0-9]*/)) {
    return next(new Error("L'id doit être un nombre entier"))
  }

  const restaurant = restaurants.find(r => r.restaurant_id === id);

  if (!restaurant) {
    req.errorMsg = 'Restaurant not found';
    next();
  }

  const i = restaurants.indexOf(restaurant);
  restaurants.splice(i, 1);

  res.json(restaurant);
});

// Pour les 2 derniers, faire une erreur 404
// si l'id du restaurant n'existe pas
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  return res.json({
    msg: req.errorMsg || 'Not found',
  });
});

app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  return res.json({
    msg: err.message,
  });
});

app.listen(port, () => {
  console.log('Server started');
  console.log(`http://localhost:${port}`);
});