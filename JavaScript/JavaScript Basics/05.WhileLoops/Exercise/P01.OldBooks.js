function solve(input) {
    let index = 0;
    let bookToSearchFor = input[0];

    while (true) {
        index++;

        let currentBook = input[index];

        if (currentBook === `No More Books`) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${index - 1} books.`);
            return;
        }

        if (currentBook === bookToSearchFor) {
            console.log(`You checked ${index - 1} books and found it.`);
            return;
        }
    }
}

solve((["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]));