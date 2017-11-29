/* Documentation

===============
Definitions
===============
Values: values are chunks that represent pieces of information.
Operators: operators are used to assign values, compare values, perform arithmetic operations, and more.
Expressions: expressions are fragments of code that produces a value.
Statements: statements are "instructions" to be "executed" by the web browser.
Variables: variables catch and hold values.
The environment: the collection of variables and their values that exist at a given time.
Functions: a piece of program wrapped in a value, which can be applied in order to run the wrapped program.
Arguments: values given to functions.
Control flow: order of execution of the program.
Block: A sequence of statements wrapped in braces: {}.
Function Parameters: 
Function Body: the statements that are to be executed when the function is called.
Call stack: Place where the computer stores the context from which the functionw as called.
Closure: Being able to reference a specific instance of a local variable in an enclosing function.

===============
Values
===============

Values are chunks that represent pieces of information.

numbers: numeric values

strings: Represent text and are denoted by putting them in quotation marks ("" or ''). 
\ a backslash makes the subsequent charactar special (escaping the character). */
"Firstline \nSecondline \"within quotations\" and\t one tab away."

/*Booleans: True or False

objects: 

functions: a piece of program

undefined values: null & undefined

===============
Operators
===============
Operators are applied to values, creating new value.

Operator precedence: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

* 		multiplication
/ 		division
+ 		addition
- 		subtraction
% 		remainder
< 		smaller than
<=		smaller than or equal to
> 		bigger than
>=		bigger than or equal to
== 		equal to 
!= 		not equal to
===		precisely equal to
!==		not precisely equal to
&& 		and
|| 		or
! 		not
? : 	conditional operator (value on the left of ? picks which of the other two values 
		will come out). When true it's the middle value, when false the righthand value.
typeof	returns a string indicating the type of the unevaluated operand.

===============
Expressions
===============
A frament of code that produces a value is called an expression.
Every value that is written literally (such as 22 or "psychoanalysis") is an expression.

===============
Statements
===============
statements are "instructions" to be "executed" by the web browser.
A program is a list of statements.
A statement can display somethin gon the screen--that counts as changing the word--or it could
change the internal state of the machine in a way that will affect the statements that come after it.
-> Those changes are called side effects.

===============
Variables
===============
variables catch and hold values.
Defined by the keyword var, followed by the name of the variable and optionally by it's initial value
if we add the = operator and an expression. */
var number = 5;

/*Imagine variables as tentacles. They do not contain values; they grasp them-- two variables can refer
to the same value.

A single var statement may define multiple variables. The definitions must then be seperated by commas. */
var one = 1, two = 2;

/*
===============
Functions
===============
A function is a piece of program wrapped in a value, which can be applied in order to run the wrapped program.

The concept of wrapping a piece of program in a value has many uses. It is a tool to structure larger 
programs, to reduce repetition, to associate names with subprograms, and to isolate the subprograms from each
other.

Executing a function is called 'invoking', 'calling' or 'applying' it. You can call a function by
putting parentheses after an expression that produces a function value. The values between the
parentheses are given to the program inside the function. 

Values given to functions are called arguments.

A lot of functions are useful because of the side effects they produce.
When a function produces a value, it is said to return that value. Anything that produces a value is an
expression in JavaScript, which means function calls can be used within larger expressions.

A function definition is just a regular variable definition where the value given to the variable happens to
be a function */
var square = function(x) {
	return x * x;
};

/*
Functions have a set of parameters (in the above case only x) and a body, which contains the statements that
are to be executed when the function is called. A function can have multiple or no parameters.

A return statement determines the value the function returns. When control comes across such a statement,
it immediately jumps out of the current function and gives the returned value to the code that called the 
function. 

The parameters to a function behave like regular variables, but their intital values are given by the caller
of the function, not the code in the function itself. 

The variables created inside functions, including their parameters, are local to the function.

Functions can be created inside of functions. Each local scope can also see all the local scopes that contain
it. All variables from blocks around a functions's definiton are visible. 

Function variables usually simply act as names for a specific piece of the program. 

The function keyword can also be used at the start of a statements, making declaration shorter.*/

function square(x) {
	return x * x;
};

/* You shouldn't define functions inside a conditional block or loop.

===============
Control flow
===============
Top to bottom

conditional (if, else and switch)
looping (while, do, and for)

===============
Call stack
===============
Place where the computer stores the context from which the functionw as called.
Every time a function is called, the current context is put on top of this "stack". When the function
returns, it removes the top context from the stack and uses it to continue execution.

Storing the stack requires space int he compute's memory. When the stack grows too big, the computer will fail.

===============
Closure
===============*/

function wrapValue(n) {
	var localVariable = n;
	return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

/* The above is allowed and a good illustration of the concept that local variables are re-created for every call.
Being able to reference a specific instance of a local variable in an enclosing function is called closure. */

function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}

var twice = multiplier(2);
console.log(twice(5));
// -> 10

/* A good mental model is to think of the function keyword as 'freezing' the code in its body and wrapping it into a 
package (the function value). So when you read return function (...) {...}, think of it as returning a handle to a
piece of computation, frozen for later use.

In the example, multiplier returns a frozen chunk of code that gets stored in the twice variable. The last line then
calls the value in this variable, causing the frozen code (return number * factor;) to be activated. It still has
access to the factor variable from the multiplier call that created it, and in addition it gets access to the 
argument passed when unfreezing it, 5, through its number parameter.

===============
Recursion
===============







