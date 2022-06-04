function solve(input) {
    let index = 0
    let n = Number(input[index++]);
    let numbers = 1

    while(n >= numbers) {
        console.log(numbers);
        numbers = numbers*2+1
    }

}

solve(["31"])