function solve(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTimeInMinutes = examHour * 60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;
    
    if (arrivalTimeInMinutes > examTimeInMinutes) {
        console.log(`Late`);
    } else if (examTimeInMinutes - arrivalTimeInMinutes > 30) {
        console.log(`Early`);
    } else if (arrivalTimeInMinutes - 30 <= examTimeInMinutes) {
        console.log(`On time`);
    }
    
    let output = ``;
    
    if (examTimeInMinutes - arrivalTimeInMinutes !== 0) {
        let minutesDiff = Math.abs(examTimeInMinutes - arrivalTimeInMinutes);
        let hoursDiff = 0;
        
        if (minutesDiff > 59) {
            hoursDiff = Math.floor(minutesDiff / 60);
            minutesDiff -= hoursDiff * 60;

            output += `${hoursDiff}:${String(minutesDiff).padStart(2, `0`)} hours `;
        } else {
            output += `${minutesDiff} minutes `;
        }
    }

    if (arrivalTimeInMinutes < examTimeInMinutes) {
        output += `before the start`
    } else if (arrivalTimeInMinutes > examTimeInMinutes){
        output += `after the start`
    }

    console.log(output);
}

solve(11, 30, 10, 55);