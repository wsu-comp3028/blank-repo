// Hello World in Germany
console.log("Hallo, Welt!");

// Hello World in Spanish
console.log("Ciao, Mondo!");

// Hello World in English
console.log("Hello, World!");

// Hello World in French
console.log("Bonjour le Monde!");

// Factorial function
function main() {
    console.log(factorial(5));
    greeting();
}

function introduce() {
    console.log("Hello, I am Nam");
}

function factorial(n) {
    if (n < 0) {
        console.log("Factorial cannot accept negative input!");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * (factorial(n - 1));
}

main();

console.log("Hello from Angelina");
