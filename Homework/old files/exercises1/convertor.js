function convertor(input) {
    let rad = Number (input[0])
    let grad = Number (rad * 180 / Math.PI )
    console.log(grad)
}   
convertor(["3.1416"])