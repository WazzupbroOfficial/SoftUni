function solve(input) {
    let index = 0
    let targetForTheDay = Number(input[index++]);
    let command = ""
    let text = ""
    let income = 0

    while (command !== "closed") {
        command = input[index++]
        if (command === "haircut") {
                text = input[index++]
                if (text === "ladies") {
                    income += 20
                } else if (text === "mens") {
                    income += 15
                } else if (text === "kids") {
                    income += 10
                }
        } else if (command === "color") {
                text = input[index++]
                if (text === "touch up") {
                    income+= 20
                } else if (text === "full color") {
                    income += 30
                }
        } else if (command === undefined) {
            break;
        }
    }
    //console.log(income);
    if (targetForTheDay <= income) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${income}lv.`);
    } else {
        let diff = Math.abs(targetForTheDay - income)
        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${income}lv.`);
    }
}

solve([50,
    "color",
    "full color",
    "haircut",
    "ladies", 
    ])