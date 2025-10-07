function solve(numberOfPages, pagesForOneHour, numberOfDays) {
    let totalHoursRequired = numberOfPages / pagesForOneHour;
    let hoursPerDay = totalHoursRequired / numberOfDays;

    console.log(hoursPerDay);
}

solve(212, 20, 2);