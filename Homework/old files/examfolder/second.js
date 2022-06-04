function solve(input) {
    let index = 0
    let shirtPrice = Number(input[index++])
    let targetPrice = Number(input[index++])

    let shorts = shirtPrice * 0.75
    let socks = shorts * 0.20
    let shoes = (shirtPrice + shorts) * 2

    let totalSum = shirtPrice+shorts+socks+shoes
    
    totalSum *= 0.85
    
    if (totalSum >= targetPrice) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        let diff = Math.abs(targetPrice - totalSum)
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }

}

solve([25,100])