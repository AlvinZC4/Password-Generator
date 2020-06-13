// User selects length of password.
var passwordLength = prompt("Enter how long you would like your password to be.  It must be between 8 and 128 characters")

// If password is less than 8 characters or more than 128 characters then user is prompted again
while (passwordLength < 8 || passwordLength > 128) {
  var passwordLength = prompt("Invalid entry!  Password must be between 8 and 128 characters!")
}

// User decides if password will include lower case, upper case, numerical, and/or special characters in their password
var lowerCase = confirm("Would you like to include lower case characters?")
var upperCase = confirm("Would you like to include upper case charactets?")

// User must have lower case and/or upper case characters in their password
while (lowerCase == false && upperCase == false) {
  alert("Your password must include either lower case or upper case characters!")
  var lowerCase = confirm("Would you like to include lower case characters?")
  var upperCase = confirm("Would you like to include upper case charactets?")
}
var numbers = confirm("Would you like to include numerical characters?")
var special = confirm("Would you like to include special characters?")


var passwordCriteria = {
    "favFoods": [
      "Steaks",
      "Hot Wings",
      "Steak & Eggs",
      "Pizzaira",
      "Hamburgers"
    ],
    "favShows": [
      "Breaking Bad",
      "Game of Thrones",
      "The Walking Dead",
      "Westworld 2",
      "Stranger Things"
    ],
    "favMovies": [
      "Pulp Fiction",
      "Terminator 2",
      "Inception",
      "Heat",
      "The Departed"
    ],
    "favSongs": [
      "Sea of Thieves",
      "Overwatch",
      "Call of Duty",
      "Diablo 3",
      "Boarderlands 3" 
    ],
    "roleModel": [
      "Tony Romo",
      "Drew Brees",
      "Ronald Regan",
      "George Bush",
      "Brad Pitt",
    ],
    "whereDid": [
      "Hopewell",
      "Prince George",
      "Bottoms Up",
      "Nannys",
      "Outer Banks"
    ]
  }

  var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // console.log(alphaChars)

// var minLength = "";
// var lengthEl = [];
//   function smallestInArry(objArry) {
//       lengthEl = [];
//       console.log(objArry);
//       for (var i = 0; i < 5; i++) {
//         lengthEl.push(objArry[i].length);
//       }
//       Array.min = function(lengthEl) {
//         return Math.min.apply( Math, lengthEl);
//       }
//       console.log(lengthEl);
//       minLength = Array.min(lengthEl);
//   }

//  smallestInArry(passwordCriteria.favFoods);
//  console.log("--------");
// var smallArry1 = minLength;
// console.log(smallArry1);

// smallestInArry(passwordCriteria.favShows);
// console.log("--------");
// var smallArry2 = minLength;
// console.log(smallArry2);

// smallestInArry(passwordCriteria.favMovies);
// console.log("--------");
// var smallArry3 = minLength;
// console.log(smallArry3);

// smallestInArry(passwordCriteria.favSongs);
// console.log("--------");
// var smallArry4 = minLength;
// console.log(smallArry4);

// smallestInArry(passwordCriteria.roleModel);
// console.log("--------");
// var smallArry5 = minLength;
// console.log(smallArry5);

// smallestInArry(passwordCriteria.whereDid);
// console.log("--------");
// var smallArry6 = minLength;
// console.log(smallArry6);

// var allArraySmall = [smallArry1, smallArry2, smallArry3, smallArry4, smallArry5, smallArry6];
// console.log("-------------------")
// console.log(allArraySmall);

// var maxofMin = ""
// Array.max = function(allArraySmall) {
//   return Math.max.apply( Math, allArraySmall);
// }
// maxofMin = Array.max(allArraySmall);
// console.log(maxofMin);

// randomArry = Math.floor(Math.random() * 6);
// console.log(randomArry)

// !!!!Below is all code from main .js file!!!!

// A function is used to console log the the indices stored in each array of the object
function consoleArrCheck(arrCheck) {
  console.log(arrCheck[0]),
    console.log(arrCheck[1]),
    console.log(arrCheck[2]),
    console.log(arrCheck[3]),
    console.log(arrCheck[4])
}

// This function checks the character length of each element in an array and returns the smallest character length into "minLength"
var minLength = "";
var lengthEl = [];
function smallestInArry(objArry) {
  lengthEl = [];
  console.log(objArry);
  for (var i = 0; i < 5; i++) {
    lengthEl.push(objArry[i].length);
  }
  Array.min = function (lengthEl) {
    return Math.min.apply(Math, lengthEl);
  }
  minLength = Array.min(lengthEl);
}
// Store the character length of the element with the shortest string for each array into a new array named "allSmallArray"
smallestInArry(passwordCriteria.favFoods);
var smallArryFood = minLength;

smallestInArry(passwordCriteria.favShows);
var smallArryShows = minLength;

smallestInArry(passwordCriteria.favMovies);
var smallArryMovies = minLength;

smallestInArry(passwordCriteria.favSongs);
var smallArrySongs = minLength;

smallestInArry(passwordCriteria.roleModel);
var smallArryModel = minLength;

smallestInArry(passwordCriteria.whereDid);
var smallArryWhere = minLength;

var allSmallArray = [smallArryFood, smallArryShows, smallArryMovies, smallArrySongs, smallArryModel, smallArryWhere];

