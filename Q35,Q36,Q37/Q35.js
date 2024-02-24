"use strict";
let animals = ["Dog", "Cat", "Horse"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "Dog") {
        console.log("Dog is great pet");
    }
    else if (animals[i] === "Cat") {
        console.log("Cat is beautiful pet");
    }
    else if (animals[i] === "Horse") {
        console.log("such a fast and lovely animal");
    }
}
console.log("\nCommon characteristic:");
console.log("Any of these animals would make a great pet!");
