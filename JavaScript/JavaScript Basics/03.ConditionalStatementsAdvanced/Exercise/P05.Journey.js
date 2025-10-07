function solve(budget, season) {
    let destination = budget <= 100 ? `Bulgaria` : budget <= 1000 ? `Balkans` : `Europe`;
    let place = season === `summer` ? `Camp` : `Hotel`;
    let cost = 0;

    if (destination === `Bulgaria`) {
        season === `summer` ? cost = budget * 0.3 : cost = budget * 0.7;   
    } else if (destination === `Balkans`) {
        season === `summer` ? cost = budget * 0.4 : cost = budget * 0.8;
    } else if (destination === `Europe`) {
        cost = budget * 0.9;
        place = `Hotel`;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${cost.toFixed(2)}`);
}

solve(50, `summer`);
solve(75, `winter`);
solve(312, `summer`);
solve(678.53, `winter`);
solve(1500, `summer`);