Beep Boop Machine

Code review # 3 for Epicodus

By: Chris Rudnicky

Description:

This program will ask the user to input a number. The number is run through several functions that will alter the displayed output depending on several rules. See the specs below for more information:

Specs:

Behavior 1:
The user inputs a number and a range of numbers is created up to the inputted number.
Input: 6
Expected output: 0,1,2,3,4,5,6

Behavior 2:
A number that contains 0 should be outputted as the string "Beep"
Input: 101
Expected output: Beep

Behavior 3:
A number that contains 0 should be outputted as the string "Boop"
Input: 111
Expected output: Boop

Behavior 4:
A number that is divisible by 3 should return a string of text that says I'm sorry Dave, I can't do that.
Input: 30
Expected output: I'm sorry Dave, I can't do that.

Known Bugs:

As of 3:48 on 10/26 the function will return all of the expected outputs except for position 0. The rules for the app state that the any number containing 0 must display beep. Right now number 0 is printed as "I'm sorry...." because 0 % 3 === 0 is true.

Setup:

Clone this repository

Click and drag the cloned folder to the internet explorer icon on your computer to open.


Technologies Used:

Bootstrap
html
Javascript
jquery
