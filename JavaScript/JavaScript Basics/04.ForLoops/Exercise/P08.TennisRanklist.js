function solve(input) {
    const POINTS_FOR_WIN = 2000;
    const POINTS_FOR_FINAL = 1200;
    const POINTS_FOR_SEMI_FINAL = 720;

    let numberOfTornaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let tornamentResults = input.slice(2, 2 + numberOfTornaments);

    let wonPoints = 0;
    let totalWins = 0;

    for (let i = 0; i < tornamentResults.length; i++) {
        let currentTornamentPlace = tornamentResults[i];

        switch (currentTornamentPlace) {
            case 'W': 
                wonPoints += POINTS_FOR_WIN; 
                totalWins++;
                break;
            case 'F': 
                wonPoints += POINTS_FOR_FINAL; 
                break;
            case 'SF': 
                wonPoints += POINTS_FOR_SEMI_FINAL;
                break; 
        }
    }

    let finalPoints = startingPoints + wonPoints;
    let averagePoints = wonPoints / numberOfTornaments;
    let winRate = (totalWins / numberOfTornaments * 100).toFixed(2);

    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winRate}%`);
}

solve((["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]))