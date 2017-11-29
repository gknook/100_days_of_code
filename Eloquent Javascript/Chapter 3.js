// CHAPTER 3 - Functions

// 3.1 - Min function

function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
console.log(min(0, -10));

// 3.2 - Recursive
// 0 is even
// 1 is odd
// any other number (n) evenness == n-2

function isEven(number) {
  if (number < 0) 
    number = -number;
  if (number == 0) 
    return true;
  else if (number == 1)
    return false;
  else
    return isEven(number - 2);
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// 3.3 - Bean counting
function countBs(string) {
	return countChar(string, "B");
}

function countChar(string, char) {
  var countChar = 0;
  for (n = 0; n < string.length; n++) {
    if (string.charAt(n) == char)
      countChar ++;
  }
  return countChar;
}