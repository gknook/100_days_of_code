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

/// try 2
// Take number of any length 176238
// Double every other number
// Insert double into number
// Add separate values of digits together
// The number is valid when divisible by 10

function doubleDigit(digit) {
  var doubled = digit * 2;
  if (doubled > 9)
    var digitSum = 1 + doubled % 10;
  else
    var digitSum = doubled;
  return digitSum;
}

function parseToInt(numb) {
  var parsed = parseInt(numb, 10);
  return parsed;
};  

function luhnCheck(sixDigits) {
  var digitArray = sixDigits.split("");
  digitArray.push("0");
  digitArray.forEach(function(digit, i, arr) { 
    arr[i] = parseToInt(digit);
  });
  for (var i = digitArray.length - 2; i >= 0; i = i - 2) {
    digitArray[i] = doubleDigit(digitArray[i]);
  }
  function plus(a, b) { return a + b};
  console.log(digitArray);
  var sum = digitArray.reduce(plus);
  if (sum % 10 == 0)  
    return true;
  else
    return false;
}

console.log(doubleDigit(8));
console.log(doubleDigit(5));
console.log(doubleDigit(2));

console.log(2 * parseToInt("5"));
console.log(luhnCheck("1234567891"));
console.log(luhnCheck("1311"));

/*---- Tracking state ----*/
// read message character by character -> comma-delimited integers
// three decoding modes - uppercase / lowercase / punctuation
// uppercase & lowerscase -> modulo 27
// punctuation -> modulo 9
// modulo 0 switches decoding mode
// -> uppercase to lowercase
// -> lowercase to punctuation
// -> punctuation to uppercase
// |-----------------|
// | Number | Symbol |
// |-----------------|
// | 1      | !      |
// | 2      | ?      |
// | 3      | ,      |
// | 4      | .      |
// | 5      | (space)|
// | 6      | ;      |
// | 7      | "      |
// | 8      | '      |
// |_________________|

// 1. Get message, split into array on comma. -> convert to integer
// 2. Define the mode (start is uppercase)
// 3. For each element in the array, calculate the modulo depending on the mode
// 4. IF NOT 0 -> Save the corresponding character (String.fromCharCode(INT)) in new array depending on the mode
//    ELSE -> switch mode
// 5. return new array

// 4.x depending on the mode
// 4.1 convert integer 1-26 in uppercase letter 
// 4.2 convert integer 1-26 in lowercase letter
// 4.3 convert integer 1-8 in symbol

// Input: 18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10

let input = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";
let delimiter = ",";
var charArray = [];
var mode = 0;
// Take a string that is a number and make it an integer
function parseToInt(numb) {
  var parsed = parseInt(numb, 10);
  return parsed;
};

// Take an array of strings and parse it as an array of integers
function parseArray(arrayToParse) {
  arrayToParse.forEach(function(digit, i, arr) { 
    arr[i] = parseToInt(digit);
  });
  return arrayToParse;
};

// Break up a string into an array through the delimiter
function delimit(str, delimiter) {
  var delimitedArray = str.split(delimiter);
  return delimitedArray;
}

// Define punctuation as in exercise
function puncFunc(indexPunc) {
  switch (indexPunc) {
    case 1: return "!";
    case 2: return "?";
    case 3: return ",";
    case 4: return ".";
    case 5: return " ";
    case 6: return ";";
    case 7: return "\"";
    case 8: return "\'";
    default: mode = 0;
  }
}

// Convert decimal numbers to hex to be able to access the ASCII alphabet
function dec2hexString(dec) {
   return '0x' + (dec+0x10000).toString(16).substr(-4).toUpperCase();
}

// Function to reduce the array into one string again.
function plus(a, b) {return a + b};

