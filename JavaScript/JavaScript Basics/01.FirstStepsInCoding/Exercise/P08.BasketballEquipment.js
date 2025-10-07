function solve(annualTaxPrice) {
    let shoesPrice = annualTaxPrice - annualTaxPrice * 0.40;
    let clothesPrice = shoesPrice - shoesPrice * 0.20;
    let ballPrice = clothesPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let finalPrice = annualTaxPrice + shoesPrice + clothesPrice + ballPrice + accessoriesPrice;

    console.log(finalPrice);
}

solve(365);