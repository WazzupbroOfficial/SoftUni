function solve(input) {
    let index = 0
    let weight = Number(input[index++])
    let word = input[index++]
    let roadkm = Number(input[index++])
    let price = 0

    if (word === "standard") {
        if (weight < 1) {
            price = 0.03 * roadkm
        } else if (weight >= 1 && weight < 10 ) {
            price = 0.05 * roadkm
        } else if (weight >= 10 && weight < 40 ) {
            price = 0.10 * roadkm
        } else if (weight >= 40 && weight < 90 ) {
            price = 0.15 * roadkm
        } else if (weight >= 90 && weight < 150 ) {
            price = 0.20 * roadkm
        }
    } else {
        let discountPerKm = 0
        if (weight < 1) {
            
            discountPerKm = 0.03 * 0.80
            discountPerKm = weight * discountPerKm
            discountPerKm = discountPerKm * roadkm
            price = 0.03 * roadkm + discountPerKm
        } else if (weight >= 1 && weight < 10 ) {
            
            discountPerKm = 0.05 * 0.40
            discountPerKm = weight * discountPerKm
            discountPerKm = discountPerKm * roadkm
            price = 0.05 * roadkm + discountPerKm
        } else if (weight >= 10 && weight < 40 ) {
            
            discountPerKm = 0.10 * 0.05
            discountPerKm = weight * discountPerKm
            discountPerKm = discountPerKm * roadkm
            price = 0.10 * roadkm + discountPerKm
        } else if (weight >= 40 && weight < 90 ) {
            
            discountPerKm = 0.15 * 0.02
            discountPerKm = weight * discountPerKm
            discountPerKm = discountPerKm * roadkm
            price = 0.15 * roadkm + discountPerKm
        } else if (weight >= 90 && weight < 150 ) {
            
            discountPerKm = 0.20 * 0.01
            discountPerKm = weight * discountPerKm
            discountPerKm = discountPerKm * roadkm
            price = 0.20 * roadkm + discountPerKm
        }
    }
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

solve([1.5,
"standard",
100,
])