// Decode the actual message
function decodeMessage (numberArray) {
  numberArray.forEach(function (digit) { // for each array element
    var index = 0;
    if (mode == 0) { // Mode default is 0 (which means uppercase)
      index = digit % 27; // Modulo of 27 -> to get index for alphabet
      if (index != 0) { 
        index = index + 64; // add 64 to get to the right number in the alphabet (upper case latin chars)
        dec2hexString(index); // convert to hex (see function)
        charArray.push(String.fromCharCode(index)); // push character to new array
      }
      else
        mode = "1"; // if 0 -> switch mode.
    }
    else if (mode == 1) {
      index = digit % 27; // Modulo of 27 -> to get index for alphabet
      if (index != 0) {
        index = index + 96; // add 96 to get to the right number in the alphabet (lower case latin chars)
        dec2hexString(index); // convert to hex (see function)
        charArray.push(String.fromCharCode(index)); // push character to new array
      }
      else
        mode = "2"; // if 0 -> switch mode.
    }
    else if (mode == 2) {
      index = digit % 9; // Modulo of 9 -> to get index for punctuation
      if (index != 0) 
        charArray.push(puncFunc(index)); // select carachter from table
      else
        mode = 0;
    }
  });
  return charArray.reduce(plus); // reduce to string
}

var message = decodeMessage(parseArray(delimit(input, delimiter))); // construct message
console.log(message);

/*---- COPY OF THE PREVIOUS BUT WITH SWITCH ----*/
let input = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";
let delimiter = ",";
var charArray = [];
var mode = "UPPERCASE";
// Take a string that is a number and make it an integer
function parseToInt(numb) {
  var parsed = parseInt(numb, 10);
  return parsed;
};

// Take an array of strings and parse it as an array of integers
function parseArray(arrayToParse) {
  arrayToParse.forEach(function(digit, i, arr) { 
    arr[i] = parseToInt(digit);
  });
  return arrayToParse;
};

// Break up a string into an array through the delimiter
function delimit(str, delimiter) {
  var delimitedArray = str.split(delimiter);
  return delimitedArray;
}

// Define punctuation as in exercise
function puncFunc(indexPunc) {
  switch (indexPunc) {
    case 1: return "!";
    case 2: return "?";
    case 3: return ",";
    case 4: return ".";
    case 5: return " ";
    case 6: return ";";
    case 7: return "\"";
    case 8: return "\'";
    default: mode = 0;
  }
}

// Convert decimal numbers to hex to be able to access the ASCII alphabet
function dec2hexString(dec) {
   return '0x' + (dec+0x10000).toString(16).substr(-4).toUpperCase();
}

// Function to reduce the array into one string again.
function plus(a, b) {return a + b};

// Decode the actual message
function decodeMessage (numberArray) {
  numberArray.forEach(function (digit) { // for each array element
    var index = 0;
    switch (mode) {
      case "UPPERCASE": 
        index = digit % 27; // Modulo of 27 -> to get index for alphabet
        if (index != 0) { 
          index = index + 64; // add 64 to get to the right number in the alphabet (upper case latin chars)
          dec2hexString(index); // convert to hex (see function)
          charArray.push(String.fromCharCode(index)); // push character to new array
        }
        else
          mode = "LOWERCASE"; // if 0 -> switch mode.
        break;
      case "LOWERCASE": 
        index = digit % 27; // Modulo of 27 -> to get index for alphabet
        if (index != 0) {
          index = index + 96; // add 96 to get to the right number in the alphabet (lower case latin chars)
          dec2hexString(index); // convert to hex (see function)
          charArray.push(String.fromCharCode(index)); // push character to new array
        }
        else
          mode = "PUNCTUATION"; // if 0 -> switch mode.
        break;
      case "PUNCTUATION": 
        index = digit % 9; // Modulo of 9 -> to get index for punctuation
        if (index != 0) 
          charArray.push(puncFunc(index)); // select carachter from table
        else
          mode = "UPPERCASE";
        break;
    }
  });
  return charArray.reduce(plus); // reduce to string
}

var message = decodeMessage(parseArray(delimit(input, delimiter))); // construct message
console.log(message);


