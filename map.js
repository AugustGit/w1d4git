var words = ["ground", "control", "to", "major", "tom"];


function map(array, callback) {
  var newArray = [];
  for (element of array){
    newArray.push(callback(element));
  }
  return newArray;
}

var wordLength = map(words, function(word) {
  return word.length;
});

console.log(wordLength)

//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
/*

/*
map(words, function(word) {
  return word.length;
});



map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// make new array => run function.

/*
expected return

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/