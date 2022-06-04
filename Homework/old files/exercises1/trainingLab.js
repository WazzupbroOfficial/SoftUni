function trainingLab(input) {
    let w = Number (input[0]) * 100;
    let h = Number (input[1]) * 100 - 100;
    let h1 = (h % 70)
    let w1 = (w % 120)
    let h2 = h - h1
    let w2 = w - w1
    let realH = h2 / 70
    let realW = w2 / 120
    let final = realH * realW - 3
    console.log(final)

}
trainingLab([15,8.9])