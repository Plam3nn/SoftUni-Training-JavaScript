function solve(firstNumber, secondNumber, operator) {
    if (operator === `+`
        || operator === `-`
        || operator === `*`
    ) {
        let result = 0;
        
        if (operator === `+`) {
            result = firstNumber + secondNumber;
        } else if (operator === `-`) {
            result = firstNumber - secondNumber;
        } else {
            result = firstNumber * secondNumber;
        }

        let resultType = result % 2 === 0 ? `even` : `odd`;

        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${resultType}`);
    } else if (operator === `/`
        || operator === `%`
    ) {
        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
            return;
        }

        let result = 0;

        if (operator === `/`) {
            result = (firstNumber / secondNumber).toFixed(2);
        } else {
            result = firstNumber % secondNumber;
        }

        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    }
}

solve(10, 12, `+`);
solve(10, 1, `-`);
solve(7, 3, `*`);
solve(123, 45, `/`);
solve(10, 3, `%`);
solve(10, 0, `/`);
solve(10, 0, `%`);