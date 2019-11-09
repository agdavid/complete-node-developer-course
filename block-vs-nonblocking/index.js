// const getUserSync = require('./getUserSync.js');

// const start = new Date();
// console.log(start);

// const userOne = getUserSync(1);
// console.log(userOne);

// const userTwo = getUserSync(2);
// console.log(userTwo);

// const sum = 1 + 33;
// console.log(sum);

// const end = new Date();
// console.log(end);

// const diffTime = Math.abs(end - start);
// console.log(diffTime);

const getUserAsync = require('./getUserAsync.js');

const start = new Date();
console.log(start);

getUserAsync(1, (user) => {
    console.log(user);
});

getUserAsync(2, (user) => {
    console.log(user);
});

const sum = 1 + 33;
console.log(sum);

const end = new Date();
console.log(end);

const diffTime = Math.abs(end - start);
console.log(diffTime);


