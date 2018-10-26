//Business logic and explanation of functions below

// This function will create a range of numbers by taking a number as a parameter (num) and running it through a for loop. By starting the index at 1 instead of 0, the for loop places a range of numbers (listed as one string eg 1234 not 1, 2, 3, 4) by adding the value of i to the result array as the loop moves from 1 to num. If i = 0 then the list would be 01234.
function count(num) {
  var result = [];
  for (var i = 0; i < num; i++) {
    result += i;
  }
  return result.split('')
}

//This function will take a parameter and evaluate if the number it is given as an arguement contains 0. If it does then it will change the number to Beep. The function accomplishes this by using a method called .includes to evaluate whether or not the parameter contains the character 0. If there is a 0 in the string, then the empty variable result will be passed the value "beep". IF there is a 1 in the string then, using the same logic, the function will return the work Beep.
function beepBoop(num) {
  var holder = num
  var str = num.toString();
  if (str.includes('1')) {
    return " Beep";
  } else if (str.includes('0')) {
    return " Boop";
  } else {
    return " " + holder
  }
};

//Boop function refactored into beepBoop
function boop(num) {
  var holder = num;
  if (num.includes('0')) {
    return "Boop";
  } else {
    return holder
  }
  return result
};

//This function will take a number and determine if it is divisible by 3. This is accomplished by checking to see if the parameter has a remainder of 0 when it is divided by 3. If true the result displays the text. If false the number is returned. DOES NOT WORK FOR MULTIPLE ENTRIES
function divBy3(num) {
  var result = [];
  if (num % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    result.push(" " + num);
  }
  return result
}

// This function checks to see if the input value is a number
function valueChecker(num) {
  if (isNaN(num)) {
    alert("Not a valid entry!")
  }
}

//This function will take the user input and translate it into the appropriate message depending on the range of numbers.
function converter(num) {
  var result = [];
  var check = valueChecker(num);
  var arr = count(num);
  for (var i = 1; i <= arr.length; i++) {
     if (i % 3 === 0) {
      result.push(" I'm sorry, Dave. I'm afraid I can't do that")
    } else {
      var numberSwitch = beepBoop(i)
      result.push(numberSwitch)
    }
  };
  if (result.length > 1) {
      result.unshift("Boop")
  }
  return result
};


  // UI logic

  $(document).ready(function() {
    $("#form1").submit(function(event) {
      event.preventDefault();
      var input = $("#userInput").val();
      $('#results').text(converter(input));
    });
  });
