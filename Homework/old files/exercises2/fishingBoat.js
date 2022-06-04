function solve(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);
    let price = 0

    if (season == "Spring") {
        price = 3000
    } else if (season == "Summer" || season == "Autumn") {
        price = 4200
    } else if (season == "Winter") {
        price = 2600
    }

    if (fishermen <= 6) {
        price *= 0.90
    } else if (fishermen >= 7 && fishermen <= 11) { 
        price *= 0.85
    } else if (fishermen >= 12) {
        price *= 0.75
    }

    if (season != "Autumn")
        if (fishermen % 2 == 0) {
        price *= 0.95
    }
    let moneyLeft1 = budget - price
    let moneyLeft = Math.abs(moneyLeft1)

    if (budget >= price) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`);
    }
}