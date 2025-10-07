function solve(nylonSquareMeters, litersOfPaint, litersOfThinner, hoursWork) {
    let extraNylonSquareMeters = 2;
    let extraLitersOfPaint = litersOfPaint * 0.10;
    
    let bagPrice = 0.40;
    let priceForNylon = (nylonSquareMeters + extraNylonSquareMeters) * 1.50;
    let priceForPaint = (litersOfPaint + extraLitersOfPaint) * 14.50;
    let priceForThinner = litersOfThinner * 5.00;    

    let totalPriceForMaterials = bagPrice + priceForNylon + priceForPaint + priceForThinner;
    let priceForWorkforceForOneHour = totalPriceForMaterials * 0.30;
    
    let finalPrice = totalPriceForMaterials + priceForWorkforceForOneHour * hoursWork;

    console.log(finalPrice);    
}

solve(10, 11, 4, 8);