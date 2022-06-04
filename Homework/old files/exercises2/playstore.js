function toyShop(input) {
    let tripPrice =Number (input[0]);
    let amountOfPuzzles = Number (input[1]);
    let amountOfDolls = Number (input[2]);
    let amountOfBears = Number (input[3]);
    let amountOfMinions = Number (input[4]);
    let amountOfTrucks = Number (input[5]);
    let moneyAfterSale = (amountOfPuzzles * 2.60) + (amountOfDolls * 3) + (amountOfBears * 4.10) + (amountOfMinions * 8.20) + (amountOfTrucks * 2)
    let allToys = amountOfPuzzles+amountOfDolls+amountOfBears+amountOfMinions+amountOfTrucks
    let discount = 0
if (allToys >= 50) {
        discount = (moneyAfterSale*0.25)
        moneyAfterSale = moneyAfterSale - discount
    }
    let rent = (moneyAfterSale*0.10)
    let winings = moneyAfterSale - rent
    let moneyLeft = winings - tripPrice

if (winings >= tripPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
else {
        console.log(`Not enough money! ${(Math.abs(moneyLeft)).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"])
//(["40.8","20","25","30","50","10"])
//(["350","8","2","5","5","1"])


