const events = require('events');
const EventEmitter = events.EventEmitter;

const event = new EventEmitter();

const hello = (prenom) => {
  event.emit('hello', prenom);
  return `Bonjour ${prenom}`;
};


event.on('hello', (prenom) => {
  console.log('hello called with ' + prenom);
});

event.once('hello', (prenom) => {
  console.log('onetime : hello called with ' + prenom);
});

hello('Jean');
hello('Romain');