function time() {
    const day = new Date().toLocaleDateString("en", { weekday: "long" });
console.log(`Today is: ${day}`);

const time = new Date().toLocaleTimeString("en");
console.log(`Current time is: ${time}`);
}
time()