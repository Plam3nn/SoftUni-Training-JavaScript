function solve(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let pieces = cakeWidth * cakeLength;

    let index = 2;

    while (true) {
        let nextInput = input[index];

        if (nextInput === `STOP`) {
            console.log(`${pieces} pieces are left.`);
            break;
        }

        let piecesTaken = Number(nextInput);
        pieces -= piecesTaken;

        if (pieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            break;
        }

        index++;
    }
}

solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);