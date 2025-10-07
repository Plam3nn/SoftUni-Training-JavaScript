function solve(days, placeType, feedback) {
    days--; // 5 days => 4 nights
    
    let price = 0;
    
    if (placeType === `apartment`) {
        price = days * 25.00;
        
        if (days < 10) {
            price *= 0.70;
        } else if (days <= 15) {
            price *= 0.65;
        } else if (days > 15) {
            price *= 0.50;
        }
    } else if (placeType === `president apartment`) {
        price = days * 35.00;
        
        if (days < 10) {
            price *= 0.90;
        } else if (days <= 15) {
            price *= 0.85;
        } else if (days > 15) {
            price *= 0.80;
        }
    } else {
        price = days * 18.00;
    }

    if (feedback === `positive`) {
        price *= 1.25;
    } else {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
}

solve(12, "room for one person", "positive");