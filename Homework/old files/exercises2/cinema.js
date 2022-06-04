function cinema(input) {
    const typeOfProjection = input[0];
    const rows = Number(input[1]);
    const columns = Number(input[2]);
    let income = 0.00

    if (typeOfProjection == "Premiere") {
        income = rows * columns * 12
        console.log(`${income.toFixed(2)} leva`);
    } else if (typeOfProjection == `Normal`) {
        income = rows * columns * 7.5
        console.log(`${income.toFixed(2)} leva`);
    } else if (typeOfProjection == `Discount`) {
        income = rows * columns * 5
        console.log(`${income.toFixed(2)} leva`);
    }

}
cinema(["Premiere","10","12"])