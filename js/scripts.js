// This function will create a range of numbers by taking a number as a parameter (num) and running it through a for loop. By starting the index at 1 instead of 0, the for loop places a range of numbers (listed as one string eg 1234 not 1, 2, 3, 4) by adding the value of i to the result array as the loop moves from 1 to num. If i = 0 then the list would be 01234.
function count(num) {
  var result = [];
  for (var i = 1; i < num; i++) {
    result += i;
  }
  return result.push(result + num)
}

//This function will take a parameter and evaluate if the number it is given as an arguement contains 0. If it does then it will change the number to Beep. The function accomplishes this by using a method called .includes to evaluate whether or not the parameter contains the character 0. If there is a 0 in the string, then the empty variable result will be passed the value "beep". IF there is a 1 in the string then, using the same logic, the function will return the work Beep.
function beepBoop(num) {
  var result = " ";
    if (num.includes('0')) {
      result = "Beep"
    } else if (num.includes('1')) {
      result ="Boop"
    }
      return result
}

//This function will take a number and determine if it is divisible by 3. This is accomplished by checking to see if the parameter has a remainder of 0 when it is divided by 3. If true the result displays the text. If false the number is returned. DOES NOT WORK FOR MULTIPLE ENTRIES
function divBy3 (num) {
  var result = [];
if (num % 3 === 0) {
 result.push("I'm sorry, Dave. I'm afraid I can't do that.");
} else {
 result.push(num);
}
return result
}


$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var number = $("#userInput").val();
    $('#results').text(divBy3(number));
  });
});
