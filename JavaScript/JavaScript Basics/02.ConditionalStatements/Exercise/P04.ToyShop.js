function solve(tripPrice, puzzles, dolls, teddyBears, minions, trucks) {
    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3.00;
    let teddyBearsPrice = teddyBears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2.00;

    let moneyEarned = puzzlesPrice + dollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;
    let toysCount = puzzles + dolls + teddyBears + minions + trucks;

    if (toysCount >= 50) {
        moneyEarned -= moneyEarned * 0.25;
    }

    let rent = moneyEarned * 0.10;
    moneyEarned -= rent;

    if (moneyEarned >= tripPrice) {
        let moneyLeft = moneyEarned - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

solve(40.8, 20, 25, 30, 50, 10);
solve(320, 8, 2, 5, 5, 1);