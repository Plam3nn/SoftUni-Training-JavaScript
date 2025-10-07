function solve(recordTime, distanceInMeters, metersPerSecond) {
    let timeLostDueToWaterResistance = Math.floor(distanceInMeters / 15) * 12.5;    
    let ivansTime = distanceInMeters * metersPerSecond + timeLostDueToWaterResistance;
    
    if (ivansTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivansTime - recordTime).toFixed(2)} seconds slower.`);
    }
}

solve(10464, 1500, 20);
solve(55555.67, 3017, 5.03);