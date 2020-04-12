# Password-Generator

This app creates a random password from 8 upto 128 characters long comprised of at least one of lowercase, uppercase, numeric or special characters.

A button click starts the process.

The user is prompted for the length of the password to be created.
The length is validated (must be between 8 and 128) and if not valid the user is re-prompted until a valid length is entered.
With a valid length the user is next queried as what type of characters are to be used to create the password.
The user must choose at least one of lowercase, uppercase, numeric or special characters. The user will be re-prompted if no option is chosen.

Once we have a valid length and valid character type selection the password will be generated.

The new password starts as an empty string.  A function is used to determine the next random character, based on the user's selection criteria, to append to the new password.  Appending random characters continues until the new password
reaches the desired length. 

Once complete the new password is displayed on screen. Needed to change CSS for #password to use 'auto' overflow.

## GitHub code

https://github.com/JimGreasley/Password-Generator


## Deployment link

https://jimgreasley.github.io/Password-Generator/