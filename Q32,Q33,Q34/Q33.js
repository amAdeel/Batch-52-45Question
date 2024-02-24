"use strict";
// Store the numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    // Get the current number
    let num = numbers[i];
    // Determine the ordinal ending based on the current number
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the number with its proper ordinal ending
    console.log(`${num}${ordinalEnding}`);
}
