var first_name = prompt("Enter your first name: ");
var last_name = prompt("Enter your last name: ");
var age = prompt("Enter your age: ");
var height = prompt("Enter your height: ");
var pet= prompt("Enter the name of your pet");
if ((first_name[0] == last_name[0]) && (age>20 && age<30) && (height>170) && (pet[pet.length - 1])){
    console.log("Welcome Comrade! You have passed the spy test.");
}
else{
    console.log("Sorry, nothing to see here.");
}