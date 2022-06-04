function solve(index) {
    let name = (index[0]);
    let projects = Number (index[1])
    let hours = Number (index[1] * 3)
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)

}
solve(["Daniel","4"])