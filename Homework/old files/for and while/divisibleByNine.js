function solve(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let i = 0 
    let sum = 0 
    let res = ""

    for (i = firstNumber; i >= firstNumber && i <= secondNumber; i++) {
        if (i % 9 == 0) {
            //console.log(i);
            sum += i 
            res += `${i}\n`
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(res);
}
solve(["100","200"])