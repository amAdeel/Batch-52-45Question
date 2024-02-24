"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
•1 Store the locations in a array. Make sure the array is not in alphabetical order.

•2 Print your array in its original order.

•3 Print your array in alphabetical order without modifying the actual list.

•4 Show that your array is still in its original order by printing it.

•5 Print your array in reverse alphabetical order without changing the order of the original list.

•6 Show that your array is still in its original order by printing it again.

•7 Reverse the order of your list. Print the array to show that its order has changed.

•8 Reverse the order of your list again. Print the list to show it’s back to its original order.

•9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

•10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

 */
let favLocation = [
    "lahore",
    "islamabad",
    "karachi",
    "multan",
    "okara cantt"
];
// step1 original Array
console.log("original Array");
console.log(favLocation);
// step2 alpabatic order
console.log("\nPrint your array in alphabetical order without modifying the actual list.");
console.log([...favLocation].sort()); //[... ] YA ORIGINAL ARRAY ko change nahi karta
// step4 reverse to original
console.log("original Array");
console.log(favLocation);
// step5 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\narray in reverse alphabetical order without changing the order of the original list");
console.log([...favLocation].sort().reverse());
// step6 Show that your array is still in its original order by printing it again
console.log("\noriginal Array");
console.log(favLocation);
// step7  Reverse the order of your list. Print the array to show that its order has changed
console.log("\nReverse the order of your list");
console.log(favLocation.reverse());
// step8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nReverse again the order of your list into original ");
console.log(favLocation.reverse());
// step9  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\narray in  alphabetical order paramanent");
console.log(favLocation.sort());
// step10  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\narray in reverse alphabetical order parmantaly");
console.log(favLocation.sort().reverse());
