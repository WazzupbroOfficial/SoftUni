function sumSeconds(input) {
    const sec = Number(input[0]);
    const sec1 = Number(input[1]);
    const sec2 = Number(input[2]);
    let totalTime = sec + sec1 + sec2
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds(["50","50","49"])