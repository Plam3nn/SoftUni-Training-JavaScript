function solve(input) {
    let index = 0;
    let targetNumber = parseInt(input[index++]);
    let sum = 0;
    
    while (true) {
        let currentNumber = parseInt(input[index++]);

        sum += currentNumber;

        if (sum >= targetNumber) {
            console.log(sum);
            break;
        }
    }
}

solve(["20","1","2","3","4","5","6"]);