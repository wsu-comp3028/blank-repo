
// Factorial function
function main() {
    console.log(factorial(5));
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