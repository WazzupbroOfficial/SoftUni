function worldSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let lenghtInMeters = Number(input[1]);
    let timeInSecondsForWhich1MeterIsSwimmed = Number(input[2]);
    let waterRessistance = (lenghtInMeters/15)
    waterRessistance = Math.floor(waterRessistance) * 12.5
    let totalTimeForIvan = (lenghtInMeters*timeInSecondsForWhich1MeterIsSwimmed) + waterRessistance
    let timeIvanNeeded = currentRecord - totalTimeForIvan
    if (currentRecord <= totalTimeForIvan) {
        console.log(`No, he failed! He was ${Math.abs(timeIvanNeeded).toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${Math.abs(totalTimeForIvan).toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["10464",
"1500",
"20"])

