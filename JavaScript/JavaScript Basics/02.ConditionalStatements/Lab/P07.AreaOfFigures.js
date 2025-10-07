function solve(shape) {
    let result;

    if (shape == `square`) {
        let side = arguments[1];

        result = side * side;
    } else if (shape == `rectangle`) {
        let sideA = arguments[1];
        let sideB = arguments[2];

        result = sideA * sideB;
    } else if (shape == `circle`) {
        let radius = arguments[1];

        result = Math.PI * radius * radius;
    } else {
        let base = arguments[1];
        let height = arguments[2];

        result = base * height / 2;
    }

    console.log(result);
}

solve(`square`, 5);