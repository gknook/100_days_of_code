// CHAPTER 5 - Higher order functions

// 5.1 - Flattening

/* Use the reduce method in combination with the concat method to "flatten" an 
array of arrays into a single array that has all the elements of the input arrays.*/

var arrays = [[1, 2, 3], [4, 5], [6]];

var together = []
arrays.reduce(function(a, b) {
  together = a.concat(b);
  return together
});
console.log(together)

// → [1, 2, 3, 4, 5, 6]

// Solution:
console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));
// flat, current are definitely better readable names than a, b. Also putting it directly
// into console.log makes sense I guess. 

// 5.2 - Mother-child age difference
/* Using the example data set from this chapter, compute the average age difference between
mothers and children (the age of mother when the child is born). You can use the average
function defined earlier in this chapter. 

Note that not all the mothers mentioned in the data are themselves present in the array. The
byNAme object, which makes it easy to find a person's object from thier name might be useful
here. */

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here:
// Calculate the age of each mother
// Append those ages to an array
// Calculate the average of the array
var ageMothers = [];
ancestry.forEach(function(person) { // For every person in the file.
  var mother = byName[person.mother]; // Get the name of the mother [person.mother], and use that name to reference the object.
  if (mother != null) { // Only if there is a mother.
	  var ageMother = person.born - mother.born; // Calculate the mother's age at child's birth
	  ageMothers.push(ageMother); // Push that age to an array
  }
});

console.log(average(ageMothers)); // Average the array
// → 31.2


// 5.3 - Historical life expectancy
/* When we looked up all the people in our data set that lived more than 90 years, only the 
latest generation in the data came out. Let’s take a closer look at that phenomenon. Compute 
and output the average age of the people in the ancestry data set per century. A person is 
assigned to a century by taking their year of death, dividing it by 100, and rounding it up, 
as in Math.ceil(person.died / 100). For bonus points, write a function groupBy that abstracts 
the grouping operation. It should accept as arguments an array and a function that computes 
the group for an element in the array and returns an object that maps group names to arrays 
of group members.*/

// Average age of people per century
// Century defined by Math.ceil(person.died / 100)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var sixT = [];
var sevT = [];
var eigT = [];
var ninT = [];
var tweT = [];
var twfT = [];
ancestry.forEach(function(person) { // For each person in ancestry
  var age = person.died - person.born; // Calculate their age
  var century = Math.ceil(person.died / 100); // Determine what century
  //list.century = century;  list.age = age; // Create a new object with age and century
  //console.log(list);
  if (century == 16) { // Categorize them by century. I should probably refactor this? -> I'm guessing that is also more the excersize than what I did now.
    sixT.push(age);
  } else if (century == 17) {
    sevT.push(age);
  } else if (century == 18) {
    eigT.push(age);
  } else if (century == 19) {
    ninT.push(age);
  } else if (century == 20) {
    tweT.push(age);
  } else if (century == 21) {
    twfT.push(age);
  }
});

console.log("16: " + average(sixT));
console.log("17: " + average(sevT));
console.log("18: " + average(eigT));
console.log("19: " + average(ninT));
console.log("20: " + average(tweT));
console.log("21: " + average(twfT));





