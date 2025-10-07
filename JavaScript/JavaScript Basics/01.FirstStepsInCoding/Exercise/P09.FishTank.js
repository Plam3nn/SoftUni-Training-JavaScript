function solve(lenght, width, height, fillagePercentage) {
    let volume = lenght * width * height;

    // without fillage
    let litersOfWater = volume / 1000; 
    
    // with fillage
    let actualLitersOfWater = litersOfWater - litersOfWater * fillagePercentage / 100; 

    function name(params) {
        
    }

    console.log(actualLitersOfWater);
}

solve(85, 75, 47, 17);