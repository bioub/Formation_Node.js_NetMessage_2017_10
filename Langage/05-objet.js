// 1 - on manipule des objets existants
console.log(typeof Math); // object
console.log(typeof process); // object
console.log(typeof console); // object
console.log(typeof document); // object (dans le navigateur)

// 2 - les objets sont extensibles
console.log(Math.sum); // undefined

// Ajouter des clés/valeurs
Math.sum = (a, b) => a + b;
console.log(Math.sum); // function
console.log(Math.sum('1', '2')); // '12'

// Modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// Supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// 3 - 2 opérateurs pour accéder au contenu

console.log(Math.PI);
console['log'](Math['PI']);

// [] syntaxe plus dynamique
const prop = 'PI';
const method = 'error';
console[method](Math[prop]);


// 4 - Si besoin d'un nouvel objet ponctuel

/*
Mauvaise pratique
const coords = new Object();
coords.x = 10;
coords.y = 20;
*/
// object literal
const coords = {
  x: 10,
  y: 20
};

// Autre syntaxes litérales (à privilégier)
const strSimple = '';
const strDouble = "";
const strBackQuote = ``;
const array = [];
const regexp = /[a-z]+/;

// 5 - Boucler sur des clés
console.time('boucle for in');
for (const key in coords) {
  const value = coords[key];
  console.log(key, value);
}
console.timeEnd('boucle for in');

console.time('boucle for of');
const keys = Object.keys(coords);
for (let key of keys) {
  const value = coords[key];
  console.log(key, value);
}
console.timeEnd('boucle for of');

// 6 - Besoin récurrent du même type d'objet
// on utilise une fonction constructeur

// Avec une closure
const Coords = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.sum = function() {
    return x + y;
  };
  this.setZ = function(_z) {
    z = _z;
  };
  this.getZ = function() {
    return z;
  };
};

const coords1 = new Coords(1, 2);
const coords2 = new Coords(2, 3);
const coords3 = new Coords(4, 5, 10);
console.log(coords3.getZ()); // 10
coords3.setZ(20);
console.log(coords3.getZ()); // 20

// Closure dans un function => mauvaise pratique
console.log(coords3.getZ === coords2.getZ); // false


// Avec un prototype
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return "Bonjour je m'appelle " + this._prenom;
};

const romain = new Contact('Romain');
console.log(romain._prenom); // . regarde dans l'objet et trouve
console.log(romain.hello()); // . regarde dans l'objet et ne trouve pas
// et cherche dans le prototype de la fonction constructeur dans un 2e temps

const eric = new Contact('Eric');
console.log(eric.hello === romain.hello); // true
