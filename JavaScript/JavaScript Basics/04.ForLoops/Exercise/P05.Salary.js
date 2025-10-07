function solve(input) {
    const FACEBOOK_FINE = 150;
    const INSTAGRAM_FINE = 100;
    const REDDIT_FINE = 50;

    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < tabsOpened + 2; i++) {
        let website = input[i];

        switch (website) {
            case `Facebook`: salary -= FACEBOOK_FINE; break;
            case `Instagram`: salary -= INSTAGRAM_FINE; break;
            case `Reddit`: salary -= REDDIT_FINE; break;
            default: break;
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
        }        
    }

    console.log(Math.floor(salary));
}

solve([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);