// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var specialCharacters = ["!", "@", "$", "%"];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//created functions for each prompt (length, upper, lowercase, numbers and special characters)
function password() {
  var criteria = prompt("Choose length of password from 8-128 characters");
}

password()

function password2() {
  var criteria = prompt("Use uppercase letters?");
}

password2()

function password3() {
  var criteria = prompt("Use lowercase letters?");
}

password3()

function password4() {
  var criteria = prompt("Use numbers?");
}

password4()

function password5() {
  var criteria = prompt("Use special characters?");
}

password5()

