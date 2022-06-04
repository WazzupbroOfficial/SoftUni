function calcDepo(input) {
    let depSum = Number (input[0]);
    let depTime = Number (input[1]);
    let depLih = Number (input[2]);
    let lih = Number (depSum * depLih) / 100
    let lih1mes = Number (lih / 12)
    let sum = (depSum + depTime * lih1mes)


    console.log(sum)
}
calcDepo([200,3,5.7])