//OS Module 

const os = require('os') //Here os module is built in module that's why we do not write like ./      In this case, we directly write name

console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.totalmem())
console.log(os.uptime())
console.log(os.type())