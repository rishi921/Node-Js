// In common JS module, we import like this
// const simple2 = require('./moduleSecond.mjs')
// simple2()

// In ES6 module, we import like this
//import { simple } from "./moduleSecond.mjs";   //To use this, in package.json we add type: module
// import { simple2 as simple } from "./moduleSecond.mjs";
// import { simple2, simple } from "./moduleSecond.mjs";
// simple();

import * as a2 from "./moduleSecond.mjs";
// console.log(a2)
console.log(a2.simple())