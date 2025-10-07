function solve(firstNumber, secondNumber) {
    let sum = 0;
    const numbersDivisibleByNine = [];

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = i;

        if (currentNumber % 9 == 0) {
            sum += currentNumber;
            numbersDivisibleByNine.push(currentNumber);
        }
    }
    
    console.log(`The sum: ${sum}`);

    numbersDivisibleByNine.forEach(element => {
        console.log(element);
    });
}

solve(100, 200);