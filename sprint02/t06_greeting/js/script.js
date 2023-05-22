let firstName = prompt("Enter your first name:");

if (firstName.trim() === "" || hasIncorrectInput(firstName)) {
    console.log("Wrong input!");
    alert("Wrong input!");
} else {
    let lastName = prompt("Enter your last name:");

    if (lastName.trim() === "" || hasIncorrectInput(lastName)) {
        console.log("Wrong input!");
        alert("Wrong input!");
    } else {
        firstName = capitalizeFirstLetter(firstName);
        lastName = capitalizeFirstLetter(lastName);

        console.log("Hello, " + firstName + " " + lastName);
        alert("Hello, " + firstName + " " + lastName);
    }
}

function hasIncorrectInput(name) {
    return /\d|\s/.test(name);
}

function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
