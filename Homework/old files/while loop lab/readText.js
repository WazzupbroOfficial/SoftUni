function solve(input) {
    let index = 0
    let intialNumber = Number(input[index++]);
    let adder = Number(input[index++])
    let total = 0


    while (total < intialNumber) {
        adder = Number(input[index++])
        total += adder
    }
    console.log(total);
    
}
solve(["100",
"10",
"20",
"30",
"40"])

