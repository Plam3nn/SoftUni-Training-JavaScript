function solve(dogFoodPackagesCount, catFoodPackagesCount) {
    let dogFoodTotalPrice = dogFoodPackagesCount * 2.50;
    let catFoodTotalPrice = catFoodPackagesCount * 4.00;
    let totalPrice = dogFoodTotalPrice + catFoodTotalPrice;

    console.log(`${totalPrice} lv.`);
}

solve(5, 4);