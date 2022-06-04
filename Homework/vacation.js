function solve(numberOfPeople,groupType,dayOfWeek) {
    let price = 0
    if (groupType == "Students") {
        if (dayOfWeek == "Friday") {
            price = 8.45
            price = numberOfPeople * price

        } else if (dayOfWeek == "Saturday") {
            price = 9.80
            price = numberOfPeople * price

        } else if (dayOfWeek == "Sunday") {
            price = 10.46
            price = numberOfPeople * price

        }
    } else if (groupType == "Business") {
        if (dayOfWeek == "Friday") {
            price = 10.90
            price = numberOfPeople * price

        } else if (dayOfWeek == "Saturday") {
            price = 15.60
            price = numberOfPeople * price

        } else if (dayOfWeek == "Sunday") {
            price = 16
            price = numberOfPeople * price
            
        }
    } else if (groupType == "Regular") {
        if (dayOfWeek == "Friday") {
            price = 15
            price = numberOfPeople * price

        } else if (dayOfWeek == "Saturday") {
            price = 20
            price = numberOfPeople * price

        } else if (dayOfWeek == "Sunday") {
            price = 22.50
            price = numberOfPeople * price
            
        }
    }

    if (groupType == "Students" && numberOfPeople >= 30) {
        price *= 0.85
    } else if (groupType == "Regular" && numberOfPeople >= 10 && numberOfPeople <= 20) {
        price *= 0.95
    } else if (groupType == "Business" && numberOfPeople >= 100) {
        price *= 0.90
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(15,
    "Regular",
    "Sunday"
    )