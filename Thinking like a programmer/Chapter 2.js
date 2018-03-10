/* EXERCISE 1 */
// Drawing a square / triangle
#
##
###
####
###
##
#

var square = "";
for (var row = 0; row < 7; row++) {
  for (var line = 0; line < 4 - (Math.abs(3 - row)); line++) {
    square += "#";
  }
  square += "\n";
}
console.log(square);


/* EXERCISE 2 */
// Take number of any length
// Double every other number
// Insert double into number
// Add separate values of digits together
// The number is valid when divisible by 10
function doublingOther(array) {
  for (i = 1; i < array.length; i = i+2) { // Select only every other numbers starting with the second one
    array[i] = array[i] * 2; // Double these numbers
    if ( array[i] > 9 ) { // If it has two digits
      array[i] = array[i] - 10; // Remove 10 (the first digit)
      array.push(1); // Add the digit to the end - this works because it can't be more
    }
  }
}

function sum(array) {
  var valTotal = 0;
  array.forEach(function(element) { valTotal = valTotal + element; });
  return valTotal;
}

var idNumber = 0;
var parsed = [];
idNumber = prompt("Please enter identification number", "Only numbers are accepted");
console.log("Entered number: " + idNumber);
var idNumberSplit = idNumber.split(""); // Split the string into seperate numbers -> array
idNumberSplit.forEach(function(numb) {
  parsed.push(parseInt(numb, 10));
});
if (parsed.some(isNaN))
  console.log("That's not a number.");
else {
  doublingOther(parsed);
  var valCode = sum(parsed);
  var validator = 10 - valCode % 10;
  console.log("Validation code: " + valCode);
  console.log("Validator: " + validator);
  parsed.push(validator);
  console.log("Comparison: " + sum(parsed));
  if (valCode + validator == + sum(parsed))
    console.log("Your id number is correct!");
  else
    console.log("Please check your id number again.");
}


////////////////////
// Take number of any length 176238
// Double every other number
// Insert double into number
// Add separate values of digits together
// The number is valid when divisible by 10

function doublingOther(array) {
  var doubled = array;
  for (i = 1; i < array.length; i = i+2) { // Select only every other numbers starting with the second one
    doubled[i] = array[i] * 2; // Double these numbers
    console.log("doubled: " + doubled[i]);
    if ( doubled[i] > 9 ) { // If it has two digits
      doubled[i] = array[i] - 10; // Remove 10 (the first digit)
      doubled.push(1); // Add the digit to the end - this works because it can't be more
      console.log("bigger than 10: " + doubled[i]);      
    }
  }
}

function sum(array) {
  var valTotal = 0;
  array.forEach(function(element) { valTotal = valTotal + element; });
  return valTotal;
}

var idNumber = 0;
var parsed = []
idNumber = prompt("Please enter identification number", "Only numbers are accepted");
console.log("Entered number: " + idNumber);
var idNumberSplit = idNumber.split(""); // Split the string into seperate numbers -> array
idNumberSplit.forEach(function(numb) {
  parsed.push(parseInt(numb, 10));
});
console.log(parsed);
if (parsed.some(isNaN))
  console.log("That's not a number.");
else {
  doublingOther(parsed);
  console.log(parsed);
  var valCode = sum(parsed);
  var validator = 10 - valCode % 10;
  console.log("Validation code: " + valCode);
  console.log("Validator: " + validator);
  parsed.push(validator);
  console.log("Comparison: " + sum(parsed));
  if (valCode + validator == + sum(parsed))
    console.log("Your id number is correct!");
  else
    console.log("Please check your id number again.");
}

