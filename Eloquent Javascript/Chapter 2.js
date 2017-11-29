// CHAPTER 2 - Program structure

// 2.1 - Triangle exercise

var triangle = "#";
for (n = 0; n <=7; n ++){ 
  console.log(triangle);
  triangle = "#" + triangle;
}

// 2.2 - FizzBuzz
for (num = 1; num <= 100; num ++){
  if (num % 3 == 0 && num % 5 == 0) console.log("FizzBuzz");
  else if (num % 3 == 0) console.log("Fizz");
  else if (num % 5 == 0) console.log("Buzz");
  else console.log(num);
}

// 2.3 - Chessboard
var size = 8;
for (p = 0; p < size; p ++){
  if (p % 2 == 0){
    chessLine = ""
    // I need to determine whether to do a newline.
    if (chessLine.length <= size){ 
      for (n = 0; n < size; n ++) {
        if (n % 2 == 0)
          chessLine += " ";
        else
          chessLine += "#"; 
      }
    } 
    else {
      chessLine += "\n"; // I only need a newline when there are 8 characters on 1 line.
    }
    console.log(chessLine)
  }
  else {
    chessLine = ""
    if (chessLine.length <= size){
      for (n = 0; n < size; n ++) {
        if (n % 2 == 0)
          chessLine += "#";
        else
          chessLine += " ";
      }
    }
    else {
      chessLine += "\n";
    }
    console.log(chessLine)
  }
}

/*with help of the solution. 
Interesting is that I made this whole additional if-else statement. 
Mainly to finish a line, and then alternate that with the other if/else.
The combination of the two for loops is interesting and makes sense.
I still wonder a little about how this alternates. 
So loop 1: p = 1, then I'll make n =1 and put in p+n (1) which is not even so
I'll get the else, and thus a #. Then the second loop when p = 1, n = 1 so 
p + n is equal so it'll start with a space. 

Ok got it. :D this is already math though. Coding this is not really about
just starting, but about really thinking it through. 

Anyway it should look like this thus:*/

var size = 8;
var chessBoard = ""''

for (p = 0; p < size; p ++){
  for (n = 0; n < size; n ++) {
  	if ((p + n) % 2 == 0)
  		chessBoard += " ";
  	else
  		chessBoard += "#";
  }
  chessBoard += "\n";
}
console.log(chessBoard)