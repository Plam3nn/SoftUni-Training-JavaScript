function solve(pensPackagesCount, markersPackagesCount, boardDetergentLiters, discountPercentage) {
    let priceForPens = pensPackagesCount * 5.80;
    let priceForMarkers = markersPackagesCount * 7.20;
    let priceForDetergent = boardDetergentLiters * 1.20;

    let totalPrice = priceForPens + priceForMarkers + priceForDetergent;
    let discount = totalPrice * discountPercentage / 100;
    let priceAfterDiscount = totalPrice - discount;

    console.log(priceAfterDiscount);
}

solve(2, 3, 4, 25)