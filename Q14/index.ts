// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let invitation:Array<string>=["Adeel","Naveed","Ali","Dilawar"];
for (let members of invitation) {
    console.log("Dear "+members+", I invite you to dinner. It will be a pleasure to meet you. Please come.");
    
}
export{invitation};