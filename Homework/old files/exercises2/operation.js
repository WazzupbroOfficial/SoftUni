function solve(input) {
    const N1 = Number(input[0]);
    const N2 = Number(input[1]);
    const symbol = input[2];
    let result = 0
    let evenOrOdd

    if (symbol == "+" || symbol == "-" || symbol == "*") {

        if (symbol == "+") {
            result = N1 + N2
            if (result % 2 == 0) {
                evenOrOdd = "even"
            } else {
                 evenOrOdd = "odd"
            }
            console.log(`${N1} + ${N2} = ${result} - ${evenOrOdd}`);
        } else if (symbol == "-") {
            result = N1 - N2
            if (result % 2 == 0) {
                evenOrOdd = "even"
            } else {
                 evenOrOdd = "odd"
            }
            console.log(`${N1} - ${N2} = ${result} - ${evenOrOdd}`);
        } else if (symbol == "*") {
            result = N1 * N2
            if (result % 2 == 0) {
                evenOrOdd = "even"
            } else {
                 evenOrOdd = "odd"
            }
            console.log(`${N1} * ${N2} = ${result} - ${evenOrOdd}`);
        }
        
    } else if (symbol == "/") {
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            result = N1 / N2
            console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
        }
    } else if ( symbol == "%") {
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            result = N1 % N2
            console.log(`${N1} % ${N2} = ${result}`);
        }
    }

}
solve(["123","12","/"])
