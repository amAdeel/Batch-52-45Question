/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

let invitation:Array<string>=["Adeel","Naveed","Ali","Dilawar"];
// Guest name who can't be able to join us
console.log(`\n unfortunately ${invitation[2]} can't be able to join us!`);
// modify the list ,new guest to come "Husnain"
invitation[2]="Husnain";
for (let members of invitation) {
    console.log("Dear "+members+", I invite you to dinner. It will be a pleasure to meet you. Please come.");
}