// previous program, but then the other way around.
// for any letter in a string convert it to a random number, that the previous program will be able to decode.
// So A would be a multiple of 27 with a modulo of 1 left, etc.
// -> going from char to code would give A = 65 
// letters 65 to 90 are uppercase
// letters 97 to 122 are lowercase
// IF uppercase index = index - 64
// IF lowercase index = index - 96
// IF punctuation index = table
// IF mode previous != as current insert switch (multiple of 27 if current mode = upper/lower otherwise multiple of 9)

var messageInput = "Let's try this out."

// Split into an array.
function delimit(str, delimiter) {
  var delimitedArray = str.split(delimiter);
  return delimitedArray;
}

// Take one string and calculate the number
function calcChar(char) {
  var parsed = char.charCodeAt(0);
  return parsed;
};

// Calculate index number for each character
function indexer(splitArray) {
  var hexCodes = [];
  splitArray.forEach(function (char, index, arr) {
    hexCodes[index] = calcChar(char);
  });
  return hexCodes;
}
// |--------------------------|
// | Number | ANSCII | Symbol |
// |--------------------------|
// | 1      | 33     | !      | 32,33,34,39,44,46,49,63,64
// | 2      | 63     | ?      |
// | 3      | 44     | ,      |
// | 4      | 46     | .      |
// | 5      | 32     | (space)|
// | 6      | 49     | ;      |
// | 7      | 34     | "      |
// | 8      | 39     | '      |
// |__________________________|

// Need to translate ANSCII to 'numbers' like above. Or use ANSCII completely.

var convertedArray = indexer(delimit(messageInput, ""));

var lowerNumber = [];
for (var i = 97; i <= 122; i++) {
  lowerNumber.push(i);
}
var upperNumber = [];
for (var i = 65; i <= 90; i++) {
  upperNumber.push(i);
}
var punctuationNumber = [1,2,3,4,5,6,7,8];
var modeArray = [];
var encodedArray = [];
var testArray = [];
function includePunc(startArray) {
  for (var i = 0; i < startArray.length; i++) {
    if(startArray[i] == 33)
      startArray[i] = 1;
    else if(startArray[i] == 63)
      startArray[i] = 2;
    else if(startArray[i] == 44)
      startArray[i] = 3;
    else if(startArray[i] == 46)
      startArray[i] = 4;
    else if(startArray[i] == 32)
      startArray[i] = 5;
    else if(startArray[i] == 49)
      startArray[i] = 6;
    else if(startArray[i] == 34)
      startArray[i] = 7;
    else if(startArray[i] == 39)
      startArray[i] = 8;
  }
}

function upperScrambler(numChar) {
  return 27 * Math.floor(432 * Math.random()) + numChar - 64;
}

function lowerScrambler(numChar) {
  return 27 * Math.floor(243 * Math.random()) + numChar - 96;
}

function puncScrambler(numChar) {
  return 9 * Math.floor(543 * Math.random()) + numChar;
}

function zeroScrambler(numChar, multiplier) {
  return multiplier * Math.floor(543 * numChar);
}

