const kelvin = 293; 
// The weather is 293 degrees Kelvin
let celsius = kelvin - 273; 
// Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9/5) +32; 
// Fahrenheit is Celsius times 9/5 plus 32
fahrenheit = Math.floor(fahrenheit); 
// Rounded down the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100); 
// Newton is Celsius times 33/100
newton = Math.floor(newton); 
// Rounded down the Newton Temperature
console.log(`The temperature is ${newton} degrees Newton.`);