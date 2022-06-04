function solve(input) {
    let movieName = input[0];
    let episodeLenght = Number (input[1]);
    let breakLenght = Number (input[2]);
    let lunchBreak = (breakLenght*0.125)
    let restBreak = (breakLenght*0.25)
    let timeNeeded = (breakLenght - lunchBreak - restBreak)
    let timeLeft = (episodeLenght-timeNeeded)
    if (timeNeeded >= episodeLenght) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(Math.abs(timeLeft))} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(Math.abs(timeLeft))} more minutes.`);
    }
}
solve(["Teen Wolf","-48.645","-60.765"])

