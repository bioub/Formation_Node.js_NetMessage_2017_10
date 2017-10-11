const readline = require('readline');
const chalk = require('chalk');
const random = require('./random');

// 2 - class
class Jeu {
  constructor(options = {}) {
    // 3 - default param
    // options = options || {};

    // 4 - Destructurer
    const {min = 0, max = 100} = options;
    //const min = options.min || 0;
    //const max = (options.max !== undefined) ? options.max : 100;

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  jouer() {
    if (this._essais.length) {
      // 5 - Template Literal / Template String
      console.log(chalk.blue(`Vous avez déjà joué : ${this._essais.join(', ')}`));
    }

    this._rl.question(chalk.blue('Quel est le nombre ? '), (answer) => {

      // 6
      // Number.parseInt
      // Number.isNaN
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      // fin de partie
      console.log(chalk.green('Gagné'));
      this._rl.close();
    });
  }
}

module.exports = Jeu;
