"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userName = void 0;
exports.userName = ["Adeel(admin)", "Naveed", "Adnan", "Dilawar", "Ali"];
exports.userName.forEach(element => {
    if (element === "Adeel(admin)") {
        console.log(`Hello ${element}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again.`);
    }
});
