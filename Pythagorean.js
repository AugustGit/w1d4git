var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(obj) {

  var a = Math.sqrt((obj.x^2) + (obj.y^2))
  return a;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
/*

Pythagorean Theorem (x^2 + y^2 = z^2)

var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];


var reformattedArray = kvArray.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

*/