var num1 = 6;
var num2 = 17;

function equal(first, second) {
  if (first > second) {
    alert("Your number is too high!");
  }
  else if (first < second) {
    alert("Your number is too low!");
  }
  else {
    alert("That’s the right number! 17!");
  }
}

equal(num1, num2);
