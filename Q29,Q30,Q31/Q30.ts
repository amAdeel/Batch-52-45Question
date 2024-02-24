export let userName=["Adeel(admin)","Naveed","Adnan","Dilawar","Ali"];
userName.forEach(element => {
    if (element==="Adeel(admin)") {
        console.log(`Hello ${element}, would you like to see a status report?`);
    }else{console.log(`Hello ${element}, thank you for logging in again.`);
}
});