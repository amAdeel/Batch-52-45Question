// Tests for equality and inequality with strings
let str1: string = 'hello';
let str2: string = 'world';

console.log("Equality test with strings:");
console.log(str1 == str2); // False
console.log("Inequality test with strings:");
console.log(str1 != str2); // True

// Tests using the lower case function
let mixedCase: string = 'HelloWorld';
console.log("Lowercase test:");
console.log(`mixedCase=${mixedCase}`);
//Here we check mixedCase.tolowerCase()=="HelloWorld"
console.log(`is mixedCase.toLowerCase() == "HelloWorld"`,mixedCase.toLowerCase() == "HelloWorld"); // false
console.log("is mixedCase.toLowerCase()=='helloworld'",mixedCase.toLowerCase()=="helloworld");//true


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log(`Numerical tests:\b num1: ${num1} , num2: ${num2}`);
console.log(num1 == num2); // False
console.log(num1 != num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// // Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
let z: number = 15;

console.log("Logical AND test:");
console.log(x < y && y < z); // True
console.log("Logical OR test:");
console.log(x > y || y > z); // False

// // Test whether an item is in an array
let numbers: number[] = [1, 2, 3, 4, 5];

console.log("Array inclusion test:");
console.log("our Array :",numbers);
console.log("whether 3 is in Array",numbers.includes(3)); // True
console.log("whether 6 is in Array",numbers.includes(6));//false
console.log("Here we use !number.includes(10) , which mean 10 is not in Array , which return true,",!numbers.includes(10)); // True
