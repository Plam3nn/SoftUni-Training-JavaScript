function solve(number) {
    switch (number) {
        case 1: console.log(`Monday`); break;
        case 2: console.log(`Tuesday`); break;
        case 3: console.log(`Wednesday`); break;
        case 4: console.log(`Thursday`); break;
        case 5: console.log(`Friday`); break;
        case 6: console.log(`Satday`); break;
        case 7: console.log(`Sunday`); break;
        default: console.log(`Error`); break;
    }
}

solve(1);
solve(0);
solve(4);
solve(6);
solve(3);