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

// GET /api/restaurants
// qui retourne dans la réponse en JSON
// tous les restaurants du tableaux (ou les 20 premiers
// si mongo)

// GET /api/restaurants/:id
// qui retourne dans la réponse en JSON
// le restaurant dont l'id passera par l'URL

// DELETE /api/restaurants/:id
// qui supprime et retourne dans la réponse en JSON
// le restaurant dont l'id passera par l'URL

// Pour les 2 derniers, faire une erreur 404
// si l'id du restaurant n'existe pas