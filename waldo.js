// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var indexPosition = arr.indexOf("Waldo")
      found(indexPosition);

       // execute callback
    }
  }
}

function actionWhenFound(indexPosition) {

  console.log("Found Waldo at index " + indexPosition);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//   var a = arr.indexOf("Apple")
// var indexPosition = arr.indexOf("Waldo")