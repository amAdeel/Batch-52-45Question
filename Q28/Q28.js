import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "number",
        name: "Age",
        message: "what your age?"
    }]);
if (answer.Age < 2) {
    console.log("The person is Baby");
}
else if (answer.Age < 4 || answer.Age === 2) {
    console.log("the person is a toddler.");
}
else if (answer.Age < 13 || answer.Age === 4) {
    console.log("the person is a kid.");
}
else if (answer.Age < 20 || answer.Age === 13) {
    console.log("the person is a teenager.");
}
else if (answer.Age < 65 || answer.Age === 20) {
    console.log(" that the person is an adult.");
}
else if (answer.Age >= 65) {
    console.log("the person is an elder.");
}
else {
    console.log("something went wrong(^_^)");
}
