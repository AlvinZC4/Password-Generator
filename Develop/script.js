var passwordLength = prompt("Enter how long you would like your password to be.  It must be between 8 and 128 characters")
  
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Invalid entry!  Password must be between 8 and 128 characters!")
  }

var lowerCase = confirm("Would you like to include lower case characters?")
var upperCase = confirm("Would you like to include upper case charactets?")
var numbers = confirm("Would you like to include numerical characters?")
var special = confirm("Would you like to include special characters?")

  while (lowerCase == false && upperCase == false && numbers == false && special == false) {
    alert("Your password must include at least one of the following: lower case, upper case, numerical, or special characters!")
    var lowerCase = confirm("Would you like to include lower case characters?")
    var upperCase = confirm("Would you like to include upper case charactets?")
    var numbers = confirm("Would you like to include numerical characters?")
    var special = confirm("Would you like to include special characters?")
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
