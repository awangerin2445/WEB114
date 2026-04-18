//WEB 114 gas Adrian Wangerin 1/14/2026 

"use strict"; 
//GLOBAL VARIABLES
let entryCount = 0;
let totalGas = 0;

//MAIN PROGRAM
//step 3: Ask the user for their name
let userName = prompt("Enter your name:");  //note: promt always returns string or null
//Step 4: What happens when the user clicks cancel?
if (userName === null) {
        alert("You canceled the name prompt."); //js stopps here, return only works within a fucntion
}
//step 5: What happens if a user doesn't type a name?
else if (userName.trim() === ""){
        alert("You must type a name."); //trim() removes spaces from the start & end of the input
}
//Step 6: call the function only when the user does not enter their username or leave the prompt blank
else {
    let average = calcGasAvg();  //This will return the average or null if canceled. This causes the function to run before it continues with the main program. This threw me off & I thought my function never ran when debugging.
    
    //Step 7: What happens if the user cancels the functions prompts?
    if (average === null) {
        alert("You canceled entering gas totals.");
    }

    //Step 8a: What happens if the entryCount is 0?
    else if (entryCount === 0) {
        alert("No gas totals were entered.");
    }

    //Step 8b: What happens if only one entry is entered?
    else if (entryCount === 1) {
        let message = userName + ", your gas total was $" + average.toFixed(2); //This equation only shows the tota because you cannot take the average of one entry
        alert(message); 
    }

    //What happens if there is more than one entry?
    else {
        let message = userName + ", your average weekly gas bill was $" + average.toFixed(2);
        alert(message);
    }

    //Step 8c: 
    /*This was super confusing, but now that I understand, 
    this loop may seem like a repeat of the last one because of "No gas totals were entered" but the code will show:
    No gas totals were entered
    No gas totals were entered
    This is because the "if (entryCount === 0) {alert("No gas totals were entered.");" 
    code is being used to create a new loop. Its not structured to make sense but to reinforce our understanding of loops.
    */
    if  (entryCount === 0) {
        alert("No gas totals were entered.");
    }
    else if (entryCount == 1) {
        alert("1 entry was entered.");
    }
    else {
        alert(entryCount + " entries were entered.");
    }
}

//FUNCTION: calcGasAvg()  this part was confusing for me too but like part 8 I eventually found out it was completely separate from the main program when i thought everything was one big code.
function calcGasAvg() {
    entryCount = 0;  //resets the variables inside the function so it is not carried over from the main program
    totalGas = 0;
    //step 9:
    let input = window.prompt("Enter your first week's gas total. Enter -1 when done.");
    //Step 10: 
    if (input === null) {
        return null;
    }
    //Step 11: How do you convert the string to a number?
    let weeklyGas = parseFloat(input);
    
    //step 12: WHILE
    while (weeklyGas !== -1) {  //This part was also confusing. != means not eaqual to. So, while the weekly gas is not -1 it indefinitely runs the loop unless it is broken with -1. Then it will return the average.
        
        //Step 12a:
        if (weeklyGas != weeklyGas) {
            alert("Please enter a valid number.");

            //ask user for the same entry
            input = window.prompt("Enter your first week's has total. Enter -1 when done.");
            if (input === null) {
            return null;
            }

            weeklyGas = parseFloat(input);
        }
        
        //Step 12b:
        else {
        totalGas = weeklyGas + totalGas;
        entryCount++;
        }
        //ask for the next weeks gas total
        input = window.prompt("Enter your next week's gas total. Enter -1 when done.");
        if (input === null) {
            return null;
        }
        
        weeklyGas = parseFloat(input);
    } 
    
    //Step 13 after the loop:
    let average = 0;
    if (entryCount > 0) {
        average = totalGas / entryCount;
    }

    else {
        average = 0;
    }
    
    return average;

}


