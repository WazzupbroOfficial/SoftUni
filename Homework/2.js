function solve(scn) {

    if (scn == "England" || scn == "USA") {
        console.log("English");
    } else if (scn == "Spain" || scn == "Argentina" || scn == "Mexico") {
        console.log("Spanish");
    } else {
        console.log("Unknown");
    }
}
solve("USA")