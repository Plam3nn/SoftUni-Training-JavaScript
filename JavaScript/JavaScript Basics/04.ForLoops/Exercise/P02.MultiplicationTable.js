function solve(number) {
    for (let i = 1; i <= 10; i++) {
        let result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }
}

solve(5);