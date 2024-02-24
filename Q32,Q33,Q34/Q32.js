"use strict";
// Make a list of current users
let current_users = ["Adeel", "Pasha", "Naveed", "zia", "Asif"];
// Make a list of new users
let new_users = ["Adeel", "sarah", "Naveed", "Ali", "Adnan"];
// Convert all usernames to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(username => username.toLowerCase());
// Loop through each new user to check for uniqueness
for (let i = 0; i < new_users.length; i++) {
    // Convert current new user to lowercase for case-insensitive comparison
    let new_user_lower = new_users[i].toLowerCase();
    // Check if the new username exists in the list of current users
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_users[i]}' is available.`);
    }
}
