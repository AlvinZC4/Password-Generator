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

// Arrays That contain each type of character set
var lowerChars = "abcdefhhijklmnopqrstuvwxyz".split("");
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChars = "0123456789".split("");
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

function consoleArrCheck(arrCheck) {
  console.log(arrCheck),
  console.log(arrCheck.length)
}

consoleArrCheck(lowerChars);
consoleArrCheck(upperChars);
consoleArrCheck(numChars);
consoleArrCheck(specialChars);

console.log("Lowercase: " + lowerCase)
console.log("Uppercase: " + upperCase)
console.log("Numbers: " + numbers)
console.log("Special: " + special)

var randomArry = ""
var selectArry = ""
var ranIndex = -1
var genChar = ""
var createdPassword = ""

function randomIndex (theArry) {
  ranIndex = Math.floor(Math.random() * theArry.length);
}

function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    randomArry = ""
    ranIndex = -1

    randomArry = Math.floor(Math.random() * 4);
    // console.log("-----------")
    // console.log(randomArry)

    if (randomArry == 0) {
      if (lowerCase === true) {
        selectArry = lowerChars;
          randomIndex(selectArry);
        genChar = selectArry[ranIndex];
        // console.log(selectArry)
        // console.log(ranIndex)
        // console.log(genChar)
        createdPassword = createdPassword + genChar
      }
      else {
        i--
      }
    }
    else if (randomArry == 1) {
      if (upperCase === true) {
        selectArry = upperChars;
        randomIndex(selectArry);
        genChar = selectArry[ranIndex];
        // console.log(selectArry)
        // console.log(ranIndex)
        // console.log(genChar)
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
        // console.log(selectArry)
        // console.log(ranIndex)
        // console.log(genChar)
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
        // console.log(selectArry)
        // console.log(ranIndex)
        // console.log(genChar)
        createdPassword = createdPassword + genChar
      }
      else {
        i--
      }
    }
  }
  console.log(createdPassword)
  console.log(createdPassword.length)
  return createdPassword;
}

// generatePassword();
// console.log(createdPassword)
// console.log(createdPassword.length)
// console.log("Password Length: "+ passwordLength)


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


