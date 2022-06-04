function solve(input) {

    let index = 0;
    let processorPrice = Number(input[index++]);
    let videocardPrice = Number(input[index++]);
    let ramPrice = Number(input[index++]);
    let ramAmount = Number(input[index++]);
    let discountPercentage = Number(input[index++]);

    //in leva

    processorPrice *= 1.57
    videocardPrice *= 1.57
    ramPrice *= 1.57

    let totalRam = ramPrice * ramAmount

    processorPrice = processorPrice - (processorPrice*discountPercentage)
    videocardPrice = videocardPrice - (videocardPrice*discountPercentage)
    

    let finalPrice = processorPrice+videocardPrice+totalRam

    console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`);

}

solve([500,
    200,
    80,
    2,
    0.05,
    ])