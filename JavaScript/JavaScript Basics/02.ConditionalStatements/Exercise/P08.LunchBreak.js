function solve(seriesName, episodeDuration, breakDuration) {
    let lunchTime = breakDuration * 0.125;
    let restTime = breakDuration * 0.25;

    let timeLeftForSeries = breakDuration - lunchTime - restTime;

    if (timeLeftForSeries >= episodeDuration) {
        let timeLeft = breakDuration - (lunchTime + restTime + episodeDuration);
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = (lunchTime + restTime + episodeDuration) - breakDuration;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

solve(`lskdjf`, 60, 96);
solve(`teen wolf`, 48, 60);