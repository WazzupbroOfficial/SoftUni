function solve(n) {
    let totalSum = 0
    let k = 1
    for (let i = 1; i <= n; i++) {
        console.log(k);
        totalSum += k
        k += 2
    }
    console.log(`Sum: ${totalSum}`);
}
solve(5)