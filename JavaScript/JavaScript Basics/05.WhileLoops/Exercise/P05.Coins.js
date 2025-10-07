function solve(money) {
    const ONE_STOTINKA = 0.01;
    const TWO_STOTINKI = 0.02;
    const FIVE_STOTINKI = 0.05;
    const TEN_STOTINKI = 0.10;
    const TWENTY_STOTINKI = 0.20;
    const FIFTY_STOTINKI = 0.50;
    const ONE_LEV = 1.00;
    const TWO_LEVA = 2.00;

    let coins = 0;

    while (true) {
        if (money === 0) {
            break;
        }
           
        if (money - TWO_LEVA >= 0) {
            money -= TWO_LEVA;
        } else if (money - ONE_LEV >= 0) {
            money -= ONE_LEV;
        } else if (money - FIFTY_STOTINKI >= 0) {
            money -= FIFTY_STOTINKI;
        } else if (money - TWENTY_STOTINKI >= 0) {
            money -= TWENTY_STOTINKI;
        } else if (money - TEN_STOTINKI >= 0) {
            money -= TEN_STOTINKI
        } else if (money - FIVE_STOTINKI >= 0) {
            money -= FIVE_STOTINKI;
        } else if (money - TWO_STOTINKI >= 0) {
            money -= TWO_STOTINKI;
        } else if (money - ONE_STOTINKA >= 0) {
            money -= ONE_STOTINKA;
        }

        money = Number(money.toFixed(2));
        coins++;
    }

    console.log(coins);
}

solve(1.23);