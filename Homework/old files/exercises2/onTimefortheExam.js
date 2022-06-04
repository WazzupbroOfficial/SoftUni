function solve(input) {
    const examStartHour = Number(input[0]);
    const examStartMinute = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinute = Number(input[3]);

    const examStartInWholeMinutes = (examStartHour*60) + examStartMinute
    const arrivalInWholeMinutes = (arrivalHour*60) + arrivalMinute
    const earlyBy = examStartInWholeMinutes - arrivalInWholeMinutes
    const lateBy = arrivalInWholeMinutes - examStartInWholeMinutes

    if (arrivalHour > examStartHour || arrivalHour == examStartHour && arrivalMinute > examStartMinute) {
        console.log("Late");
        if (lateBy < 60) {
            if (lateBy >= 0 && lateBy <= 9) {
            console.log(`${lateBy} minutes after the start`);
            } else {
                console.log(`${lateBy} minutes after the start`);
            } 
        } else {
            let hours = lateBy / 60
            hours = Math.floor(hours)
            let minutes = lateBy % 60

            if (minutes >=0 && minutes <= 9) {
            console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
        
    } else if (examStartInWholeMinutes == arrivalInWholeMinutes || earlyBy <= 30 ) {
        console.log(`On Time`);
        if (earlyBy < 60) {
            if (earlyBy >= 0 && earlyBy <= 9) {
            console.log(`${earlyBy} minutes before the start`);
            } else {
                console.log(`${earlyBy} minutes before the start`);
            } 
        } else {
            let hours = earlyBy / 60
            hours = Math.floor(hours)
            let minutes = earlyBy % 60

            if (minutes >=0 && minutes <= 9) {
            console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    } else {
        console.log(`Early`);
        if (earlyBy < 60) {
            if (earlyBy >= 0 && earlyBy <= 9) {
            console.log(`${earlyBy} minutes before the start`);
            } else {
                console.log(`${earlyBy} minutes before the start`);
            } 
        } else {
            let hours = earlyBy / 60
            hours = Math.floor(hours)
            let minutes = earlyBy % 60

            if (minutes >=0 && minutes <= 9) {
            console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}
solve([14,00,13,55])