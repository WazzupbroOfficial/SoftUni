function shopping(input) {
    let peturBudget = Number(input[0]);
    let videocardsNumber = Number(input[1]);
    let procesorNumber = Number(input[2]);
    let ramNumber = Number(input[3]);
    let videocardPrice = 250;
    let totalVideocards = videocardsNumber*videocardPrice
    let procesorPrice = totalVideocards*0.35
    let ramPrice = totalVideocards*0.10
    let totalProcesor = procesorNumber*procesorPrice
    let totalRam = ramNumber*ramPrice
    let totalPrice = totalVideocards+totalProcesor+totalRam

    if (videocardsNumber>procesorNumber) {
        totalPrice *= 0.85
    }

    let moneyLeft = peturBudget-totalPrice

    if (totalPrice <= peturBudget) {
        console.log(`You have ${Math.abs(moneyLeft).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva more!`);
    }
}
shopping([920.45,3,1,1])
