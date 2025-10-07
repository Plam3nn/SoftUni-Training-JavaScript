function solve(input) {
    const MUSALA_MAX_GROUP_SIZE = 5;
    const MONT_BLANC_MAX_GROUP_SIZE = 12;
    const KILIMANJARO_MAX_GROUP_SIZE = 25;
    const K2_MAX_GROUP_SIZE = 40;
    const EVEREST_MIN_GROUP_SIZE = 41;

    let groups = Number(input[0]);

    let totalPeople = 0;
    let peopleForMusala = 0;
    let peopleForMontBlanc = 0;
    let peopleForKilimanjaro = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;

    for (let i = 1; i < groups + 1; i++) {
        let groupSize = Number(input[i]);

        totalPeople += groupSize;

        if (groupSize <= MUSALA_MAX_GROUP_SIZE) {
            peopleForMusala += groupSize;
        } else if (groupSize <= MONT_BLANC_MAX_GROUP_SIZE) {
            peopleForMontBlanc += groupSize;
        } else if (groupSize <= KILIMANJARO_MAX_GROUP_SIZE) {
            peopleForKilimanjaro += groupSize;
        } else if (groupSize <= K2_MAX_GROUP_SIZE) {
            peopleForK2 += groupSize;
        } else if (groupSize >= EVEREST_MIN_GROUP_SIZE) {
            peopleForEverest += groupSize;
        }
    }

    let percentageOfClimbingMusala = peopleForMusala / totalPeople * 100;
    let percentageOfClimbingMontBlanc = peopleForMontBlanc / totalPeople * 100;
    let percentageOfClimbingKilimanjaro = peopleForKilimanjaro / totalPeople * 100;
    let percentageOfClimbingK2 = peopleForK2 / totalPeople * 100;
    let percentageOfClimbingEverest = peopleForEverest / totalPeople * 100;

    console.log(`${percentageOfClimbingMusala.toFixed(2)}%`);
    console.log(`${percentageOfClimbingMontBlanc.toFixed(2)}%`);
    console.log(`${percentageOfClimbingKilimanjaro.toFixed(2)}%`);
    console.log(`${percentageOfClimbingK2.toFixed(2)}%`);
    console.log(`${percentageOfClimbingEverest.toFixed(2)}%`);
}

solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);