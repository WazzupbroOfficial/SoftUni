function solve(input) {
    const city = input[0];
    const sales = Number(input[1]);
    let commision = 0

    if(city == "Sofia") {
        if (sales >= 0 && sales <= 500) {
            console.log((sales*0.05).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales*0.07).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales*0.08).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales*0.12).toFixed(2));
        } else {console.log(`error`);}
    } else if (city == "Varna") {
        if (sales >= 0 && sales <= 500) {
            console.log((sales*0.045).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales*0.075).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales*0.1).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales*0.13).toFixed(2));
        } else console.log(`error`);
    } else if (city == "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            console.log((sales*0.055).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales*0.08).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales*0.12).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales*0.145).toFixed(2));
        } else console.log(`error`);
    } else {
        console.log("error");
    }
}
solve(["Varna",-499.99])