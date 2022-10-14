const { EventEmitter } = require("events"); //? init event core modules nodejs

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const myEmitter = new EventEmitter(); //? init instance eventMitter

myEmitter.on('birthday', birthdayEventListener); //? set event name 'birthday'
myEmitter.emit('birthday', 'Ogi'); //? set value event from event 'birthday'