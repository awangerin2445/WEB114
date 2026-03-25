"use strict";

let hourlyWage = window.prompt("What is your hourly wage?");

window.confirm(`You entered $${hourlyWage} per hour. Is that correct?
Click OK for yes
Click Cancel for no`);

let hoursWorked = window.prompt("How many hours did you work this week?");

window.confirm(`You entered ${hoursWorked} hours. Is that correct?
Click OK for yes
Click Cancel for no`);

hourlyWage = Number(hourlyWage);
hoursWorked = Number(hoursWorked);


let grossPay = hoursWorked * hourlyWage;

let taxes = grossPay * .10;

let netPay = grossPay - taxes;

console.log(`You earned $${netPay.toFixed(2)} this week.`);

if (hoursWorked > 40) {
    console.log (`You worked overtime this week!`)
}
else if (hoursWorked === 40) {
    console.log (`You worked exactly 40 hours.`)
}
else {
    console.log (`No overtime this week`)
};

if (netPay > 800) {
    console.log(`Great paycheck this week!`)
} 
else {
    console.log(`Keep working toward a bigger paycheck!`);
}

