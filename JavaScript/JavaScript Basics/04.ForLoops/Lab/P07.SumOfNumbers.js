function solve(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        let digit = parseInt(number[i]);

        sum += digit;
    }

    console.log(`The sum of the digits is:${sum}`);
}

solve(`1234`);