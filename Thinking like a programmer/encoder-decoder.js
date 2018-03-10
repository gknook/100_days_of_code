/*-------- |ENCODER| --------*/
 /*------- |-*-*-*-| -------*/
  /*------ |L-*-*-*| ------*/
   /*----- |-*-O-*-| -----*/
    /*---- |*-G-*-*| ----*/
     /*--- |-*-*-A-| ---*/
      /*-- |*-N-*-*| --*/
       /*- |-*-*-G-| -*/

/* This program is written to encode a message to numbers. 
Each character can be represented by up to 5 digits.
The program beneath it will subsequently decode the message.
The decoder was written first, so the encoder is based on that.

From ANSII it follow that character codes 65 to 90 are uppercase,
while character codes 97 to 122 are lowercase.

There's a special code included to switch between uppercase / 
lowercase and punctuation.

For punctuation I follow the table below:
|--------------------------|
| conversion table         |
|--------------------------|
| Number | ANSCII | Symbol |
|--------------------------|
| 1      | 33     | !      |
| 2      | 63     | ?      |
| 3      | 44     | ,      |
| 4      | 46     | .      |
| 5      | 32     | (space)|
| 6      | 49     | ;      |
| 7      | 34     | "      |
| 8      | 39     | '      |
|__________________________|
*/

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

// Create the punctuation table as indicated above
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

// Rule to encode the character code by randomly multiplying it.
function caseScrambler(numChar, caseSc, multiplier) {
  return multiplier * Math.floor(500 * Math.random()) + (numChar - caseSc);
}

// Rule to encode the switch code by randomly multiplying it.
function zeroScrambler(numChar, multiplier) {
  return multiplier * Math.floor(543 * numChar);
}

// Actual function that encodes the message.
function encodeMessage (stringArray) {
  for (var i = 0; i < stringArray.length; i++) { // For every character in the array that was created from the string.
    var currentChar = stringArray[i];
    var previousChar = stringArray[i - 1];
    if (upperNumber.includes(currentChar)) { // If character is upper case
      if (upperNumber.includes(previousChar) || i == 0) { // If previous character was also uppercase (no switch necessary) or if it's the first character.
        encodedArray.push(caseScrambler(currentChar, upCase, charMult)); // Scramble by multiplying the 27 (for the alphabet) * random * 500 + current character number -> so that the modulo left is the character number.
      }
      else if (lowerNumber.includes(previousChar)) { // If the previous character was lower case
        encodedArray.push(zeroScrambler(Math.random(), charMult)); // Add two mode switches. These need to be first, because the decoder will be in lower case, and will need to switch to upper case, which takes two switches. This one multiplies for character because first switch is from lower case to punctuation.
        encodedArray.push(zeroScrambler(Math.random(), puncMult)); // Second switch is multiplied by punc because this one is from punctuation to Upper case.
        encodedArray.push(caseScrambler(currentChar, upCase, charMult)); // Scramble the character
      }
      else { // If the previous character was punctuation
        encodedArray.push(zeroScrambler(Math.random(), puncMult)); // One switch. Punctuation to Upper case.
        encodedArray.push(caseScrambler(currentChar, upCase, charMult));
      }
    }
    else if (lowerNumber.includes(currentChar)) { // Same, but for lower -> punct -> upper
      if (lowerNumber.includes(previousChar) || i == 0) {
        encodedArray.push(caseScrambler(currentChar, lowCase, charMult));
      }
      else if (punctuationNumber.includes(previousChar)) {
        encodedArray.push(zeroScrambler(Math.random(), puncMult));
        encodedArray.push(zeroScrambler(Math.random(), charMult));
        encodedArray.push(caseScrambler(currentChar, lowCase, charMult));
      }
      else {
        encodedArray.push(zeroScrambler(Math.random(), charMult));
        encodedArray.push(caseScrambler(currentChar, lowCase, charMult));
      }
    }
    else if (punctuationNumber.includes(currentChar)) { // Same, but for punct -> upper -> lower
      if (punctuationNumber.includes(previousChar) || i == 0) {
        encodedArray.push(caseScrambler(currentChar, puncCase, puncMult));
      }
      else if (upperNumber.includes(previousChar)) {
        encodedArray.push(zeroScrambler(Math.random(), charMult));
        encodedArray.push(zeroScrambler(Math.random(), charMult));
        encodedArray.push(caseScrambler(currentChar, puncCase, puncMult));
      }
      else {
        encodedArray.push(zeroScrambler(Math.random(), charMult));
        encodedArray.push(caseScrambler(currentChar, puncCase, puncMult));
      }
    }
    else // Failcase if someone uses a non-allowed character (should build this out)
      console.log("Write more simply.");
  }
  return encodedArray;
}

var messageInput = "May the Force be with You!" // Input message
var punctuationNumber = [1,2,3,4,5,6,7,8]; // Punctuation array
var encodedArray = [];
let charMult = 27; // Amount of characters in the alphabet + 1
let puncMult = 9; // Amount of punctuation characters + 1
let upCase = 64; // Start of upperCase characters in ANSII
let lowCase = 96; // Start of lowerCase characters in ANSII
let puncCase = 0; // Start of puncCase characters in this program

var lowerNumber = []; // Array to check whether the char fits within the lowerCharacters
for (var i = 97; i <= 122; i++) {
  lowerNumber.push(i);
}

var upperNumber = []; // Array to check whether the char fits within the upperCharacters
for (var i = 65; i <= 90; i++) {
  upperNumber.push(i);
}

var convertedArray = indexer(delimit(messageInput, ""));
includePunc(convertedArray);
let encoded = encodeMessage(convertedArray);
let encodedMes = encoded.toString();
console.log("The Secrete code: " + encodedMes);

/*-------- |DECODER| --------*/
 /*------- |-*-*-*-| -------*/
  /*------ |L-*-*-*| ------*/
   /*----- |-*-O-*-| -----*/
    /*---- |*-G-*-*| ----*/
     /*--- |-*-*-A-| ---*/
      /*-- |*-N-*-*| --*/
       /*- |-*-*-G-| -*/

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
/*function delimit(str, delimiter) {
  var delimitedArray = str.split(delimiter);
  return delimitedArray;
}*/

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