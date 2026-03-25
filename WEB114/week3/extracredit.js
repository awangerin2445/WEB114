//Adrian Wangerin web 114 3/24/2026

"use Strict";

let answer1 = prompt("What is the capital of Kansas?");
answer1 = answer1.toLowerCase();

if (answer1 === "topeka") {
 console.log("Question 1: Correct!");
} else {
console.log("Question 1: Incorrect! The capital of Kansas is Topeka.");
 }

let answer2 = prompt("What football team is located in Kansas City?");
answer2 = answer2.toLowerCase();

if (answer2 === "chiefs" ) {
     console.log("Question 2: Correct!");
 } else {
    console.log("Question 2: Incorrect! It is the Chiefs.");
}

let answer3 = prompt("Kansas is known as the ______ state.");
    answer3 = answer3.toLowerCase();

if (answer3 === "sunflower") {
      console.log("Question 3: Correct!");
} else {
    console.log("Question 3: Incorrect! Kansas is the sunflower state.");
}

let answer4 = prompt("What famous movie was based in Kansas?");
answer4 = answer4.toLowerCase();

if (answer4 === "the wizard of oz") {
    console.log("Question 4: Correct!");
} else {
    console.log("Question 4: Incorrect! The movie is called The Wizard of Oz.");
}

console.log("Quiz complete!");