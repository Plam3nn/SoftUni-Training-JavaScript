function solve(input) {
    const MAX_DAYS_SPENDING_IN_A_ROW_ALLOWED = 5;

    let index = 0;

    let moneyNeededForVacation = Number(input[0]);
    let currentSavings = Number(input[1]);

    let daysSpendingInARow = 0;
    let daysPassed = 0;    
    index += 2;

    while (true) {
        if (daysSpendingInARow === MAX_DAYS_SPENDING_IN_A_ROW_ALLOWED) {
            console.log(`You can't save the money.`);
            console.log(`${daysPassed}`);
            return;
        }

        if (currentSavings >= moneyNeededForVacation) {
            console.log(`You saved the money for ${daysPassed} days.`);
            return;
        }

        let action = input[index]; // save or spend
        let amount = Number(input[index + 1]);
        
        if (action === `spend`) {
            currentSavings -= amount;
            
            if (currentSavings < 0) {
                currentSavings = 0;
            }       

            daysSpendingInARow++;                 
        } else if (action === `save`) {
            currentSavings += amount;
            daysSpendingInARow = 0;
        }

        daysPassed++;
        index += 2;
    }
}

solve((["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]))