/* WEB 114 Adrian Wangerin 3/31/2026 */
"use strict";

const favMonth = prompt("What is your favorite month?");
switch (favMonth.toLowerCase()) {
    case "december":
    case "january":
    case "february":
        console.log(`You love the winter months!`);
    break;
    case "march":
    case "april":
    case "may":
        console.log(`Spring is nice with everything blooming.`);
    break;
    case "june":
    case "july":
    case "august":
        console.log(`You enjoy the summer months!`);
    break;

    case "september":
    case "october":
    case "november":
        console.log(`Fall is fun with all of the pretty colors.`);
    break;
    default:
        console.log(`Other months are interesting too!`);
}

