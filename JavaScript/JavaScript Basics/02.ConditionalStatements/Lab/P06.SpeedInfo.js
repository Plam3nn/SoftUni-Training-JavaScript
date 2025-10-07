function solve(speed) {
    if (speed > 1000) {
        console.log(`extremely fast`);
    } else if (speed > 150) {
        console.log(`ultra fast`);
    } else if (speed > 50) {
        console.log(`fast`);
    } else if (speed > 10) {
        console.log(`average`);
    } else {
        console.log(`slow`);
    }
}

solve(8);
solve(15);
solve(60);
solve(180);
solve(2000);