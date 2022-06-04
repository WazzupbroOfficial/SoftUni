function basketball(input) {
    let tax = Number (input[0]);
    let shoes = input[0]-(0.40*input[0]);
    let outfit = shoes - (0.20*shoes);
    let ball = (0.25*outfit);
    let acc = 0.20* ball
    let final = tax+shoes+outfit+ball+acc
    console.log(final);
}
basketball([365]);