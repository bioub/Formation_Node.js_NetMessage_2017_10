// 1 - Method Properties
const rand = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
};

const readline = require('readline');

// 2 - class
class Jeu {
  constructor(options = {}) {
    // 3 - default param
    // options = options || {};

    // 4 - Destructurer
    const {min = 0, max = 100} = options;
    //const min = options.min || 0;
    //const max = (options.max !== undefined) ? options.max : 100;

    this._entierAlea = rand.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  jouer() {
    if (this._essais.length) {
      // 5 - Template Literal / Template String
      console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      // 6
      // Number.parseInt
      // Number.isNaN
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      // fin de partie
      console.log('Gagné');
      this._rl.close();
    });
  }
}

const jeu = new Jeu();
jeu.jouer();
