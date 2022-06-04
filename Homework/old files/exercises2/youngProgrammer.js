function solve(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let price = budget
    let destination
    let site

    if (budget <= 100) {
        destination = "Bulgaria"

        if (season == "summer") {
            price *= 0.70
            site = "Camp"
        } else if (season == "winter") {
            price *= 0.30
            site = "Hotel"
        }

    } else if (budget <= 1000) {
        destination = "Balkans"

        if (season == "summer") {
            price *= 0.60
            site = "Camp"
        } else if (season == "winter") {
            price *= 0.20
            site = "Hotel"
        }

    } else if (budget > 1000) {
        destination = "Europe"
        price *= 0.10
        site = "Hotel"
        
    }
    let moneyLeft = budget - price
    moneyLeft = Math.abs(moneyLeft)
    console.log(`Somewhere in ${destination}`);
    console.log(`${site} - ${moneyLeft.toFixed(2)}`);
}

solve(["1500", "summer"])