function solve(words) {

    while (true) {
        let currentWord = words.shift();

        if (currentWord === `Stop`) {
            break;
        }

        console.log(currentWord);
    }
}

solve((["Nakov","SoftUni","Sofia","Africa","SomeText","Stop","AfterStop","Europe","HelloWorld"]));