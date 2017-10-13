const express = require('express');
const mongodb = require('mongodb');
const port = 8080;
const mongoUri = 'mongodb://localhost/test';

// Développer un API REST à partir du tableau
// ou de la base mongo de ce matin (au choix)
const app = express();

// GET /api/restaurants
// qui retourne dans la réponse en JSON
// tous les restaurants du tableaux (ou les 20 premiers
// si mongo)
/*
app.get('/api/restaurants', (req, res) => {
  mongodb.connect(mongoUri, (err, db) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      return res.json({
        'msg': 'mongodb connection error',
      });
    }

    db.collection('restaurants')
      .find()
      .limit(20)
      .toArray((err, restaurants) => {
        if (err) {
          console.log(err);
          res.statusCode = 500;
          return res.json({
            'msg': 'mongodb connection error',
          });
        }

        res.json(restaurants);
      })
  })
});
*/
app.get('/api/restaurants', async (req, res) => {
  try {
    const db = await mongodb.connect(mongoUri);
    const req = db.collection('restaurants').find().limit(20);
    const restaurants = await req.toArray();
    res.json(restaurants);
  }
  catch(err) {
    console.log(err);
    res.statusCode = 500;
    return res.json({
      'msg': 'mongodb connection error',
    });
  }
});

/*
app.get('/api/restaurants', (req, res) => {
  mongodb.connect(mongoUri)
    .then(db => db.collection('restaurants')
      .find()
      .limit(20)
      .toArray()
    )
    .then(restaurants => res.json(restaurants))
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      return res.json({
        'msg': 'mongodb connection error',
      });
    });
});
*/

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