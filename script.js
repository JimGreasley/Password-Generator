// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables used to generate password
var lowercase  = "abcdefghijklmnopqrstuvwxyz";
var uppercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special    = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numeric    = "1234567890";



// function to create password based on user input
function generatePassword() {

  // -------------------------------------------------------------------------------------
  // get desired length of password from user - must be greater than 7 and less than 129
  // -------------------------------------------------------------------------------------
  do {
    var  pwd_length = prompt("Please enter length (between 8 and 128) of password to be created."); 

    if (pwd_length < 8 || pwd_length > 128) {
       alert("Invalid password length, must be greater than 7 and less than 129 characters, please re-enter");
       keep_looping = true;
    } 
    else {
      keep_looping = false;
    }
  }
  while (keep_looping);

  console.log("Password length: ", pwd_length);

  // ----------------------------------------------------------------------------------------------------------
  // get password format criteria from user - include lowercase, uppercase, numeric and/or special caracters?
  // ----------------------------------------------------------------------------------------------------------

  do {
    var use_lowercase = confirm("Include lowercase characters in password?");
    var use_uppercase = confirm("Include uppercase characters in password?");
    var use_numeric   = confirm("Include numeric characters in password?");
    var use_special   = confirm("Include special characters in password?");
/*
    use_lowercase = use_lowercase.toLowerCase;
    use_uppercase = use_uppercase.toLowerCase;
    use_numeric   = use_numeric.toLowerCase;
    use_special   = use_special.toLowerCase;

    if (use_lowercase === 'y' || use_uppercase === 'y' || use_numeric === 'y' || use_special === 'y') {
*/
    if (use_lowercase || use_uppercase || use_numeric || use_special ) {
      keep_looping = false;
    }
    else {
      alert("At least one option must be selected, please re-enter");
      keep_looping = true;
    }
  
  } while (keep_looping);

  console.log(use_lowercase, use_uppercase, use_numeric, use_special);


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
