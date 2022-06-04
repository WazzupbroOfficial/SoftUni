function solve(input) {
    let index = 0
    let command = input[index++]
    let total = 0

    while (command != "NoMoreMoney") {
        if (Number(command) <= 0) {
            break;
        }
        console.log(`Increase: ${command}`);
        total += Number(command)
        command = input[index++]
    }
    console.log(`Total: ${total}`);
}

solve(["120",
"45.55",
"-150"])

