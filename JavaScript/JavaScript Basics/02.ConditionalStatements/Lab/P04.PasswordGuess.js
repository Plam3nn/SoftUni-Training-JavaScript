function solve(inputPassword) {
    const CORRECT_PASSWORD = `s3cr3t!P@ssw0rd`;

    if (inputPassword == CORRECT_PASSWORD) {
        console.log(`Welcome`);
    } else {
        console.log(`Wrong password!`);
    }
}

solve('lksf');
solve(`s3cr3t!P@ssw0rd`);