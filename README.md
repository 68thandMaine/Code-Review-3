Beep Boop Machine

Code review # 3 for Epicodus

By: Chris Rudnicky
With additional help from StackOverflow, mdn developer documentaion, and Epicodus lessons

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

To account for i['0'] % 3 === 0 I added a condition that pushes the word Boop to index 0 of the range array if the range is greater than 1. If a user enters 1 to the input field without this condition then the return result will be the I'm sorry statement. By prepending a variable into the array once the length is greater than 1, the program works as intended.

Setup:

Clone this repository

Click and drag the cloned folder to the internet explorer icon on your computer to open.


Technologies Used:

Bootstrap
html
Javascript
jquery


Support/Contact information:

chrisrudnicky@gmail.com

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2018 {Chris Rudnicky}
