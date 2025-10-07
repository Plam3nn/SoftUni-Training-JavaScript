function solve(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNumber = parseInt(input[i]);

        if (currentNumber <= 199) {
            p1++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            p3++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        }
    }

    let numbersCount = input[0];

    let p1Percentage = p1 / numbersCount * 100;
    let p2Percentage = p2 / numbersCount * 100;
    let p3Percentage = p3 / numbersCount * 100;
    let p4Percentage = p4 / numbersCount * 100;
    let p5Percentage = p5 / numbersCount * 100;

    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
    console.log(`${p4Percentage.toFixed(2)}%`);
    console.log(`${p5Percentage.toFixed(2)}%`);    
}

solve([7, 800, 801, 250, 199, 399, 599, 799]);