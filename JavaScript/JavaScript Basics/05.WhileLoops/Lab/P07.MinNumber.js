function solve(input) {
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    while (true) {
        let current = input[index++];
        
        if (current === `Stop`) {
            break;
        }

        current = parseInt(current);

        if (current < min) {
            min = current;
        }
    }

    console.log(min);
}

solve(["-10","20","-30","Stop"]);