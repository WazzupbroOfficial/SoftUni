function solve(input) {
    let animal = input[0];

    switch (animal) {
        case `dog`: console.log(`mammal`); break
        case `snake`:
        case `tortoise`:
        case `crocodile`: console.log(`reptile`); break
        default: console.log(`unknown`);
    }
}
solve([`dog`])