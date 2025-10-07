function solve(deposit, depositPeriod, annualInterestPercentage) {
    let sum = deposit + depositPeriod * ((deposit * annualInterestPercentage / 100) / 12);
    console.log(sum);
}

solve(2350, 6, 7);