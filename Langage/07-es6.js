class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }

  hello() {
    return `Bonjour je m'appelle ${this.prenom}`;
  }
}

const romain = new Contact('Romain');
console.log(romain.hello()); // Bonjour je m'appelle Romain

// class, juste du sucre syntaxique, au final la même chose qu'avant
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

// REST Params
const sum = (...nbs) => nbs.reduce((acc, nb) => acc + nb);
console.log(sum(1, 2, 3, 4)); // 10

// SPREAD Operator
const nbs = [1, 2, 3, 4];
const autresNbs = [...nbs, 5, 6];
console.log(sum(...autresNbs)); // 21
const clone = [...nbs]; // que le premier niveau

// Destructing
const [, x, , y] = nbs;
const {prenom: prenomContact, nom: nom = ''} = romain;
console.log(prenomContact); // 'Romain'

// const coords = {x: x, y: y};
// Shortand property
const coords = {x, y};
