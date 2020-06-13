// User selects length of password.
var passwordLength = prompt("Enter how long you would like your password to be.  It must be between 8 and 128 characters")

// If password is less than 8 characters or more than 128 characters then user is prompted again
while (passwordLength < 8 || passwordLength > 128) {
  var passwordLength = prompt("Invalid entry!  Password must be between 8 and 128 characters!")
}

// User decides if password will include lower case, upper case, numerical, and/or special characters in their password
var lowerCase = confirm("Would you like to include lower case characters?")
var upperCase = confirm("Would you like to include upper case charactets?")
var numbers = confirm("Would you like to include numerical characters?")
var special = confirm("Would you like to include special characters?")

// User must have lower case and/or upper case characters in their password
while (lowerCase == false && upperCase == false && numbers == false && special == false) {
  alert("Your password must include either lower case or upper case characters!")
  var lowerCase = confirm("Would you like to include lower case characters?")
  var upperCase = confirm("Would you like to include upper case charactets?")
  var numbers = confirm("Would you like to include numerical characters?")
  var special = confirm("Would you like to include special characters?")
}

// Arrays That contain each type of character set: lowercase, uppercase, numerical, and special characters
var lowerChars = "abcdefhhijklmnopqrstuvwxyz".split("");
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChars = "0123456789".split("");
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Create global for use in generating random password
var randomArry = ""
var selectArry = ""
var ranIndex = -1
var genChar = ""
var createdPassword = ""

// This is a function that randomly selects an index within an array
function randomIndex (theArry) {
  ranIndex = Math.floor(Math.random() * theArry.length);
}

// This is the function that randomly generates the password
function generatePassword() {

  // The number of times this loop will run is equal the password length the user selected
  for (var i = 0; i < passwordLength; i++) {
    // The "randomArry" and "ranIndex" global variables are cleared at the start of each cycle of the loop
    randomArry = ""
    ranIndex = -1

    // Randomly generate a number between 0 and 3, one value for each array
    randomArry = Math.floor(Math.random() * 4);

    // The randomly selected number is used to select a character array
    if (randomArry == 0) {
        // If the user selected to use lower case characters then a random lower case character from the array is assigned to the "genChar" variable...
      if (lowerCase === true) {
        selectArry = lowerChars;
          randomIndex(selectArry);
        genChar = selectArry[ranIndex];
        createdPassword = createdPassword + genChar
      }
      // if the user choose not to include lower case characters then no character is generated and the loop is made to run one additional cycle
      else {
        i--
      }
    }
    // The following three blocks of code function the same as the one above, but for the uppercase, numerical, and special character arrays respectively
    else if (randomArry == 1) {
      if (upperCase === true) {
        selectArry = upperChars;
        randomIndex(selectArry);
        genChar = selectArry[ranIndex];
        createdPassword = createdPassword + genChar
      }
      else {
        i--
      }
    }
    else if (randomArry == 2) {
      if (numbers === true) {
        selectArry = numChars;
        randomIndex(selectArry);
        genChar = selectArry[ranIndex];
        createdPassword = createdPassword + genChar
      }
      else {
        i--
      }
    }
    else {
      if (special === true) {
        selectArry = specialChars;
        randomIndex(selectArry);
        genChar = selectArry[ranIndex];
        createdPassword = createdPassword + genChar
      }
      else {
        i--
      }
    }
  }
  // The function is returned
  return createdPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


