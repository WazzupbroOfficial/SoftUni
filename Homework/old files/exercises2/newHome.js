function solve(input) {
    const flower = input[0]
    const amountOfFlowers = Number(input[1]);
    const budget = Number(input[2]);
    let totalSum = 0

    if (flower == `Roses`) {
        if (amountOfFlowers > 80) {
            totalSum = amountOfFlowers * 5
            totalSum *= 0.90
        } else {
            totalSum = amountOfFlowers * 5
        }
    } else if (flower == `Dahlias`) {
        if (amountOfFlowers > 90) {
            totalSum = amountOfFlowers * 3.8
            totalSum *= 0.85
        } else {totalSum = amountOfFlowers * 3.8
        }
    } else if (flower == `Tulips`) {
        if (amountOfFlowers > 80) {
            totalSum = amountOfFlowers * 2.8
            totalSum *= 0.85
        } else {totalSum = amountOfFlowers * 2.8
        }
    } else if (flower == `Narcissus`) {
        if (amountOfFlowers < 120) {
            totalSum = amountOfFlowers * 3
            totalSum *= 1.15
        } else {totalSum = amountOfFlowers * 3
        }
    } else if (flower == `Gladiolus`) {
        if (amountOfFlowers < 80) {
            totalSum = amountOfFlowers * 2.5
            totalSum *= 1.20
        } else {totalSum = amountOfFlowers * 2.5
        }
    }

    let moneyLeft1 = budget - totalSum
    let moneyLeft = Math.abs(moneyLeft1)

    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${amountOfFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
    }
}
solve(["Roses",
"55",
"250"])


