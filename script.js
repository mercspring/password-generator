// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy-to-clip");

//
function copyPassword(){
  
 var passwordText = document.querySelector("#password");
 passwordText.select();
 passwordText.setSelectionRange(0,99999); 

 document.execCommand("copy");
}

//Generate password
// generate a random number between zero and specified max
function randomInt(max) {

  return Math.floor(Math.random() * max)
}
//Function to returns a random lowercase number
function generateRandomLower() {
  var alphebet = 'abcdefghijklmnopqrstuvwxyz';
  return alphebet[randomInt(alphebet.length)]
}
//Function that returns a random uppercase number
function generateRandomUpper() {
  var alphebet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphebet[randomInt(alphebet.length)]
}

//Function that returns a random special character
function generateRandomSpecial() {
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  return specialChars[randomInt(specialChars.length)]
}

//Function that returns a random number
function generateRandomNum() {
  return randomInt(10)
}


// Function to get the specs from the user. Returns the user input as an array. The first 4 elements of the array are booleans coresponding to the char types to include and the last element is the number of chars to inculde
function getUserSpecs() {
  var characterTypes = [];
  characterTypes[4] = "0";
  while ((characterTypes[4]  < 8) || (characterTypes[4]  > 128) || isNaN(characterTypes[4])) {
    characterTypes[4]  = prompt("How many characters would you like your password to have? (must between 8 and 128)");
    console.log(characterTypes[4]);
  }

  while (true) {
    characterTypes[0] = confirm("Would you like your password to contain numbers?");
    characterTypes[1] = confirm("Would you like your password to contain special characters? ($, %, ^, ect)");
    characterTypes[2] = confirm("Would you like your password to contain lowercase letters?");
    characterTypes[3] = confirm("Would you like your password to contain uppercase letters?");
    if (characterTypes.indexOf(true) > -1) {
      break;
    }
  }
  return characterTypes
}
//Function that generates the actual password using a for loop and the random character generating functions based on the user input. Returns the password
function generatePassword() {
  var password = "";
  var userSpecs = getUserSpecs();

  for (i = 0; i < userSpecs[4]; i++) {
    if (userSpecs[3] && (password.length < userSpecs[4])) {
      password = password + generateRandomUpper();
    }
    if (userSpecs[2] && (password.length < userSpecs[4])) {
      password = password + generateRandomLower();
    }
    if (userSpecs[1] && (password.length < userSpecs[4])) {
      password = password + generateRandomSpecial();
    }
    if (userSpecs[0] && (password.length < userSpecs[4])) {
      password = password + generateRandomNum();
    }

  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  document.querySelector("#password").classList.add("blurred-text");

  passwordText.value = password;

  document.querySelector("#copy-to-clip").disabled = false;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

