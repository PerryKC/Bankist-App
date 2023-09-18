'use strict';

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far �

/*
// User Attempt
// code works but has a bug, prints, "undefined, //, undefined at end"
// create a function checkDogs that accepts 2 arrays
const checkDogs = function (dogsJulia, dogsKate) {
  const julia = dogsJulia;
  const kate = dogsKate;
  // Create a shallow copy of Julia's array, remove the cats from that
  let juliaList = [...julia];
  let kateList = [...kate];
  juliaList.shift();
  juliaList.splice(2, 2);
  let finalList = juliaList.concat(kateList);
  // return finalList;
  finalList.forEach(function (age, i) {
    if (age >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and it is ${age} years old.`
      );
    } else {
      console.log(`Dog number ${i} is still a puppy`);
    }
  });
};


// for (const [i, age] of checkDogs.entries)
//   if (age >= 3) {
//     console.log(`Dog number ${i} is an adult, and it is ${age} years old.`);
//   } else {
//     console.log(`Dog number ${i} is still a puppy`);
//   }

console.log(checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]));


// Jonas's Attempt

// I think the splice method creates a shallow copy, using spread operator was unnecessary

// Code is simpler, less repetitve
// At the end, function is called, no need to do console log, function does that
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);



// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// 1. calculate the dog age in human years ()

// create an array that holds all of the manipulated data
// Use map to apply a function to each element
// const calcAverageHumanAge = function (ages) {
//   const humanYears = ages.map(function (mov) {
//     return mov * 2;
//   });
// };

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Coding Challenge #2 = User attempt
// Use map function to create new array 'humanAge' with human ages of dogs
// Use filter method to filter out dogs less than 18 human years old
//
const calcAverageHumanAge = data1.map(function (ages) {
  if (ages <= 2) {
    let humanAge = 2 * ages;
    return humanAge;
    // console.log(humanAge);
    // let adultsOnly = humanAge.filter(function (humanYears) {
    //   return humanYears > 18;
    // });
    // return adultsOnly;
  } else {
    let humanAge = 16 + ages * 4;
    return humanAge;
    // console.log(humanAge);
  }
});

let adultsOnly = calcAverageHumanAge.filter(function (mov) {
  return mov > 18;
});

let totalAverage = adultsOnly.reduce(function (acc, cur, i, arr) {
  return acc + cur;
});

console.log(adultsOnly);
console.log(calcAverageHumanAge);
console.log(totalAverage / adultsOnly.length);
// console.log(adultsOnly);



// Jonas's attempt
// Scoped better, all done inside one function, easier to change data

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);

  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // return average;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;

  // 2 3. (2 + 3)/2.5 or 2/2 + 3/2 = 2.5
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);



// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// Challenge #3
// Rewrite code below using arrow function and chaining

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);

//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   // return average;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   return average;

// User Attempt
const calcAverageHumanAge = (ages, mov) =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age) => acc + age, 0) / ages.length;

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));


// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Test data:
//  const dogs = [
//  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//  { weight: 8, curFood: 200, owners: ['Matilda'] },
//  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//  { weight: 32, curFood: 340, owners: ['Michael'] },
//  ];

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// User Attempt
// Will solve first and then uses Jonas's code to make it simpler
// 1. Loop Over the array, for each dog calculate the food portion and add it to the object as a new property
// Don't create an array, loop over the array, Don't use map

// Possible methods - push method, calculate correct food portion and add it to each element
// Possible method - forEach

// dogs.forEach(function (movement, index, array) {
//   const recommendedPortion = movement.weight ** 0.75 * 28 * 0.001;

//   dogs[index].recommended = `${recommendedPortion} kgs`;
//   // console.log(dogs[index]);
//   // console.log(movement);
//   // console.log(recommendedPortion);
//   return dogs;
// });

dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2. Find Sarah's Dog from owner's list, say if it is eating too much or too little
// Probably use .find
// Use find index will loop over array, then accesses a callback function

// Working findIndex method here for all other keys, owners is tricky bc it's locked in an array
// How to access an array paired as a key value?
// console.log(dogs.findIndex(dog => dog.weight === 8));

// console.log(dogs.find(dog => ));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }`
// );

// These if statements are wrong, compares recFood to itself, not to current food
// Should have checked the logic here instead of assuming it worked after one statement
// Will copy the ternary operator function from Jonas's
// if (dogSarah.recFood > dogSarah.recFood * 1.1) {
//   console.log("Sarah's dog is eating too much");
// } else if (dogSarah.recFood < dogSarah.recFood * 0.9) {
//   console.log("Sarah's dog is not eating enough");
// } else {
//   console.log("Sarah's dog is eating the right amount.");
// }

// 3. Make an array of all the pets that eat too much/little
// Go through dogs array, if that dog eats more/less, add them to an array
// ORRRRRR search through notes and see if there is a method that creates a copy of original array after filtering
// To make new array... .map, .filter, .slice, .concat, .flat, .flatMap
// USE FILTER METHOD HERE, creates a shallow copy filtered down to just elements that pass the filter test

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood * 1.1);
// console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood * 0.9);
// console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"K
// const ownersOverFeed = function (dog) {};

// Here we have a list of the owners, now we need to cycle through that list
// Maybe try forEach loop, array in array may be tricky
// forEach loop doesn't work well on array within array
// Maybe try to flatten array

// This gives us all variables in a flattened array, easier to work with
// Now we can cycle through this array and print each movement into the string
// Here we have the movement and index, now how to show each element with 'and' in between
// Look into using join method, maybe you can join the array elements with 'and'
const ownersOverFeed = ownersEatTooMuch.map(dog => dog.owners).flat();
// console.log(ownersOverFeed);
ownersOverFeed.forEach(function (movement, index) {
  console.log(`${ownersOverFeed.join(' and ')}'s dogs eat too much!`);
  // console.log(`${ownersOverFeed[index]}`);
  // console.log(`${movement}'s dog eats too much`);
});

const ownersUnderFeed = ownersEatTooLittle.map(dog => dog.owners).flat();
ownersUnderFeed.forEach(function (movement) {
  console.log(`${ownersUnderFeed.join(' and ')}'s dogs eat too little!`);
});

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

// This is to create it's own array of correct owners
// We only want to know whether there are owners who feed their dogs correctly
// const correctOwners = dogs.filter(
//   dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// console.log(correctOwners);

// Use .some or .every here, forgot the difference
// .some, if there element meets condition then it logs true
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.
const correctOwners = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
// Try sort array, apparently that mutates the original but may be a shallow copy

const shallowCopyDogs = [...dogs];
// console.log(shallowCopyDogs);

shallowCopyDogs.sort((a, b) => a.recFood - b.recFood);
console.log(shallowCopyDogs);

// dogs.sort();
// console.log(dogs);
*/

// **************************************
// Jonas's Attempt

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Same result, way simpler, arrow function is legit
dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
// console.log(dogs);

// Jonas uses includes method
// 2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.
// You could have used flat map here instead, anytime you use flat and map
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
