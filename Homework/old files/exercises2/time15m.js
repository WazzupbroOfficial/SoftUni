function solve(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    minutes += 15
    if (hours > 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        console.log(`${hours}:${minutes}`);
        if (minutes > 59) {
            hours += 1
            minutes = minutes % 60
            console.log(`${hours}:${minutes}`);
            if (minutes > 0 && minutes < 10) {
            console.log(`${hours}:0${minutes}`);
            }
        }        
    } 
}
solve(["23","45"])