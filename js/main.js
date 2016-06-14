var sayHit = function (name){
  console.log("Hello there, " + name);
};

// console.log("Hangman is just a game.");
// sayHi("Niclas");

var turnsLeft = function () {
  var element = document.getElementbyId('turn-count');
  return element.textContent;
}

var guesses = [];
var wordList = ["cookies", "elephant", "doughnut", "doge", "transport",
  "recursion", "agriculture", "espresso", "computer", "transmogrify", "lightsaber"]


var randomItem = function(items){
  var index = Math.floor(Math.random() * items.length);
  return items [index];
}

// math.floor(math.random() * wordList.length);
