function solve(input) {
    let index = 0;
    let total = 0;
    
    while (true) {
        let current = input[index++];
        
        if (current === `NoMoreMoney`) {
            break;
        }

        current = parseFloat(current);
        
        if (current < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        total += current;

        console.log(`Increase: ${current.toFixed(2)}`);
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

solve(["5.51", "69.42","-100","NoMoreMoney"]);  