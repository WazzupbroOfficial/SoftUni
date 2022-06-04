function solve(input) {
    const number = Number(input[0]);

    if (number >= -100 && number <= 100) {
        if (number != 0) {
            console.log(`Yes`);
        } else {
            console.log(`No`);
        }
    } else { 
        console.log(`No`);
    }
}
solve([101])