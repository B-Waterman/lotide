//Testing assertEqual.js

const assertEqual = require('../assertEqual');

assertEqual('Lighthouse Labs', 'Bootcamp'); //Fail!
assertEqual(1, 1); //Pass!
assertEqual('Hello World', 'Hello World'); //Pass!
assertEqual('cherry', 10); //Fail!

/*
assertEqual(👍, 👌) //Fail!
assertEqual(❤️, ❤️) //Fail!

Sadly, emojis are not a Number, String, or Boolean and cannot pass, but worth trying
*/