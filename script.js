// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var length = Number;
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
  var integers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[];?><,./-=";

  function generatePassword() {
    charLength = prompt("Length of Password?", "8-128 characters");
  }
  if (charLength < 8 || charLength > 128) {
    window.alert("Length of password must be 8 characters or higher");
    {
      return;
    }
  }

  var upperCase = confirm("Would you like uppercase characters?");
  /* if true , then string. to uppercase*/
  if ((upperCase = true)) {
    upperCase = string.toUpperCase;
  } else if ((upperCase = false)) {
    upperCase = string.toLowerCase;
  }
  var lowerCase = confirm("Would you like lowercase characters?");
  if ((lowerCase = true)) {
    lowerCase = string;
  } else if ((lowerCase = false)) {
    lowerCase = string.toUpperCase;
  }

  var numbers = confirm("Would you like numbers?");
  if ((numbers = true)) {
    numbers = integers;
  }
  var characters = confirm("Would you like special characters?");
  if ((characters = true)) {
    characters = specialCharacters;
  }

  var newPassword = "";


  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
