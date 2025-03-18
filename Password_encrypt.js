// npm i bcryptjs

let bcrypt = require("bcryptjs");

let mypswd = "Raviha123";
let salt = 12;
let encrypted_pswd = bcrypt.hashSync(mypswd, salt);

// Login Logic
let check = bcrypt.compareSync(mypswd, encrypted_pswd);
if (check) {
    console.log("Password Has been matched");
} else {
    console.log("Password Has NOT been matched");
}

console.log(`Original Password ${mypswd}\nEncrypted Password ${encrypted_pswd}`);