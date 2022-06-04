function solve(typeOfDay,age) {
    let ticketPrice = 0

    if (age >= 0 && age <= 18) {
        switch (typeOfDay) {
            case "Weekday": ticketPrice+= 12; console.log(`${ticketPrice}$`); break;
            case "Weekend": ticketPrice+= 15; console.log(`${ticketPrice}$`); break;
            case "Holiday": ticketPrice+= 5; console.log(`${ticketPrice}$`); break;
        }
    } else if (age > 18 && age <= 64) {
        switch (typeOfDay) {
            case "Weekday": ticketPrice+= 18; console.log(`${ticketPrice}$`); break;
            case "Weekend": ticketPrice+= 20; console.log(`${ticketPrice}$`); break;
            case "Holiday": ticketPrice+= 12; console.log(`${ticketPrice}$`); break;
        }
    } else if ( age > 64 && age <= 122) {
        switch (typeOfDay) {
            case "Weekday": ticketPrice+= 12; console.log(`${ticketPrice}$`); break;
            case "Weekend": ticketPrice+= 15; console.log(`${ticketPrice}$`); break;
            case "Holiday": ticketPrice+= 10; console.log(`${ticketPrice}$`); break;
        }
    } else {
        console.log("Error!");
    }
} 
solve ("Weekday", 42)