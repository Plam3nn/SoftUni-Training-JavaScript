function solve(month, nights) {
    let priceForStudio = 0;
    let priceForApartment = 0;
    
    if (month === `May` || month === `October`) {
        priceForStudio = nights * 50;
        priceForApartment = nights * 65;

        if (nights > 14) {
            priceForStudio -= priceForStudio * 0.3;
        } else if (nights > 7) {
            priceForStudio -= priceForStudio * 0.05;
        }
    } else if (month === `June` || month === `September`) {
        priceForStudio = nights * 75.20;
        priceForApartment = nights * 68.70;

        if (nights > 14) {
            priceForStudio -= priceForStudio * 0.2;
        }
    } else if (month === `July` || month === `August`) {
        priceForStudio = nights * 76;
        priceForApartment = nights * 77;
    }

    if (nights > 14) {
        priceForApartment -= priceForApartment * 0.1;
    }

    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
}

solve(`May`, 15);
solve(`June`, 14);
solve(`August`, 20);