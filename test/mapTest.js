//Testing map.js

const map = require('../map');


const words = ["I'm", "creating", "a", "beautiful", "pattern"];

const results1 = map(words, word => word[0]);
console.log(results1);