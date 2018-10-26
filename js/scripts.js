// This function will create a range of numbers by taking a number as a parameter (num) and running it through a for loop. By starting the index at the value 1, the for loop places a range of numbers (listed as one string eg 1234 not 1, 2, 3, 4) by adding the value of i to the result array as the loop moves from 1 to num.
function replace0(num) {
  var result = [];
  for (var i = 1; i < num; i++) {
    result += i;
  }
  return result + num;
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var number = $("#userInput").val();
    $('#results').text(replace0(number));
    alert(number)
  });
});
