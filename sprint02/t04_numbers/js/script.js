function checkDivision(beginRange = 1, endRange = 100) {
    for (let i = beginRange; i <= endRange; i++) {
        let description = "";

        if (i % 2 === 0) {
            description += "even";
        }

        if (i % 3 === 0) {
            if (description !== "") {
                description += ", ";
            }
            description += "a multiple of 3";
        }

        if (i % 10 === 0) {
            if (description !== "") {
                description += ", ";
            }
            description += "a multiple of 10";
        }

        console.log(i + (description !== "" ? " is " + description : " -"));
    }
}

let beginRange = prompt("Enter the beginning of the range:");
let endRange = prompt("Enter the end of the range:");

checkDivision(beginRange, endRange);
