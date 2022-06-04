function solve(number) {
    let result = 0
    for (let i = 1; i <= 10; i++) {
        let printline = ``
        result = number * i
        printline = `${number} X ${i} = ${result}`
        console.log(printline);
    }
}
solve(2)