// const person = {
//   name: 'Maddie',
//   age: 22,
//   location: {
//     city: 'Bethesda',
//     temp: 92
//   }
// }

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// CHALLENGE MODE

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = ['7503 Clarendon Rd', 'Bethesda', 'Maryland', '20814'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

// CHALLENGE MODE

const item = ['Coffee (hot)', '2.00', '2.75'];

const [bev, , price] = item;

console.log(`A medium ${bev} costs ${price}`);