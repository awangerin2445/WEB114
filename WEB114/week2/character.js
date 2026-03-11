//Adrian Wangerin 3/4/2026 JavaScript for Index.html
// Create promt to ask the user questios about their character

"use strict";
// 1. Welcome the user
alert("Welcome to the Adventure Realm! Let's create your hero!");
// 2. Ask for their characters name
let characterName = window.prompt("What is your character's name?");
//Ask the user what pet their character will have
const pet = window.prompt(`What kind of pet does ${characterName} have? (dragon, 
wolf, robot, unicorn, phoenix, etc.)`, "dragon");
//Ask the user what their characters superpower is
const superpower = window.prompt(`What is ${characterName}'s special superpower?`);
//Ask the user if their character likes to fight monsters.
const likesFighting = window.confirm(`Does ${characterName} like fighting monsters?
Click OK for YES
Click Cancel for NO`);
//Let user know you are gathering details
alert(`Gathering magic for ${characterName}... almost ready!"`);
// Put it all together in one story
alert(` ====================================
    In a faraway land, ${characterName} travels with their mighty pet ${pet}, capable of great power, the power of ${superpower}!"
     ====================================`)
