function solve(city, sales) {
    if (sales < 0) {
        return "error";
    }

    let commissionRate = 0;

    if (city === "Sofia") {
        if (sales <= 500) {
            commissionRate = 0.05;
        } else if (sales <= 1000) {
            commissionRate = 0.07;
        } else if (sales <= 10000) {
            commissionRate = 0.08;
        } else {
            commissionRate = 0.12;
        }
    } else if (city === "Varna") {
        if (sales <= 500) {
            commissionRate = 0.045;
        } else if (sales <= 1000) {
            commissionRate = 0.075;
        } else if (sales <= 10000) {
            commissionRate = 0.10;
        } else {
            commissionRate = 0.13;
        }
    } else if (city === "Plovdiv") {
        if (sales <= 500) {
            commissionRate = 0.055;
        } else if (sales <= 1000) {
            commissionRate = 0.08;
        } else if (sales <= 10000) {
            commissionRate = 0.12;
        } else {
            commissionRate = 0.145;
        }
    } else {
        return "error";
    }

    let commission = sales * commissionRate;
    console.log(commission.toFixed(2));    
}