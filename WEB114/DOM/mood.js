//Adrian Wangerin 4/18/2026 WEB 114 Working With a Web Page and JavaScript
"use strict"

//Step 1. Select Elements
const title = document.querySelector("#title"); // id that is declared in html
const quote = document.querySelector("#quote"); //embeded in the No mood selected in the html not done yet

const happyButton = document.querySelector("#happy"); 
const  calmButton = document.querySelector("#calm"); 
const angryButton = document.querySelector("#angry"); 
const sleepyButton = document.querySelector("#sleepy"); 
/*
const happy = document.getElementById("happy");
const calm = document.getElementById("calm");
const angry = document.getElementById("angry");
const sleepy = document.getElementById("sleepy");
*/

//step 2. Create Data Object
const moods = {        //moods = the object with all this in it
   happy: {
    name: "Happy",
    bg: "#FFD700",
    text: "#bd26b0",
    message: "Warm, smiles and the sun's kisses!"
   },
   calm: {
    name: "Calm",
    bg: "#A7C7E7",
    text: "#003366",
    message: "Breathe"
   },
      angry: {
    name: "Angry",
    bg: "#aa3e1d",
    text: "#170c09",
    message: "Simmer down, You'll be okay."
   },
      sleepy: {
    name: "Sleepy",
    bg: "#35ab85",
    text: "#110404",
    message: "Sweet dreams!"
   },
};

// Step 3. Create the function that changes the page information
//this function gets the moodName from the originall called functions string
function changeMood(moodName){
    const mood = moods[moodName];     //mood is now the same as moods[moodName] allowing step 2 to be able to look up the string happy,calm,angry,sleepy from step 4.

    //step 3b. Update Page (still in function)
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    quote.textContent = mood.message; 
    title.textContent = mood.name

    console.log("Mood selected", moodName);
    console.log("Mood Settings", mood);

}

//step 4. Event Handler
//function that is called when the even listener is triggered VVVVVV
//that adds the string to step 2.

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

//step 6. Event Listener

happyButton.addEventListener("click", handleHappyClick);
calmButton.addEventListener("click", handleCalmClick);
angryButton.addEventListener("click", handleAngryClick);
sleepyButton.addEventListener("click", handleSleepyClick);


// Notes VVVVV

/* moodName inside the function is singlehandedley the most 
confusing part of this assignment. moodName is a placeholder that has no actual purpose other than putting the string inside it

e.g. "const mood = moods[moodName]"

When a user clicks on a the happy button (happyButon) it triggers the 
happyBtn.addEventListener("click", handleHappyClick);

which then triggers the function function handleHappyClick() {
  changeMood("happy");  "happy" is the string 
}

this funtion calls the other function

function changeMood(moodName) {

  const mood = moods[moodName]; moodName gets replaced with the string "happy" from the previous function

  the moods object then looks for "happy" and then alters the web page 



/*



video notes VVVVV


happyButton.addEventListener("click", function(event){
    happyButton.style.backgrounColor = moods
});

calmButton,Button.addEventListener("click", function(event){
    happyButton.style.backgrounColor = moods
});

angryButtonButton.addEventListener("click", function(event){
    happyButton.style.backgrounColor = moods
});

sleepyButtonButton.addEventListener("click", function(event){
    happyButton.style.backgrounColor = moods
});


/*const angryButton = document.getElementById("angryButton");

angryButton.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato";
}); */