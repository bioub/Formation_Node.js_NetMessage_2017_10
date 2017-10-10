// usejsdoc.org
/**
 * Additionne 2 paramètres
 * @param {number} a Le 1er nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;
/*
var sum = function (a, b) {
  return a + b;
};
*/
for (let i=0; i<10; i++) {
  if (i % 2 === 0) {
    console.log(sum(i, i));
  }
}

