function solve(animal) {
    if (animal === `dog`) {
        console.log(`mammal`);
    } else if (animal == `crocodile`
        || animal === `tortoise`
        || animal === `snake`
    ) {
        console.log(`reptile`);
    } else {
        console.log(`unknown`);
    }
}

solve(`baba ti`);