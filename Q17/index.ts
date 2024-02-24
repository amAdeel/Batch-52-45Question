/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let invitation:Array<string>=["Adeel","Naveed","Ali","Dilawar"];
invitation[2]="Husnain";
invitation.unshift("Ali");
invitation.splice(3,0,"Adnan")
invitation.push("Salman");
console.log(invitation);
// // --------------------------------------------
// // solution Q16 is that
console.log("unfortuntly,The new dinner table won't arrive in time for the dinner,  So i can only invite two Guest for Dinner ");
// STEP2
console.log(invitation.length);
while (invitation.length>2){
    let removedGuest=invitation.pop();
    console.log(invitation);
    console.log(`${removedGuest}, i am sorry i can't invite you to dinner.`);
}
// Step3
for (let i = 0; i < invitation.length; i++) {
    console.log(`Dear ${invitation[i]} you are invited to Dinner`);
    };
// step4
for(let i=0;i<=invitation.length;i++){
    invitation.pop()
    console.log(invitation);//Here we get empty Array
    };


