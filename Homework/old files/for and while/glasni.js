function solve(input) {
    let word = input[0];
    let stoinost = 0

    for (let i = 0 ; i < word.length ; i++) {
        //console.log(word.charAt(i));

        switch (word.charAt(i)) {
            case "a": stoinost += 1; break;
            case "e": stoinost += 2; break;
            case "o": stoinost += 4; break;
            case "i": stoinost += 3; break;
            case "u": stoinost += 5; break;
        }
    } console.log(stoinost);
    
}
solve(["bamboo"])