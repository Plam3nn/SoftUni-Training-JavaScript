function solve(budget, gpuCount, cpuCount, ramCount) {
    let priceForGpus = gpuCount * 250;
    let priceForCpus = cpuCount * (priceForGpus * 0.35);
    let priceForRam = ramCount * (priceForGpus * 0.10);

    let total = priceForGpus + priceForCpus + priceForRam;

    if (gpuCount > cpuCount) {
        total -= total * 0.15;    
    }

    let isEnoughMoney = budget - total >= 0;

    if (isEnoughMoney) {
        let moneyLeft = budget - total;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = total - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

solve(900, 2, 1, 3);
solve(920.45, 3, 1, 1);