function sunny(input) {
    let degrees = Number (input[0]);
    if (degrees >= 26.00 && degrees <= 35.00){
        result = "Hot" 
    }
    else if (degrees >= 20.1 && degrees <= 25.9) {
        result = "Warm"
    }
    else if (degrees >= 15.00 && degrees <= 20.00) {
        result = "Mild"
    }
    else if (degrees >=12.00 && degrees <= 14.9) {
        result = "Cool"
    }
    else if (degrees >= 5.00 && degrees <= 11.9) {
        result = "Cold"
    }
    else {
        result = "unknown"
    }
    
    console.log(`The weather outside is: ${result}`);
}
sunny(["40"])