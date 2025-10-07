function solve(input) {
    let index = 0;
    let username = input[index++];
    let password = input[index++];

    while (true) {
        let guess = input[index++];

        if (guess === password) {
            console.log(`Welcome ${username}!`);
            break;
        }
    }
}

solve([`Plamen`, `1234`, `4234`, `23453`, `1234`]);