// Take the largest value stored in "allSmallArray" and store in new variable "maxOfMin"
var maxOfMin = ""
Array.max = function () {
  return Math.max.apply(Math, allSmallArray);
}
maxOfMin = Array.max(allSmallArray);

// Console log all user input
console.log(passwordLength)
console.log(lowerCase)
console.log(upperCase)
console.log(numbers)
console.log(special)

console.log("---------------")

consoleArrCheck(passwordCriteria.favFoods)
consoleArrCheck(passwordCriteria.favShows)
consoleArrCheck(passwordCriteria.favMovies)
consoleArrCheck(passwordCriteria.favSongs)
consoleArrCheck(passwordCriteria.roleModel)
consoleArrCheck(passwordCriteria.whereDid)

console.log("---------------")

console.log(allSmallArray)
console.log(maxOfMin)

// Create global variables that will be used to generate random password
var randomArry = 0
var selectArry = ""
var ranIndex = -1
var passwordBlock = ""
var passwordBuild = "A"
var buildLength = passwordBuild.length
var ranNum1 = 0
var ranNum2 = 0
var charLeft = ""
var addChar = ""

// This function removes numerical values if user selected not to have numbers in password. Adds two random numerical characters to end of string if user choose to have numbers in password
function numbersCheck() {
  if (numbers === false) {
    var numbersFalse = passwordBlock.replace(/\d+/g, "n");
    passwordBlock = numbersFalse
  }
  else {
    ranNum1 = Math.floor(Math.random() * 10);
    ranNum2 = Math.floor(Math.random() * 10);
    passwordBlock = passwordBlock + ranNum1 + ranNum2;
  }
}
// This function removes special characters from string if user selected not to have specical characters in password, otherwise it replaces some characters in string with special characters
function specialCheck() {
  if (special === false) {
    var specialFalse = passwordBlock.replace(/[^a-zA-Z0-9]/g, "s");
    passwordBlock = specialFalse;
  }
  else {
    var specialTrue = passwordBlock.replace(/s/gi, "$");
    passwordBlock = specialTrue
    specialTrue = passwordBlock.replace(/l/gi, "!");
    passwordBlock = specialTrue
    specialTrue = passwordBlock.replace(/a/gi, "@");
    passwordBlock = specialTrue

  }
}
// This function will randomly select an array, and then randomly select an element within that array.
function passBlock() {
  while (passwordBlock + buildLength > passwordLength) {
    passwordBlock = ""
    
    // A random number between 0 and 5 is generated; one for each array in the passwordCriteria object
    randomArry = Math.floor(Math.random() * 6);

    // The randomly generated number is used to select an array
    if (randomArry == 0) {
      selectArry = passwordCriteria.favFoods;
    }
    else if (randomArry == 1) {
      selectArry = passwordCriteria.favShows;
    }
    else if (randomArry == 2) {
      selectArry = passwordCriteria.favMovies;
    }
    else if (randomArry == 3) {
      selectArry = passwordCriteria.favSongs;
    }
    else if (randomArry == 4) {
      selectArry = passwordCriteria.roleModel;
    }
    else {
      selectArry = passwordCriteria.whereDid;
    }
    // A random number between 0 and 4 is generated; one for each element in the selected array.
    ranIndex = Math.floor(Math.random() * 5);

    // The string of the randomly selected element is stored in the variable "passwordBlock"
    passwordBlock = selectArry[ranIndex];

    // Functions to add or remove numerical and special characters from the passwordBlock variable based on user input
    numbersCheck();
    specialCheck();

    // Makes all alphabetical characters all uppercase or all lowercase if only one was selected
    if (upperCase == true && lowerCase == false) {
      var upperOnly = passwordBlock.toUpperCase();
      passwordBlock = upperOnly;
    }
    if (lowerCase == true && upperCase == false) {
      var lowerOnly = passwordBlock.toLowerCase();
      passwordBlock = lowerOnly;
    }
    // Removes any spaces from the passwordBlock variable
    var noSpace = passwordBlock.replace(/\s+/g, '');
    passwordBlock = noSpace;
  }
}

// console.log(passwordBlock);

// The following loop was used to repeat the passBlock function 50 times to ensure it was working as intended, its now commented out

// for (var i = 0; i < 50; i++) {
//   passBlock();
//   console.log("-----------");
//   console.log(randomArry);
//   console.log(selectArry);
//   console.log(ranIndex);
//   console.log(passwordBlock);
// }


function addRanChar () {
  addChar = Math.floor(Math.random() * 52);
}

// Function to generate the password
function generatePassword() {
  while (passwordLength > buildLength) {
    passBlock();
    // if (passwordLength - buildLength < maxOfMin) {
    //   charLeft = passwordLength - buildLength;

    //   for (var j = 0; j <= charLeft; j++) {
    //     addRanChar;
    //   }
    //   passwordBuild = passwordBuild + addChar;
    // }
    // else {
    //   passwordBuild = passwordBuild + passwordBlock;
    // }
    passwordBuild = passwordBuild + passwordBlock;
  }
}
generatePassword();

 console.log("-----THE GENERATED PASSWORD-----")
 console.log(passwordBuild)
 console.log(passwordLength)
 console.log(passwordBuild.length)

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
