// This function will create a range of numbers by taking a number as a parameter (num) and running it through a for loop. By starting the index at 1 instead of 0, the for loop places a range of numbers (listed as one string eg 1234 not 1, 2, 3, 4) by adding the value of i to the result array as the loop moves from 1 to num. If i = 0 then the list would be 01234.
function replace0(num) {
  var result = [];
  for (var i = 1; i < num; i++) {
    result += i;
  }
  return result + num;
}

//This function will take a parameter and evaluate if the number it is given as an arguement contains 0. If it does then it will change the number to Beep. The function accomplishes this by using a method called .includes to evaluate whether or not the parameter contains the character 0. If there is a 0 in the string, then the empty variable result will be passed the value "beep"
function beep(num) {
  var result = " ";
    if (num.includes('0')) {
      result = "Beep"
    }
    return result
}


$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var number = $("#userInput").val();
    $('#results').text(beep(number));
  });
});
