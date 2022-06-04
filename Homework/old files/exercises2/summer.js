function solve(input) {
    const timeOfDay = input[1]
    const degrees = Number(input[0])

    if (timeOfDay == `Morning`) {
        if (degrees >= 10 && degrees <= 18) {
            console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
        } else if (degrees > 18 && degrees <= 24) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees >= 25) {
            console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
        }
    } else if (timeOfDay == `Afternoon`) {
        if (degrees >= 10 && degrees <= 18) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees > 18 && degrees <= 24) {
            console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
        } else if (degrees >= 25) {
            console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
        }
    } else if (timeOfDay == `Evening`) {
        if (degrees >= 10 && degrees <= 18) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees > 18 && degrees <= 24) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        } else if (degrees >= 25) {
            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        }
    }
}