function suppliesForSchool(input) {
    const himikalki = Number (["5.80"]);
    const markeri = Number (["7.20"]);
    const preparat = Number (["1.20"]);
    let packhim = Number (input[0]);
    let packmar = Number (input[1]);
    let packprep = Number (input[2]);
    let discount = Number (input[3]);
    let all = Number (input[0]*himikalki)+(input[1]*markeri)+(input[2]*preparat);
    let final = Number (all -(input[3]*(all/100)))
    console.log(final)

}
suppliesForSchool([2,3,4,25])