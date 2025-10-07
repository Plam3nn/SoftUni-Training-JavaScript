function solve(hours, minutes) {
    minutes += 15;

    if (minutes >= 60) {
        hours++;
        minutes -= 60;
    }

    if (hours >= 24) {
        hours -= 24;
    }  
        
    console.log(`${hours}:${minutes.toString().padStart(2, '0')}`);
}

solve(1, 46);