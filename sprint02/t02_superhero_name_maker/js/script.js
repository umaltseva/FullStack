function validateInput(input, regex) {
    return regex.test(input);
}

function generateSuperheroName() {
    let animalRegex = /^[A-Za-z]{1,20}$/;
    let genderRegex = /^(male|female|)$/i;
    let ageRegex = /^(?!0)\d{1,5}$/;

    let animal = prompt("What animal is the superhero most similar to?");

    if (!validateInput(animal, animalRegex)) {
        alert("Invalid animal name. Please enter a word (up to 20 letters) containing only letters.");
        return;
    }

    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

    if (!validateInput(gender, genderRegex)) {
        alert("Invalid gender. Please enter either 'male' or 'female', or leave it blank.");
        return;
    }

    let age = prompt("How old is the superhero?");

    if (!validateInput(age, ageRegex)) {
        alert("Invalid age. Please enter a number (up to 5 digits) that does not start with zero.");
        return;
    }

    let description = "";

    if (gender.toLowerCase() === "male") {
        if (age < 18) {
            description = "boy";
        } else {
            description = "man";
        }
    } else if (gender.toLowerCase() === "female") {
        if (age < 18) {
            description = "girl";
        } else {
            description = "woman";
        }
    } else {
        if (age < 18) {
            description = "kid";
        } else {
            description = "hero";
        }
    }

    let superheroName = animal + "-" + description + "!";

    alert("The superhero name is: " + superheroName);
}

generateSuperheroName();