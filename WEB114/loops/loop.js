//WEB 114 Adrian Wangerin 4/10/2026 

"use strict"

let fragileCrate = 0;
let loadCrate = 0;
let inspectCrate = 0;

for (let number = 1; number <= 20; number++) {
   
   if (number % 5 === 0) {
    console.log(number + " This crate is fragile, handle with care.");
    fragileCrate++
   }
   else if (number % 2 === 0) {
    console.log(number + " Load crate");
    loadCrate++
   }
   else {
    console.log(number + " Inspect thisc rate");
    inspectCrate++
   }
}

console.log("Total fragile crates: " + fragileCrate);
console.log("Ready to load: " + loadCrate);
console.log("Crates that need to be inspected: " + inspectCrate);
console.log("Total crates scanned: " + (fragileCrate + loadCrate + inspectCrate));
