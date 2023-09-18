'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Chaining Methods

// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov < 0)
//   // .map((mov) => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

/*
/////////////////////////////////////////////////

// Chaining Methods


// Array methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// this does not mutate original arr, it creates copy of array with extracted parts

// slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice method - does change the original array, usually used to delete elements
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
// doesn't mutate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));


// at method - more modern looking

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// How to get last element if you don't know array length
// at way is most convenient here, first two are old method
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));

// at method
console.log(arr.at(-1));

console.log('jonas'.at(-1));


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// Section 144 Looping Arrays: forEach
// list of deposits and withdrawals
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----------FOR EACH-----------');

// Some think this is easier to read
// movement, index, array, the order of these functions is important
// Cannot break with forEach
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Section 145: forEach with maps and sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});



// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Logging in and out of app is basically changing the opacity in CSS

// For each movement we want a new element on the list of transactions
// We will use forEach with this to loop thru array

// Create a function here so that it's not in the global scope
// Automatically putting everything in global scope is bad practice
// Note that each movement is a new row in HTML doc
// note inserAdjacentHTML string
// alternative to textContent option here - innerHTML
*/

/////////////////////////////////
// We added the second parameter 'sort' after the sorting arrays lecture because DRY
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  // Make a copy with slice instead of spread, easier to sort here
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}EUR</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// Chaining -can chain filter, map, reduce methods together in once action
// Don't overuse chaining
// Bad practice to chain methods that mutate the original array
// Don't chain splice or reverse because they modify the original object
// Note the 'owner' comes from previous data
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

// calcDisplaySummary(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}EUR`;
};
// calcDisplayBalance(account1.movements);
// calcDisplaySummary(account1.movements);
// console.log(accounts);

// ***********************************
// Find method - uses a callback method
// only returns first element in array that satisfies a condition
// Find only returns an element of an array, not an array
// Filter returns an array of selected elements
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// **************************
// Implementing login

// We add event listener to form in html
// Other info stored in there as well
// Forms in html auto reload page after clicking, we need to prevent that
// Use find method here to find correct username

// find will return undefined if no elements match that condition

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // Uses optional chaining here
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    // blur makes cursor lose focus in the 'PIN' box after clicking login
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    // // Display movements, We rewrite this code elsewhere to keep code dry
    // displayMovements(currentAccount.movements);

    // // Display balance
    // calcDisplayBalance(currentAccount);

    // // Display summary
    // calcDisplaySummary(currentAccount);
  }
});

// Implementing Transfers
// We must modify calcDisplayBalance to store the value for account
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo = '';

  // first we make sure that the transfer is valid by logging transfer valid after results
  if (
    amount > 0 &&
    receiverAcc &&
    // receiverAcc&& - uses optional chaining instead of this line
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer valid');
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  // Update UI
  updateUI(currentAccount);
});

// Request a loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

//////////////// findIndex method
//// Help close accounts if a customer leaves bank
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Delete');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Put this statement at the end of if statement, if put at the beginning, it ruins the if statement
  inputCloseUsername.value = inputClosePin = '';
});

// This makes event listener the sort button work once, but after that button doesn't work
// We solve this by creating a state check, to see if the app is currently sorting or not
// When sorted is false, we will sort it, when it's true we want the opposite

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////////
// Some and Every methods

// Some method could be called 'any' if there is any value that meets a condition...
// console.log(movements);

// // Checks for equality
// console.log(movements.includes(-130));

// // Check if there are any deposits/positive movements in the array
// // Checks for a condition
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// // EVERY
// // Only returns true if all elements of array satisfy condition
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Seperate callback
// // Here you can 'preset' the callback function, simply call this var when needed, keeps it DRY
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//////////////// flat and flatMap method

// Flattens the array here, prints an array without secondary arrays
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// the arg you put into flat method is how many levels into the original var you want to go
// const arrDeep = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//   ],
//   7,
//   8,
// ];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Same thing as above but uses chaining
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

/////////////// FLAT MAP
// Can use this for nested arrays
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

