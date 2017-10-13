const express = require('express');
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

// GET /api/restaurants
// qui retourne dans la réponse en JSON
// tous les restaurants du tableaux (ou les 20 premiers
// si mongo)
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

// GET /api/restaurants/:id
// qui retourne dans la réponse en JSON
// le restaurant dont l'id passera par l'URL
app.get('/api/restaurants/:id', (req, res) => {
  const id = req.params.id;

  const restaurant = restaurants.find(r => r.restaurant_id === id);
  /*
  const restaurant;

  for (let i=0; i<restaurants.length; i++) {
    if (restaurants[i].id === id) {
      restaurant = restaurants[i];
    }
  }
  */
  if (!restaurant) {
    res.statusCode = 404;
    return res.json({
      msg: 'Restaurant not found',
    });
  }

  res.json(restaurant);
});

// DELETE /api/restaurants/:id
// qui supprime et retourne dans la réponse en JSON
// le restaurant dont l'id passera par l'URL
app.delete('/api/restaurants/:id', (req, res) => {
  const id = req.params.id;
  
  const restaurant = restaurants.find(r => r.restaurant_id === id);

  if (!restaurant) {
    res.statusCode = 404;
    return res.json({
      msg: 'Restaurant not found',
    });
  }

  const i = restaurants.indexOf(restaurant);
  restaurants.splice(i, 1);

  res.json(restaurant);
});

// Pour les 2 derniers, faire une erreur 404
// si l'id du restaurant n'existe pas

app.listen(port, () => {
  console.log('Server started');
  console.log(`http://localhost:${port}`);
});