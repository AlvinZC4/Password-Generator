var passwordLength = prompt("Enter how long you would like your password to be.  It must be between 8 and 128 characters")
  
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Invalid entry!  Password must be between 8 and 128 characters!")
  }

var lowerCase = confirm("Would you like to include lower case characters?")
var upperCase = confirm("Would you like to include upper case charactets?")
var numbers = confirm("Would you like to include numerical characters?")
var special = confirm("Would you like to include special characters?")

  while (lowerCase == false && upperCase == false) {
    alert("Your password must include either lower case or upper case characters!")
    var lowerCase = confirm("Would you like to include lower case characters?")
    var upperCase = confirm("Would you like to include upper case charactets?")
    var numbers = confirm("Would you like to include numerical characters?")
    var special = confirm("Would you like to include special characters?")
  }

  var passwordCriteria = {
    "favFoods": [
      prompt("What is one of your favorite foods (1 of 5)"),
      prompt("What is another one of your favorite foods (2 of 5)"),
      prompt("What is another one of your favorite foods (3 of 5)"),
      prompt("What is another one of your favorite foods (4 of 5)"),
      prompt("What is another one of your favorite foods (5 of 5)")
    ],
    "favShows": [
      prompt("What is one of your favorite shows (1 of 5)"),
      prompt("What is another one of your favorite shows (2 of 5)"),
      prompt("What is another one of your favorite shows (3 of 5)"),
      prompt("What is another one of your favorite shows (4 of 5)"),
      prompt("What is another one of your favorite shows (5 of 5)")
    ],
    "favMovies": [
      prompt("What is one of your favorite movies (1 of 5)"),
      prompt("What is another one of your favorite movies (2 of 5)"),
      prompt("What is another one of your favorite movies (3 of 5)"),
      prompt("What is another one of your favorite movies (4 of 5)"),
      prompt("What is another one of your favorite movies (5 of 5)")
    ],
    "favSongs": [
      prompt("What is one of your favorite songs (1 of 5)"),
      prompt("What is another one of your favorite songs (2 of 5)"),
      prompt("What is another one of your favorite songs (3 of 5)"),
      prompt("What is another one of your favorite songs (4 of 5)"),
      prompt("What is another one of your favorite songs (5 of 5)") 
    ],
    "roleModel": [
      prompt("Name a favorite role model, athlete, or actor/actress of yours (1 of 5)"),
      prompt("Name another favorite role model, athlete, or actor/actress of yours (2 of 5)"),
      prompt("Name another favorite role model, athlete, or actor/actress of yours (3 of 5)"),
      prompt("Name another favorite role model, athlete, or actor/actress of yours (4 of 5)"),
      prompt("Name another favorite role model, athlete, or actor/actress of yours (5 of 5)"),
    ],
    "WhereDid": [
      prompt("Where were you born?"),
      prompt("Where did you graduate high school?"),
      prompt("Where did you go on your first date?"),
      prompt("Where was your first job?"),
      prompt("Where is your favorite place to vacation?")
    ]
  }


function consoleArrCheck (arrCheck) {
  console.log(arrCheck[0]),
  console.log(arrCheck[1]),
  console.log(arrCheck[2]),
  console.log(arrCheck[3]),
  console.log(arrCheck[4])
}

console.log(passwordLength)
console.log(lowerCase)
console.log(upperCase)
console.log(numbers)
console.log(special)
console.log("---------------")

consoleArrCheck (passwordCriteria.favFoods)
consoleArrCheck (passwordCriteria.favShows)
consoleArrCheck (passwordCriteria.favMovies)
consoleArrCheck (passwordCriteria.favSongs)
consoleArrCheck (passwordCriteria.roleModel)
consoleArrCheck (passwordCriteria.WhereDid)

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
