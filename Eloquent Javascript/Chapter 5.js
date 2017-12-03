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
ancestry.forEach(function(person) {
  var mother = byName[person.mother]; //this is wrong, don't know how to fix it now though. 
  //Challenge for tomorrow.
  var ageMother = person.born - mother.born;
  ageMothers.push(ageMother);
});
console.log(average(ageMothers));

// → 31.2