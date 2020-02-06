// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables used to generate password
var lowercase_char  = "abcdefghijklmnopqrstuvwxyz";
var uppercase_char  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric_char    = "1234567890";

// Removed " \ _ and space(' ') from string of special characters
var special_char    = "!#$%&'()*+,-./:;<=>?@[]^`{|}~";



// ------------------------------------------------
// function to create password based on user input
// ------------------------------------------------

function generatePassword() {

  // -----------------------------------------------------
  // clear previous password; code below doesn't work
  // -----------------------------------------------------

  // document.getElementById('passwrod').innerHTML = " ";


  // -------------------------------------------------------------------------------------
  // get desired length of password from user - must be greater than 7 and less than 129
  // -------------------------------------------------------------------------------------
  do {
    var  pswd_length = prompt("Please enter length (between 8 and 128) of password to be created."); 

    if (pswd_length < 8 || pswd_length > 128) {
       alert("Invalid password length, must be greater than 7 and less than 129 characters, please re-enter");
       keep_looping = true;
    } 
    else {
      keep_looping = false;
    }
  }
  while (keep_looping);

  console.log("Password length: ", pswd_length);

  // ------------------------------------------------------------------------------------------------------
  // get password format criteria from user - include lowercase, uppercase, numeric or special caracters
  // ------------------------------------------------------------------------------------------------------

  do {
    var use_lowercase = confirm("Include lowercase characters in password?");
    var use_uppercase = confirm("Include uppercase characters in password?");
    var use_numeric   = confirm("Include numeric characters in password?");
    var use_special   = confirm("Include special characters in password?");

    if (use_lowercase || use_uppercase || use_numeric || use_special ) {
      keep_looping = false;
    }
    else {
      alert("At least one option must be selected, please re-enter");
      keep_looping = true;
    }
  
  } while (keep_looping);

  console.log(use_lowercase, use_uppercase, use_numeric, use_special);

  // ---------------------------------------------------
  // create a new password based on the user's criteria
  // ---------------------------------------------------

  // initialize new pswd to empty string
    var new_password = "";

  //  define next char to be appended to pswd
    var next_char;

  // create new password by appending characters until we have reached the user's desired length
    for (let i = 0; i < pswd_length; i++) {
      
      // call function to get next eligible character based on user's criteria
      next_char = nextChar(use_lowercase, use_uppercase, use_numeric, use_special);

      new_password = new_password + next_char;

    }

    console.log(new_password);

    return new_password;

}

// --------------------------------------------------------
// Function to determine next character for new password
// --------------------------------------------------------

function nextChar (use_lower, use_upper, use_num, use_spcl) {

  var nxt_chr = "";

  // Loop until we find the next valid random character based on user's criteria

  do {

    var select_random = Math.floor(Math.random() * 4);

    if (use_lower && select_random === 0) {
      nxt_chr = lowercase_char[Math.floor(Math.random() * 26)];
    }
  
    if (use_upper && select_random === 1) {
      nxt_chr = uppercase_char[Math.floor(Math.random() * 26)];
    } 
  
    if (use_num && select_random === 2) {
      nxt_chr = numeric_char[Math.floor(Math.random() * 10)];
    }  
  
    if (use_spcl && select_random === 3) {
      nxt_chr = special_char[Math.floor(Math.random() * 29)];
    }

  } while (nxt_chr === "");

  return nxt_chr;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
