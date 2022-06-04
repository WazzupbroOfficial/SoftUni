function solve(number) {
    for (let row = 1; row <= number; row++) {
        let printline = ``
        for (let cow = 1; cow <= row; cow++) {
            printline += `${row} `
        
        }
        console.log(printline);
    }
} solve(5)