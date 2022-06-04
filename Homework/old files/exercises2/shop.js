function solve(input) {
    const product = input[0];
    const city = input[1];
    const amount = Number(input[2]);

    switch (city) {
        case "Varna": switch (product) {
            case "coffee": console.log(0.45*amount); break
            case "water": console.log(0.70*amount); break
            case "beer": console.log(1.10*amount); break
            case "sweets": console.log(1.35*amount); break
            case "peanuts": console.log(1.55*amount); break
        } break
        case "Sofia": switch (product) {
            case "coffee": console.log(0.50*amount); break
            case "water": console.log(0.80*amount); break
            case "beer": console.log(1.20*amount); break
            case "sweets": console.log(1.45*amount); break
            case "peanuts": console.log(1.60*amount); break
        } break
        case "Plovdiv": switch (product) {
            case "coffee": console.log(0.40*amount); break
            case "water": console.log(0.70*amount); break
            case "beer": console.log(1.15*amount); break
            case "sweets": console.log(1.30*amount); break
            case "peanuts": console.log(1.50*amount); break
        } break
    }
}
solve([`peanuts`,`Sofia`,2])