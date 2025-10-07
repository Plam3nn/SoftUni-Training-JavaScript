function solve(age, laundryPrice, toyUnitPrice) {
    let toysCount = 0;
    let money = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toysCount++;
        } else {
            money += (i * 5) - 1;
        }
    }

    money += toysCount * toyUnitPrice;
    money -= laundryPrice;

    if (money >= 0) {
        console.log(`Yes! ${(money).toFixed(2)}`);
    } else {
        console.log(`No! ${(Math.abs(money)).toFixed(2)}`);
    }
}

solve(10, 170.00, 6);
solve(21, 1570.98, 3);