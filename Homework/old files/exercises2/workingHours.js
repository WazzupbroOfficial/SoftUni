function solve(input) {
    const time = Number(input[0]);
    const day = input[1];
    
    if (time >= 10 && time <= 18) {
        if (day === `Monday` || day === `Tuesday` || day === `Wednesday` ||
        day === `Thursday` || day === `Friday` || day === `Saturday` ) {
            console.log(`open`);
        } else {
            console.log(`closed`);
        }
     } else {
         console.log(`closed`);
     }
}
solve([18,`Saturday`])