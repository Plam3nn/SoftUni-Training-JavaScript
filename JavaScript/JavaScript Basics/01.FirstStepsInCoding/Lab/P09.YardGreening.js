function solve(squareMeters) {
    let priceForGreeningWithoutDiscount = squareMeters * 7.61;
    let discount = priceForGreeningWithoutDiscount * 0.18;
    let finalPrice = priceForGreeningWithoutDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

solve(550);