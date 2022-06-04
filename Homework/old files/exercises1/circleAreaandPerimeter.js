function solve(input) {
    let r = Number (input[0]);
    let S = (Math.PI*(r*r))
    let P = 2*Math.PI*r
    console.log(S.toFixed(2));
    console.log(P.toFixed(2));
}
solve([3])