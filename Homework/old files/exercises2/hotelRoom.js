function solve(input) {
    const month = input[0];
    const nightsToBeSpent = Number(input[1]);
    let studio
    let apartment

    /* Май и октомври	            Юни и септември	                Юли и август
       Студио – 50 лв./нощувка	    Студио – 75.20 лв./нощувка	    Студио – 76 лв./нощувка
       Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
    */

    if (month == "May" || month == "October") {
        studio = 50*nightsToBeSpent
        apartment = 65*nightsToBeSpent
        if (nightsToBeSpent > 7 && nightsToBeSpent < 14) {
            studio *= 0.95
        } else if (nightsToBeSpent > 14) {
            studio *= 0.70
        }
    } else if (month == "June" || month == "September") {
        studio = 75.20*nightsToBeSpent
        apartment = 68.70*nightsToBeSpent
        if (nightsToBeSpent > 14) {
            studio *= 0.80
        }
    } else if (month == "July" || month == "August") {
        studio = 76*nightsToBeSpent
        apartment = 77*nightsToBeSpent
    }

    if (nightsToBeSpent > 14) {
        apartment *= 0.90
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
solve(["May",15])