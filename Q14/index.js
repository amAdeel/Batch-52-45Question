"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitation = void 0;
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let invitation = ["Adeel", "Naveed", "Ali", "Dilawar"];
exports.invitation = invitation;
for (let members of invitation) {
    console.log("Dear " + members + ", I invite you to dinner. It will be a pleasure to meet you. Please come.");
}
