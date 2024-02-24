"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians2 = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
// let new_magicians:string[]=[];
// function make_great1(magicians2:string[]){
//     for (let i = 0; i< magicians2.length; i++) {
//       new_magicians.push(magicians2[i])
//     }
//     magicians2.forEach(element => {
//         console.log();
//     });
// }
// make_great1(magicians2)
// console.log(new_magicians);
// Function to modify magician's names to add "the Great" and return a new array
function make_great(magicians) {
    let modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
// Function to show magicians
function show_magicians1(magicians) {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Original array of magician's names
let originalMagicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call make_great() with a copy of the original array and store the modified array in a separate array
let modifiedMagicians = make_great([...originalMagicians]);
// Show the original list of magicians
console.log("Original Magicians:");
show_magicians1(originalMagicians);
// Show the list of magicians with "the Great" added to each name
console.log("\nModified Magicians:");
show_magicians1(modifiedMagicians);
