function solve(input) {
    let index = 0;
    let poorGradesCountAllowed = Number(input[index++]);

    let poorGradesScored = 0;
    let numberOfProblemsSolved = 0;
    let totalGradesScore = 0;
    let lastProblemName = '';

    while (true) {
        if (poorGradesScored === poorGradesCountAllowed) {
            console.log(`You need a break, ${poorGradesScored} poor grades.`);
            return;
        }        

        let problemName = input[index];

        if (problemName === `Enough`) {
            break;
        }

        let problemGrade = Number(input[index + 1]);
        
        if (problemGrade <= 4) {
            poorGradesScored++;
        }        

        lastProblemName = problemName;
        numberOfProblemsSolved++;
        totalGradesScore += problemGrade;
        
        index += 2;
    }

    let averageScore = totalGradesScore / numberOfProblemsSolved;

    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${numberOfProblemsSolved}`);
    console.log(`Last problem: ${lastProblemName}`);
}

solve((["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]));