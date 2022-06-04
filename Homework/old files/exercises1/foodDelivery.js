function foodDelivery(input) {
    let numChick = Number (input[0]);
    let numFish = Number (input[1]);
    let numVeggie = Number (input[2]);
    let priceChick = input[0] * 10.35;
    let priceFish = input[1] * 12.40;
    let priceVeggie = input[2] * 8.15;
    let priceTotal = priceChick + priceFish + priceVeggie;
    let priceDessert = priceTotal * 0.20;
    let final = priceDessert + priceTotal + 2.50
    console.log(final)

}
foodDelivery([2,4,3])