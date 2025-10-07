function solve(fruitName, day, quantity) {
    const DAYS = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
    const FRUITS = [`banana`, `apple`, `orange`, `grapefruit`, `kiwi`, `pineapple`, `grapes`];
    
    if (!DAYS.includes(day) || !FRUITS.includes(fruitName)) {
        console.log(`error`);
        return;
    }

    let fruitPrice = 0;
    let isWeekend = day === `Saturday` || day === `Sunday` ? true : false;

    if (fruitName === `banana`) {
        isWeekend ? fruitPrice = 2.70 : fruitPrice = 2.50
    } else if (fruitName === `apple`) {
        isWeekend ? fruitPrice = 1.25 : fruitPrice = 1.20
    } else if (fruitName === `orange`) {
        isWeekend ? fruitPrice = 0.90 : fruitPrice = 0.85
    } else if (fruitName === `grapefruit`) {
        isWeekend ? fruitPrice = 1.60 : fruitPrice = 1.45
    } else if (fruitName === `kiwi`) {
        isWeekend ? fruitPrice = 3.00 : fruitPrice = 2.70
    } else if (fruitName === `pineapple`) {
        isWeekend ? fruitPrice = 5.60 : fruitPrice = 5.50
    } else if (fruitName === `grapes`) {
        isWeekend ? fruitPrice = 4.20 : fruitPrice = 3.85
    }    

    let totalPrice = fruitPrice * quantity;
    console.log(totalPrice.toFixed(2));
}

solve(`sdf`, `sdf`, 2);