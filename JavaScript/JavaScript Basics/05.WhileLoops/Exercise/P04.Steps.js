function solve(input) {
    const GOAL = 10000;

    let index = 0;
    let totalSteps = 0;

    while (true) {
        if (index === input.length - 1) {
            break;
        }
        
        let currentValue = input[index];

        if (currentValue === `Going home`) {
            index++;
            break;
        }        

        let currentSteps = Number(input[index]);
        totalSteps += currentSteps;

        index++;
    }

    totalSteps += Number(input[index]);

    if (totalSteps >= GOAL) {
        let stepsOverTheGoal = totalSteps - GOAL;

        console.log(`Goal reached! Good job!`);
        console.log(`${stepsOverTheGoal} steps over the goal!`);
    } else {
        let stepsNeededMore = GOAL - totalSteps;

        console.log(`${stepsNeededMore} more steps to reach goal.`);
    }
}

solve((["1000",
"1500",
"2000",
"6500"]))