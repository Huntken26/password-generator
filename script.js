// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var length = Number;
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[];?><,./-=";

  function generatePassword() {
    length = prompt("Length of Password?", "8-128 characters");
  }
  if (length < 8 || length > 128) {
    window.alert("Length of password must be 8 characters or higher");
    {return};
  }

 var upperCase = confirm ("Would you like uppercase characters?");
/* if true , then string. to uppercase*/ 
if (upperCase = true) {
    upperCase = string;
} 
  confirm ("Would you like lowercase characters?");
// if false, 
  confirm ("Would you like special characters?");

  confirm ("Would you like numbers?");

  /* 
  TWO EXAMPLES OF JS CODE
  
  function generatePass(pLength){

    var keyListAlpha="abcdefghijklmnopqrstuvwxyz",
        keyListInt="123456789",
        keyListSpec="!@#_",
        password='';
    var len = Math.ceil(pLength/2);
    len = len - 1;
    var lenSpec = pLength-2*len;

    for (i=0;i<len;i++) {
        password+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
        password+=keyListInt.charAt(Math.floor(Math.random()*keyListInt.length));
    }

    for (i=0;i<lenSpec;i++)
        password+=keyListSpec.charAt(Math.floor(Math.random()*keyListSpec.length));

    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');

    return password;
}

const Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*"
}

const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))
const generatePassword = (length = 8) => { // password will be @Param-length, default to 8, and have at least one upper, one lower, one number and one symbol
    let pwd = "";
    pwd += getRandomCharFromString(Allowed.Uppers); //pwd will have at least one upper
    pwd += getRandomCharFromString(Allowed.Lowers); //pwd will have at least one lower
    pwd += getRandomCharFromString(Allowed.Numbers); //pwd will have at least one number
    pwd += getRandomCharFromString(Allowed.Symbols);//pwd will have at least one symbolo
    for (let i = pwd.length; i < length; i++)
        pwd += getRandomCharFromString(Object.values(Allowed).join('')); //fill the rest of the pwd with random characters
    return pwd
}
*/

  /* var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index]; */
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
