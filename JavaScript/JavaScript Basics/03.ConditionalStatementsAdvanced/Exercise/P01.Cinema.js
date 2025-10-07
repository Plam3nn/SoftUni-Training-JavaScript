function solve(projectionType, rows, columns) {
    let ticketPrice = 0;

    switch (projectionType) {
        case "Premiere": ticketPrice = 12.00; break;
        case "Normal": ticketPrice = 7.50; break;
        case "Discount": ticketPrice = 5.00; break;
        default: console.log("Invalid projection type"); return;
    }

    let totalSeats = rows * columns;
    let totalRevenue = totalSeats * ticketPrice;

    console.log(totalRevenue.toFixed(2) + " leva");
}
