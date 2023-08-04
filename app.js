var names = prompt("Enter your name");
var chemistrymarks = +prompt("Enter your chemistry marks");
var physicsmarks = +prompt("Enter your physics marks");
var sindhimarks = +prompt("Enter your sindhi marks");
var mathsmarks = +prompt("Enter your math marks");
var totalMarks = 400;
var studentMarks = chemistrymarks + physicsmarks + sindhimarks + mathsmarks; 
var percentage = studentMarks / totalMarks * 100;
console.log(names + " total marks is " + studentMarks + " out of " + totalMarks + " and percentage is " + percentage + " %");





