//Adrian Wangerin 4/10/2026

"use strict"

let fragileCrate = 0;
let loadCrate = 0;
let inspectCrate = 0;

for (let number = 1; number <= 20; number++) {
   
   if (number % 5 === 0) {
    console.log(number + " This crate is fragile, excersise caution!");
    fragileCrate++
   }
   else if (number % 2 === 0) {
    console.log(number + " Load the crate");
    loadCrate++
   }
   else {
    console.log(number + " Inspect this crate");
    inspectCrate++
   }
}

console.log("Total fragile crates: " + fragileCrate);
console.log("Ready to load: " + loadCrate);
console.log("Crates that need to be inspected: " + inspectCrate);
console.log("Total crates scanned: " + (fragileCrate + loadCrate + inspectCrate));


/*

for (let location = 1; location <= 20, location++) {
   
   if (location % 7 === 0) {
    console.log("Location" + location + "Hidden treasure!");
    treasureCount++
   }
   else if (location % 3 === 0) {
    console.log("Location" + location + "Food Supplies!");
    foodCount++
   }
   else {
    console.log("Location" + location + "Empty sand");
    treasureCount++
   }
}

console.log("Treasure found: " + treasureCount);
console.log("Food supplies found: " + foodCount);
console.log("Empty location: " + emptyCount);
*/ 