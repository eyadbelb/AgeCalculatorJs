// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  if (isNaN(parseInt(year))) return false;
  else if (isNaN(parseInt(month))) return false;
  else if (isNaN(parseInt(day))) return false;
  else return true;
}
console.log(checkParamsFn(1, 1, 1));

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year) {
  if (2021 - parseInt(year) >= 18) return true;
  else return false;
}
console.log(checkOverEighteenFn(1996));

function calculateAgeFn(year, month, day) {
  if (checkParamsFn(year, month, day) == false) return console.log("error");
  else if (checkOverEighteenFn(year) == false) return console.log("error");
  else console.log(2021 - parseInt(year));
}
console.log(calculateAgeFn(1996, 1, 25));

// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

//module.exports = calculateAgeFn;
