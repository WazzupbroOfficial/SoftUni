function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let outfitPriceForAnExtra = Number(input[2]);
    let decor = budget * 0.10
    if (extrasCount > 150) {
        outfitPriceForAnExtra *= 0.90
    }
    let priceForOutfits = extrasCount*outfitPriceForAnExtra
    let totalCost = decor + priceForOutfits
    let moneyLeft = budget - totalCost
    if (totalCost > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(moneyLeft).toFixed(2)} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzilaVsKong(["20000","120","55.5"])