function vacationBooks(input) {
    const numberOfPages = Number (input[0]);
    const pagesPerHour = Number (input[1]);
    const days = Number (input[2]);
    let totalHours = Number (numberOfPages / pagesPerHour)
    const joro = Number (totalHours/days)
    console.log(joro)
}
vacationBooks([212,20,2])