const path = require('node:path');
const fs = require('node:fs/promises');

const { User } = require('./User');
// const Hello = require('./Hello.js');
// const { helloWorldEn, helloWorldRu } = require('./Hello.js');

// console.log('Hello World!');
// // Hello.helloWorldRu();
// // Hello.helloWorldEn();
// helloWorldEn();
// helloWorldRu();

// const user1 = new User('Ivan', 'Ivanov');
// const user2 = new User('Petr', 'Petrov');
// console.log(user1);
// console.log(user2);

// console.log(path.resolve('first', 'second', 'end'));

console.log('start');
fs.readFile('./test.txt', 'utf-8')
  .then(res => console.log(res))
  .catch(err => console.log(err));
console.log('finish');




