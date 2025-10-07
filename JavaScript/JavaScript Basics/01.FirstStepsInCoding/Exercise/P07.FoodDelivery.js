function solve(chickenMenusCount, fishMenusCount, vegetarianMenusCount) {
    let chickenMenusPrice = chickenMenusCount * 10.35;
    let fishMenusPrice = fishMenusCount * 12.40;
    let vegetarianMenusPrice = vegetarianMenusCount * 8.15;

    let allMenusTotalPrice = chickenMenusPrice + fishMenusPrice + vegetarianMenusPrice;
    let dessertPrice = allMenusTotalPrice * 0.20;

    let finalPrice = allMenusTotalPrice + dessertPrice + 2.50;

    console.log(finalPrice);
}

solve(2, 4, 3);