function solve(movieBudget, extrasCount, clothingPricePerExtra) {
    let clothingCost = extrasCount * clothingPricePerExtra;

    if (extrasCount >= 150) {
        let clothingDiscount = clothingCost * 0.1;
        clothingCost -= clothingDiscount;
    }

    let decorationCost = movieBudget * 0.1;
    let totalExpenses = clothingCost + decorationCost;
    let balance = movieBudget - totalExpenses;
    let isEnough = balance >= 0;

    if (isEnough) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${balance.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        
        // Multiplying by -1 to make the balance positive

        if (balance < 0) {
            balance *= -1;
        }

        console.log(`Wingard needs ${balance.toFixed(2)} leva more.`);        
    }
}

solve(20000, 120, 55.5);
solve(15437.62, 186, 57.99);
solve(9587.88, 222, 55.68);