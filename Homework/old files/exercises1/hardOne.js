function hardOne(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let r = a
    let b = Number(input[2]);
    let h = b
    if (figure == "square") {
        let s = a*a
        console.log(s.toFixed(3));
    }
    else if (figure == "rectangle") {
        let s = a*b
        console.log(s.toFixed(3));
    }
    else if (figure == "circle") {
        let s = Math.PI*(r*r);
        console.log(s.toFixed(3));
    }
    else if (figure == "triangle") {
        let s = (a*h)/2
        console.log(s.toFixed(3));
    }
}
hardOne(["circle",5,4])