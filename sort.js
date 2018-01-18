var myarray = [1, 10, 2, 5, 9]

myarray.sort(function(a,b){ //Array elements now sorted
    return ( a - b )
});
//console.log(myarray)

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 42 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "abby",     age: 15 },
  { id: 4, name: "alex",     age: 50 },
];


students.sort(function (a, b) {
   if (a.name < b.name) {
    return -1;
  }
  else if (a.name > b.name) {
    return 1;
  } else {
     return b.age - a.age;
 }
});


console.log(students)


/*
// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});

students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (a.name !== b.name) {
    return a - b;
  } else {

  return a.value - b.value

  }
  return "The student list is filled in incorrectly, please review it.";
});

console.log(students)

items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
Array.prototype.sort()

items.sort(function (a, b) {
  return a.value - b.value;
});

Write a sorting function (sometimes called a custom comparator),
that sorts the above array first by the name ascending alphabetically,
 and in cases where the names are equal sort by descending age.

Read about the Array.prototype.sort() function on MDN in order to implement
your solution

Did you notice that the sort() function modifies the array being sorted,
 whereas filter() and map() functions produced new arrays?


*/