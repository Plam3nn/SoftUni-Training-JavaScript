function solve(input) {
    const POINTS_NEEDED = 1250.50;

    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);
    let judgesCount = Number(input[2]);

    let totalPoints = pointsFromAcademy;

    // 4 judges with 2 arguments per each (name and points) + 3 because of the starting index
    for (let i = 3; i < judgesCount * 2 + 3; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        totalPoints += (judgeName.length * judgePoints / 2);

        if (totalPoints >= POINTS_NEEDED) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    console.log(`Sorry, ${actorName} you need ${(POINTS_NEEDED - totalPoints).toFixed(1)} more!`);
}

solve(["Sandra Bullock", "340",
    "5",
    "Robert De Niro", "50",
    "Julia Roberts", "40.5",
    "Daniel Day-Lewis", "39.4",
    "Nicolas Cage", "29.9",
    "Stoyanka Mutafova", "33"]
   );