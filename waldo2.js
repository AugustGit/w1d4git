// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element,i) {
    if (arr[i] === "Waldo") {
      found(i);

       // execute callback
    }
  })
}

function actionWhenFound(i) {

  console.log("Found Waldo at index " + i);
}

//var people = ["Alice", "Bob", "Waldo", "Winston"];

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//people.findWaldo.forEach("Waldo");

//findWaldo(, actionWhenFound);

// var a = arr.indexOf("Apple")
// var indexPosition = arr.indexOf("Waldo")
// Array.prototype.forEach()

/* arr.forEach(function(element) {
     console.log(element);
});
*/
