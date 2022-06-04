function solve(input) {
    const age = Number(input[0]);
    const gender = input[1];

    if (gender == `f`) {
        if (age >= 16) {
            console.log(`Ms.`);
        } else {
            console.log(`Miss`);
        }
    } else if (gender == `m`) {
        if (age >= 16) {
            console.log(`Mr.`);
        } else {
            console.log(`Master`);
        }
    }
}
solve([15,`f`])