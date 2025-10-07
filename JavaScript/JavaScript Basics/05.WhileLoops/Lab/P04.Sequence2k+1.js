function solve(number) {
    let start = 1;
    
    while (true) {
        if (start > number) {
            break;
        }

        console.log(start);
        start = 2 * start + 1;
    }
}

solve(31);