function solve(input) {
    let index = 0
    let numberOfDays = Number(input[index++])
    
    let amount = 0
    let degrees = 0
    let totalAmount = 0
    let totalDegrees = 0

    for (let i = 0; i< numberOfDays; i++) {
        
        amount = Number(input[index++])
        degrees = Number(input[index++])
        //console.log(amount,degrees);
        totalAmount += amount
        //totalDegrees = amount * degrees
        //console.log(degrees);
        //console.log(totalDegrees);
        totalDegrees = totalDegrees + degrees * amount
        //console.log(totalDegrees);
    }
    
    let average = totalDegrees / totalAmount

    console.log(`Liter: ${totalAmount.toFixed(2)}`);
    console.log(`Degrees: ${average.toFixed(2)}`);
    
    if (average < 38) {
        console.log(`Not good, you should baking!`);
    } else if (average >= 38 && average <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
        
        

}

solve([3,
    100,
    45,
    50,
    55,
    150,
    36,
    ])