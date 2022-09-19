var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
var integers = "0123456789";
var specialCharacters = "!@#$%^&*";
var choices = "";
function generatePassword() {
  length = prompt("Length of Password?", "8-128 characters");

  if (length < 8 || length > 128) {
    window.alert("Length of password must be 8 characters or higher");

    return "";
  }

  var upperCase = confirm("Would you like uppercase characters?");
  /* if true , then string. to uppercase*/
  if (upperCase === true) {
    choices = choices + string.toUpperCase;
  }
  var lowerCase = confirm("Would you like lowercase characters?");
  if (lowerCase === true) {
    choices = choices + string;
  }
  var numbers = confirm("Would you like numbers?");
  if (numbers === true) {
    choices = choices + integers;
  }
  var characters = confirm("Would you like special characters?");
  if (characters === true) {
    choices = choices + specialCharacters;
  }
  console.log(upperCase, lowerCase, numbers, characters);

  if (!upperCase && !lowerCase && !numbers && !characters) {
    window.alert("You must choose at least one option");
    return "";
  }
  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    var randomCharacter = choices[randomIndex];
    password = password + randomCharacter;
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  if (password !== "") {
    window.alert("Your new passord is " + password);
  }
}

generateBtn.addEventListener("click", writePassword);
