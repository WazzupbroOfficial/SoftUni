function solve(input) {
    let index = 0;
    let tournamentsParticipatedCount = Number(input[index++]);
    let startingPoints = Number(input[index++]);
    let position = ""
    let avarage = 0
    let winCounter = 0
    let percent = 0

    // W = 2000, F = 1200, SF = 750

    for (let i = 0; i < tournamentsParticipatedCount; i++) {
        
        position = input[index++]
        
        if (position === "W") {
            startingPoints += 2000
            avarage += 2000
            winCounter++
        } else if ( position === "F") {
            startingPoints += 1200
            avarage += 1200
        } else {
            startingPoints += 720
            avarage += 720
        }
        
    }
    avarage /= tournamentsParticipatedCount
    percent = (winCounter / tournamentsParticipatedCount) * 100 
    avarage = Math.trunc(avarage)
    
    console.log(`Final points: ${startingPoints}\nAverage points: ${avarage}\n${percent.toFixed(2)}%`);
}

solve(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
