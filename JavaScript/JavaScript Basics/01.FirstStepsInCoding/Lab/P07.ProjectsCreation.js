function solve(architectName, numberOfProjects) {
    let totalHoursNeeded = numberOfProjects * 3;
    let result = `The architect ${architectName} will need ${totalHoursNeeded} hours to complete ${numberOfProjects} project/s.`;

    console.log(result);
}

solve(`Plamen`, 3);