//////////////////// Sorting Arrays

// Built in sort method
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// Numbers
// console.log(movements);
// This will sort the array by string, so negatives come first
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
movements.sort((a, b) => a - b);
// console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
// console.log(movements);

// enter username
// first, get info into an array/variable, then work with that data
// Note the map arrow function here, simple and clean
// No need for return, it happens automatically in arrow function
// const user = 'Steven Thomas Williams'; // stw

// console.log(username);

// console.log(containerMovements.innerHTML);

// **************************************
// Map, Filter, Reduce

/*

Map array- current * 2 will multiply each element by 2
- creates new array
- loops over an array and applies a callback function to current array element


Filter array - returns a new array that only returns elements that passed a specific condition 

reduce - put all elements of an array into one value
// Uses "Snowball method"


// Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eruToUsd = 1.1;

// Convert this to an arrow function
// const movementsUSD = movements.map(function (mov) {
//   return mov * eruToUsd;
//   // return 23;
// });

// let movementsUSD = movements.map(mov => {
//   return mov * eruToUsd;
// });

// map and arrow function is simple one line, haters say this code is more difficult to understand
// ************ Jonas's arrow function
const movementsUSD = movements.map(mov => mov * eruToUsd);

// different ways to do it, or "paradigms" different coding philsophies
// Map method is more function style programming, the new and modern way
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eruToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);


// Computing usernames

// The filter method - filter for elements that satisfy a certain condition

// Use callback function here
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// // Create an array of the withdrawals
// // only include negative numbers

// // User attempt
// // const withdrawals = [];
// // for (const mov of movements) if (mov < 0) withdrawals.push(mov);
// // console.log(withdrawals);

// // Jonas's attempt
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// Reduce Method - boil down all the elements of an array into one single value

console.log(movements);

// Call a function
// Here, the first parameter is the 'accumulator', accumulator is like a snowball
// can add something like 0 or 100 in second part of reduce function
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration  ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// maximum value of movements array - looking for 3000
// Can use reduce for this

// Most powerful array method there is, always think about accumulator and current value and what they should be
// No need for min value here, go back to first value of array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
forEach;

calcDisplayBalance
*/

///////////////////// Creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Creates new array with 7 empty spaces
// Empty array + fill method
const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));

// Fills an array
// Similar to splice, select the index
// x.fill(1);
x.fill(1, 3, 5);
x.fill(1);
// console.log(x);

arr.fill(23, 4, 6);
// console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// underscore before i means we don't use that variable
const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('EUR', ''))
  );

  // console.log(movementsUI);

  // Alternate way to do it
  // movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

////////////// Choosing which Array Method to use

/*

To mutate original array...
// Careful, these mutate the original 
Add to original - .push .unshift
Remove from original - .pop .shift .splice
Others - .reverse .sort .fill

To make a new array...
.map .filter .slice .concat .flat .flatMap

Find an array index...
.indexOf .findIndex .find

Know if array includes something...
.includes .some .every .join

To transform to value...
.reduce .forEach

*/

////// Array Methods Practice

// Exercise 1 - sum up the total deposits
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

// console.log(bankDepositSum);

// 2. Find the total number of deposits over 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// Same thing but using reduce
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

// console.log(numDeposits1000);

// Prefixed ++ operators ***********************
// Example of a kink with the i++ operator instead of i + 1
// a++ on the first line still returns 10, if we log a afterwards it will show 11
// We can do the ++ before the a
// let a = 10;
// // console.log(a++);
// console.log(++a);
// console.log(a);

// 3. Create a new Object with reduce
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      ////////////////// two ways to get same value here, second part is more DRY
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(deposits, withdrawals);

///////////////////////// Possible coding challenge
// rewrite all the examples in this unit (array methods Practice) using only reduce method, it's possible

// 4. Write a function to convert string to Title Case, all words in a sentence are capitalized with some exceptions
// this is a nice title = This Is a Nice Title
// This technique using exceptions is very common with other applications too
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// .some

// *******************************
// Converting and checking numbers
