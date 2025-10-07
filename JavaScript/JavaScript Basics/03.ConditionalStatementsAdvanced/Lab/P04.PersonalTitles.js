function solve(age, gender) {
    if (age < 16) {
        if (gender === `f`) {
            console.log(`Miss`);
        } else {
            console.log(`Master`);
        }
    } else {
        if (gender === `f`) {
            console.log(`Ms.`);
        } else {
            console.log(`Mr.`);
        }
    }    
}

solve(13.5, `m`);