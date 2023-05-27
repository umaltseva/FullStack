function* numberGenerator() {
    let previousResult = 1;

    while (true) {
        const input = prompt(`Previous result: ${previousResult}. Enter a new number:`);

        if (isNaN(input)) {
            console.error('Invalid number!');
        } else {
            const number = Number(input);
            previousResult += number;

            if (previousResult > 10000) {
                previousResult = 1;
            }

            yield previousResult;
        }
    }
}

const generator = numberGenerator();

// Start the generator and handle the results
function handleGenerator() {
    const result = generator.next().value;
    console.log(`Current result: ${result}`);

    if (result <= 10000) {
        handleGenerator();
    }
}

handleGenerator();
