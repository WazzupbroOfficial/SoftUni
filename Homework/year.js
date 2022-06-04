function solve(first,last) {
    let sum = 0
    let printline = ``
    for (let i = first;i <= last; i++) {
        //console.log(i);
        sum += i
        printline += `${i} `
    }
    console.log(printline);
    console.log(`Sum: ${sum}`);
}
solve(5,10)