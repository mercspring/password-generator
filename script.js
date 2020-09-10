// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate password
// generate a random number between zero and specified max
function randomInt(max){

 return Math.floor(Math.random() * max)
}

function generateRandomLower(){
  var alphebet = 'abcdefghijklmnopqrstuvwxyz';
  return alphebet[randomInt(alphebet.length)]
}

function generateRandomUpper(){
  var alphebet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphebet[randomInt(alphebet.length)]
}

function generateRandomSpecial(){
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  return specialChars[randomInt(specialChars.length)]
}
function generateRandomNum() {
  return randomInt(10)
}



function getUserSpecs() {
  var passwordChars = 0;
  var characterTypes = [];
  while ((passwordChars < 8) || (passwordChars > 128) || isNaN(passwordChars)) {
   passwordChars = prompt("How many characters would you like your password to have? (must between 8 and 128)");
  }
  characterTypes[4] = passwordChars;
  console.log(characterTypes); 
  while (true) {
  characterTypes[0] = confirm("Would you like your password to contain numbers?");
console.log(characterTypes); 
  characterTypes[1] = confirm("Would you like your password to contain special characters? ($, %, ^, ect)");
console.log(characterTypes); 
  characterTypes[2] = confirm("Would you like your password to contain lowercase letter?");
console.log(characterTypes); 
  characterTypes[3] = confirm("Would you like your password to contain uppercase letter?");
  if (characterTypes.indexOf(true) > -1){
    break;
  }
  }
  return characterTypes 
}

function generatePassword(){
  var password = "";
  var userSpecs = getUserSpecs();

  for(i = 0; i < userSpecs[4]; i++){
    if(userSpecs[3] && (password.length < userSpecs[4])){
      password = password + generateRandomUpper();  
    }
    if(userSpecs[2] && (password.length < userSpecs[4])){
      password = password + generateRandomLower();  
    }
    if(userSpecs[1] && (password.length < userSpecs[4])){
      password = password + generateRandomSpecial();  
    }
    if(userSpecs[0] && (password.length < userSpecs[4])){
      password = password + generateRandomNum();  
    }

  } 
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

