function solve(input) {
    const days = Number(input[0]);
    const place = input[1];
    const opinion = input[2];
    const nightsSpent = days - 1
    let price = 0

    if (place == `room for one person` ) {
        price = 18 * nightsSpent


    } else if (place == `apartment`) {
        price = 25 * nightsSpent
        if (nightsSpent < 10) {
            price *= 0.70
        } else if (nightsSpent >= 10 && nightsSpent <= 15) {
            price *= 0.65
        } else {
            price *= 0.50
        }


    } else if (place == `president apartment`) {
        price = 35 * nightsSpent
        if (nightsSpent < 10) {
            price *= 0.90
        } else if (nightsSpent >= 10 && nightsSpent <= 15) {
            price *= 0.85
        } else {
            price *= 0.80
        }
    }


    if (opinion == `positive`) {
        price *= 1.25
    } else {
        price *= 0.90
    }
    console.log(price.toFixed(2));
}