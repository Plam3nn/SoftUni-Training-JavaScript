function solve(input) {
    let index = 0;
    let name = input[index++];
    let gradesSum = 0;
    let notPassedGradeCount = 0;
    let grade = 1; // class [1, 2, 3 ... 12]

    while (true) {
        if (grade === 13) {
            break;
        }
        
        let annualGrade = parseFloat(input[index++]); // [2, 3 ... 6]

        if (annualGrade < 4) {
            notPassedGradeCount++;
        }

        if (notPassedGradeCount === 2) {    
            console.log(`${name} has been excluded at ${grade} grade`);        
            return;
        }

        gradesSum += annualGrade;
        grade++;
    }

    let averageGrade = gradesSum / 12;

    console.log(`${name} graduate. Average grade: ${averageGrade.toFixed(2)}`);
}

solve(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);