includePunc(convertedArray);
function encodeMessage (stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    var currentChar = stringArray[i];
    var previousChar = stringArray[i - 1];
    if (upperNumber.includes(currentChar)) {
      if (upperNumber.includes(previousChar) || i == 0) {
        encodedArray.push(upperScrambler(currentChar));
      }
      else if (lowerNumber.includes(previousChar)) {
        encodedArray.push(zeroScrambler(Math.random(), 27));
        encodedArray.push(zeroScrambler(Math.random(), 9));
        encodedArray.push(upperScrambler(currentChar));
      }
      else {
        encodedArray.push(zeroScrambler(Math.random(), 9));
        encodedArray.push(upperScrambler(currentChar));
      }
    }
    else if (lowerNumber.includes(currentChar)) {
      if (lowerNumber.includes(previousChar) || i == 0) {
        encodedArray.push(lowerScrambler(currentChar));
      }
      else if (punctuationNumber.includes(previousChar)) {
        encodedArray.push(zeroScrambler(Math.random(), 9));
        encodedArray.push(zeroScrambler(Math.random(), 27));
        encodedArray.push(lowerScrambler(currentChar));
      }
      else {
        encodedArray.push(zeroScrambler(Math.random(), 27));
        encodedArray.push(lowerScrambler(currentChar));
      }
    }
    else if (punctuationNumber.includes(currentChar)) {
      if (punctuationNumber.includes(previousChar) || i == 0) {
        encodedArray.push(puncScrambler(currentChar));
      }
      else if (upperNumber.includes(previousChar)) {
        encodedArray.push(zeroScrambler(Math.random(), 27));
        encodedArray.push(zeroScrambler(Math.random(), 27));
        encodedArray.push(puncScrambler(currentChar));
      }
      else {
        encodedArray.push(zeroScrambler(Math.random(), 27));
        encodedArray.push(puncScrambler(currentChar));
      }
    }
    else
      console.log("Write more simply.");
   //console.log(currentMode);
  }
  return encodedArray;
}

encodeMessage(convertedArray);

let encoded = encodeMessage(convertedArray);
console.log(encoded);
let encodedMes = encoded.toString();
console.log("The Secrete code: " + encodedMes);

/*---- DECODER ----*/
let input = encodedMes;
let delimiter = ",";
var charArray = [];
var mode = "UPPERCASE";
// Take a string that is a number and make it an integer
function parseToInt(numb) {
  var parsed = parseInt(numb, 10);
  return parsed;
};

// Take an array of strings and parse it as an array of integers
function parseArray(arrayToParse) {
  arrayToParse.forEach(function(digit, i, arr) { 
    arr[i] = parseToInt(digit);
  });
  return arrayToParse;
};

// Break up a string into an array through the delimiter
function delimit(str, delimiter) {
  var delimitedArray = str.split(delimiter);
  return delimitedArray;
}

// Define punctuation as in exercise
function puncFunc(indexPunc) {
  switch (indexPunc) {
    case 1: return "!";
    case 2: return "?";
    case 3: return ",";
    case 4: return ".";
    case 5: return " ";
    case 6: return ";";
    case 7: return "\"";
    case 8: return "\'";
    default: mode = 0;
  }
}

// Convert decimal numbers to hex to be able to access the ASCII alphabet
function dec2hexString(dec) {
   return '0x' + (dec+0x10000).toString(16).substr(-4).toUpperCase();
}

// Function to reduce the array into one string again.
function plus(a, b) {return a + b};

// Decode the actual message
function decodeMessage (numberArray) {
  numberArray.forEach(function (digit) { // for each array element
    var index = 0;
    switch (mode) {
      case "UPPERCASE": 
        index = digit % 27; // Modulo of 27 -> to get index for alphabet
        if (index != 0) { 
          index = index + 64; // add 64 to get to the right number in the alphabet (upper case latin chars)
          dec2hexString(index); // convert to hex (see function)
          charArray.push(String.fromCharCode(index)); // push character to new array
        }
        else
          mode = "LOWERCASE"; // if 0 -> switch mode.
        break;
      case "LOWERCASE": 
        index = digit % 27; // Modulo of 27 -> to get index for alphabet
        if (index != 0) {
          index = index + 96; // add 96 to get to the right number in the alphabet (lower case latin chars)
          dec2hexString(index); // convert to hex (see function)
          charArray.push(String.fromCharCode(index)); // push character to new array
        }
        else
          mode = "PUNCTUATION"; // if 0 -> switch mode.
        break;
      case "PUNCTUATION": 
        index = digit % 9; // Modulo of 9 -> to get index for punctuation
        if (index != 0) 
          charArray.push(puncFunc(index)); // select carachter from table
        else
          mode = "UPPERCASE";
        break;
    }
  });
  return charArray.reduce(plus); // reduce to string
}

var message = decodeMessage(parseArray(delimit(input, delimiter))); // construct message
console.log("The actual message: " + message);