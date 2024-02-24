// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// step1
let invitation:Array<string>=["Adeel","Naveed","Ali","Dilawar"];
invitation[2]="Husnain";
for (let members of invitation) {
    console.log("Dear "+members+", I invite some more friends to dinner. I inform to you that i found a bigger dinner table at a new place");
}
// step2
invitation.unshift("Ali");
// step3
invitation.splice(3,0,"Adnan")
// step 4
invitation.push("Salman");
console.log(invitation);
// step5 invite all sapratly
for(let members of invitation)
console.log("My Dear "+members +",How are you , I hope you  are well, i invite you to a  dinner ,it will be a pleasure to meet you .please come  ");





