function solve(firstTime, secondTime, thirdTime) {
    let totalTimeInSeconds = firstTime + secondTime + thirdTime;
    let minutes = parseInt(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds - minutes * 60;

    console.log(`${minutes}:${seconds.toString().padStart(2, '0')}`);
}

solve(35, 45, 44);