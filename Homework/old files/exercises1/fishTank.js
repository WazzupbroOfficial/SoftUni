function fishTank(input) {
    let dul = Number (input[0]);
    let shir = Number (input[1]);
    let vis = Number (input[2]);
    let per = Number (input[3]);
    let obem = dul*shir*vis;
    let obemL = obem/1000
    let zaeto = input[3]*0.01
    let final = obemL*(1-zaeto)
    console.log(final)
}
fishTank(["85 ","75 ","47 ","17 "])