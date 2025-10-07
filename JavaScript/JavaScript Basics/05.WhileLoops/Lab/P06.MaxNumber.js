function solve(input) {
    let index = 0;
    let biggest = Number.MIN_SAFE_INTEGER;

    while (true) {
        var current = input[index++];

        if (current === `Stop`) {
            break;
        }

        current = parseInt(current);

        if (current > biggest) {
            biggest = current;
        }
    }

    console.log(biggest);
}

solve(["-10","20","-30","Stop"]);