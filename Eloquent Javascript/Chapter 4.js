// CHAPTER 4 - Objects and arrays

// 4.1 - The sum of a range

function range(start, end) {
  var arrRange = [];
  if (start < end) {
    for (i = start; i <= end; i++) {
      arrRange.push(i);
    }
  }
  else {
    for (i = start; i >= end; i--) {
      arrRange.push(i);
    }
  }
  return arrRange
}

function sum(arr) {
  arrSum = 0;
  for (i = 0; i < arr.length; i++) {
    arrSum = arr[i] + arrSum;
  }
  return arrSum;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//BONUS additions

function range(start, end, step) {
  var arrRange = [];
  if (start < end) {
    for (i = start; i <= end; step ? (i = i + step) : (i++))
      arrRange.push(i);
  }
  else {
    for (i = start; i >= end; step ? (i = i + step) : (i--))
      arrRange.push(i);
  }
  return arrRange;
}

function sum(arr) {
  arrSum = 0;
  for (i = 0; i < arr.length; i++)
    arrSum = arr[i] + arrSum;
  return arrSum;
}

// 4.2 - Reversing an array

function reverseArray(array){
  var rev = [];
  for (i = array.length - 1; i = 0; i--)
    return rev.push(array[i]);
}

function reverseArrayInPlace(arrayValue) {
  let length = arrayValue.length;
  for (i = length - 1; i >= 0; i--) {
    temp = arrayValue[i];
    console.log(temp);
    arrayValue.pop();
    console.log(arrayValue[i]);
    arrayValue.unshift(temp);
  }
  return arrayValue;  
}


///////
function reverseArray(array){
  var rev = [];
  for (i = array.length - 1; i >= 0; i--)
    rev.push(array[i]);
  return rev;
}

function reverseArrayInPlace(arrayValue) {
  for (i = 1; i < arrayValue.length; i += 2) {
    temp = arrayValue[i];
    arrayValue.unshift(temp);
  }
  return arrayValue;
}

function reverseArrayInPlace(arrayValue) {
  let length = arrayValue.length;
  for (i = 0; i <= length - 1; i--) {
    temp = arrayValue[i];
  }
  return arrayValue;  
}

// Working solution:

function reverseArray(array){
  var rev = [];
  for (i = array.length - 1; i >= 0; i--)
    rev.push(array[i]);
  return rev;
}

function reverseArrayInPlace(arrayValue) {
  for (i = 1; i < arrayValue.length; i += 2) {
    temp = arrayValue[i];
    arrayValue.unshift(temp);
  }
  var prune = (arrayValue.length -1) / 2;
  for (i = 0; i < prune; i++)
    arrayValue.pop();
  return arrayValue;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// Example code (Should still study):
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

// 4.3 - A list

var list = {}
function arrayToList(array) {
  for (i < array.length; i >= 0; i--){
    if (i < array.length - 1){
      list = {value : array[i], rest : list};
    }
    else 
      list = {value : array[array.length - 1], rest: null};
  }
  return list
}

// First part works, below doesn't.

function listToArray(listArray) {
  var arrayList = {};
  for (var i in listArray){
    console.log(arrayList);
    arrayList = listArray.i;
  }
}

console.log(arrayToList([10, 20, 50, 100]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Final working example. Except the second console.log call
// for some reason takes the first arrayToList.

var list = {}
function arrayToList(array1) {
  for (i < array1.length; i >= 0; i--){
    if (i < array1.length - 1){
      list = {value : array1[i], rest : list};
    }
    else 
      list = {value : array1[array1.length - 1], rest: null};
  }
  return list
}

// Example code

function arrayToList(array1) {
  var list = null;
  for (var i = array1.length - 1; i >= 0; i--){
    list = {value : array1[i], rest : list};
  }
  return list
}

// Got it to work but now it's using the fist array, rather than the new one for the second thing.

var arrayNew = [];
function listToArray(listArray) {
  for (var value in listArray) {
    if (listArray.value != null) {
      arrayNew.push(listArray.value);
      listArray = listToArray(listArray.rest);
    }
  }
  return arrayNew;
}


function prepend(element, prependList) {
  var newList = {value : element, rest : prependList};
  return newList;
}

var nthList = [];
function nth(nList, n) {
  for (var value in nList) {
    nthList.push(nList.value);
    nList = nth(nList.rest);
    return nthList[n];
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// 4.5 - Deep comparison
/* Write a function, 
deepEqual takes two values. 
returns true only if they are the same value
OR 
are objects with the same properties 
- whose values are also equal when compared with 
- a recursive call to deepEqual. 

To find out whether to compare two things by 
identity (use the === operator for that) or by 
looking at their properties, you can use 
the typeof operator. If it produces "object" for both values, 
you should do a deep comparison. But you have to take one 
silly exception into account: by a historical accident, typeof 
null also produces "object".*/
var aA = {};
var bB = {};
function deepEqual(a, b){
  if (typeof a && typeof b == "object") {
    for (value in a){
      if (a === b && a == b)
        return true;
      else {
        for (value in a)
          aA.push(a);
        for (value in b)
          bB.push(b);
        deepEqual(aA, bB);
      }
    }
  }
  else {
    if (a == b)
      return true;
    else
      return false;
  }
}


// Your code here.
var aA = {};
var bB = {};
function deepEqual(a, b){
  if (typeof a && typeof b == "object") {
    for (value in a){
      if (a === b && a == b)
        return true;
      else {
        for (value in a)
          aA.push(a);
        for (value in b)
          bB.push(b);
        deepEqual(aA, bB);
      }
    }
  }
  else {
    if (a === b)
      return true;
    else
      return false;
  }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(4, 4));
// -> true
console.log(deepEqual(4, 5));
// -> false
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true



function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}


//Looked at the example, couldn't figure it out. I think this is what is happening.
// Still a little confused about the !(prop in a).

function deepEqual(a, b){
  if (a === b) return true;
  // So this works because the function will stop after it encounters
  // return. So that means that if the first is true, it'll return 
  // true and not go on, if it's not true, it will go to the next one.
  
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;
  // here it checks whether either typeof a != an object, or typeof b != and object
  // or a == null or b == null. In all those cases, given that a !== b, the thing
  // should return false. If not, it's supposed to compare objects.
  
  var propsInA = 0, propsInB = 0;
  
  for (var prop in a)
    propsInA += 1; // This adds 1 to propsInA for every value in the object a.
  
  for (var prop in b) {
    propsInB += 1; // Adds 1 to propsInB for every value in the object b.
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false; // Returns false if the current prop in a is not the same as the
    // current prop in b (so if it doesn't have the same amount of properties) OR if 
    // that property is not the same with a recursive function.
  }
  
  return propsInA == propsInB;
  // if all the other if's hadn't happened, then here it compares the amount of 
  // properties and returns true if they're the same.
  
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(null, null));
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true