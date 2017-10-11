// 'use strict';

global.prenom = 'Paul';
this.prenom = 'Jean';

const prenom = 'Eric';
const contact = {
  prenom: 'Romain',
  hello: function() {
    return 'Je suis ' + this.prenom;
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('Je suis ' + this.prenom);
    }, 1000);
  }
};

global.console.log(contact.hello()); // Je suis Romain
contact.helloAsync();

const hello = function() {
  return 'Je suis ' + this.prenom;
};

console.log(hello()); // Je suis Paul
console.log(this.prenom); // Jean

console.log(hello.call(this)); // Je suis Jean
console.log(hello.apply(contact)); // Je suis Romain

const contactClosure = {
  prenom: 'Romain',
  hello: function() {
    return 'Je suis ' + this.prenom;
  },
  helloAsync: function() {
    var _this = this;
    setTimeout(function() {
      console.log('contactClosure: Je suis ' + _this.prenom);
    }, 1000);
  }
};

contactClosure.helloAsync();

const bind = function(applyThis, cb) {

  return function() {
    cb.call(applyThis);
  };
};


const contactBindPerso = {
  prenom: 'Romain',
  hello: function() {
    return 'Je suis ' + this.prenom;
  },
  helloAsync: function() {
    setTimeout(bind(this, function() {
      console.log('contactBindPerso: Je suis ' + this.prenom);
    }), 1000);
  }
};

contactBindPerso.helloAsync();

const contactBind = {
  prenom: 'Romain',
  hello: function() {
    return 'Je suis ' + this.prenom;
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('contactBind: Je suis ' + this.prenom);
    }.bind(this), 1000);
  }
};

contactBind.helloAsync();

const contactBindCbMethod = {
  prenom: 'Romain',
  hello: function() {

    return 'contactBindCbMethod: Je suis ' + this.prenom;
  },
  helloAsync: function() {
    setTimeout(this.hello.bind(this), 1000);
  }
};

contactBindCbMethod.helloAsync();


const contactBindArrowFunction = {
  prenom: 'Romain',
  hello: function() {
    return 'Je suis ' + this.prenom;
  },
  helloAsync: function() {
    setTimeout(() => {
      console.log('contactBindArrowFunction: Je suis ' + this.prenom);
    }, 1000);
  }
};

contactBindArrowFunction.helloAsync();
