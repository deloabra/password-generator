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


function generatePassword(){
  
  //password string that will be returned
  var password = "";

  //Variables that contain all the possible characters in different catagories
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //  " and \ have to be considered separately

  //criteria id's
  var lowerID = 0;
  var upperID = 0;
  var numberID = 0;
  var specialID = 0;
  var idlength = 0;

  //password criteria
  var passwordLength = 0;
  var includeLower = false;
  var includeUpper = false;
  var includeSpecial = false;
  var includeNumeric = false;

  //prompt for password length until answer is in bounds
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt("How long should the password be?(enter a number between 8 and 128)"));
    if(passwordLength < 8 || passwordLength > 128){
      alert("Password length must be between 8 and 128");
    }
  }

  //Use confirms to get other criteria
  includeLower = confirm("Should there be lowercase letters in the password?");
  includeUpper = confirm("Should there be capital letters in the password?");
  includeNumeric = confirm("Should there be numbers in the password?");
  includeSpecial = confirm("Should there be special characters in the password?");

  //make sure some characters are allowed
  if(!includeLower && !includeUpper && !includeSpecial && !includeNumeric){
    includeLower = true;
    alert("You gave impossible criteria for the password. The password will have only lowercase letters.");
  }

  //set id's to be used in random
  if(includeLower){
    idlength++;
    lowerID = idlength;
  }
  if(includeUpper){
    idlength++;
    upperID = idlength;
  }
  if(includeNumeric){
    idlength++;
    numberID = idlength;
  }
  if(includeSpecial){
    idlength++;
    specialID = idlength;
  }

  //main loop
  for(var i = 0; i < passwordLength; i++){
      var randomID = randomNum(1, idlength+1);
      
      if(randomID === lowerID){
        password += lowercaseLetters[randomNum(0, lowercaseLetters.length)];
      }
      else if(randomID === upperID){
        password += uppercaseLetters[randomNum(0, uppercaseLetters.length)];
      }
      else if(randomID === numberID){
        password += numbers[randomNum(0, numbers.length)];
      }
      else if(randomID === specialID){
        password += specialCharacters[randomNum(0, specialCharacters.length)];
      }
  }

  return password;

}

//returns a random number from min to max(includes min but not max)
function randomNum(min, max) {
  if(min > max - 2){
    return min;
  }
  return Math.floor(Math.random() * (max - min)) + min;
}