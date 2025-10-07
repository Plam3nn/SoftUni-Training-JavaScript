function solve(word) {
    let sum = 0;

    for (let i = 0; i < word.length; i++) {
        let character = word[i];
        
        if (character === `a`) {
            sum += 1;
        } else if (character === `e`) {
            sum += 2;
        } else if (character === `i`) {
            sum += 3;
        } else if (character === `o`) {
            sum += 4;
        } else if (character === `u`) {
            sum += 5;
        }
    }

    console.log(sum);
}

solve(`beer`);