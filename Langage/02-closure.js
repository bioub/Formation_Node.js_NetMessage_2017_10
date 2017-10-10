let cpt = 0;

const log = function(msg) {
  // Portée sauvegardée : Closure
  // 2 conditions :
  // 1 - Imbriquer 2 fonctions
  // 2 - la fonction interne soit appelée en dehors
  // (par return, par objet, par callback)
  //const sauvegarde = ++cpt;
  return function() {
    //console.log(sauvegarde);
    console.log(msg);
  };
};

const logHello = log('Hello');
const logBye = log('Bye');
logHello();
logHello();
logBye();

// sans closure : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// avec closure : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(log(i), 1000);
}
