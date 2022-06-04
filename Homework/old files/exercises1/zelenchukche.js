function zelenchukche(input) {
    let priceZele = Number(input[0]);
    let pricePlo = Number(input[1]);
    let obshtoZele = Number(input[2]);
    let obshtoPlo = Number(input[3]);
    let obshto1 = priceZele * obshtoZele
    let obshto2 = pricePlo * obshtoPlo
    let final = obshto1 + obshto2
    let final1 = final / 1.94
    console.log(final1.toFixed(2));
}
zelenchukche([1.5,2.5,10,10]);