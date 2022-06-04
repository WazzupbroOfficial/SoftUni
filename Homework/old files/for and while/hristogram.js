function solve(input) {

    const countOfNumbers = Number(input[0]);
    let numbersString = ""
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    

    for (let i = 1; i <= countOfNumbers; i++) {
        numbersString = String(input[i])
        //console.log(numbers);
        let nums = Number(input[i])

        if (nums < 200) {
        
            p1++
        } else if (nums >= 200 && nums < 400) {

            p2++
        } else if (nums >= 400 && nums < 600) {

            p3++
        } else if (nums >= 600 && nums < 800) {

            p4++
        } else {

            p5++
        }
    }
    //console.log(p1,p2,p3,p4,p5)

    p1 = p1 / countOfNumbers * 100
    p2 = p2 / countOfNumbers * 100
    p3 = p3 / countOfNumbers * 100
    p4 = p4 / countOfNumbers * 100
    p5 = p5 / countOfNumbers * 100

    console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%\n`);
}
solve(["20","53", "7", "56", "180", 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
