const eventEmitter = require('events');
class MyEmitter extends eventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('An event occurred!');
    setTimeout(() => {
        console.log('This is a delayed message after the event.');
    }, 3000);
});
console.log('Event listener is set up.');
myEmitter.emit('event');
console.log('Event listener is still up.');
myEmitter.emit('event');