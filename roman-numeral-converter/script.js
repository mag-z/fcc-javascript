const checkNum = (num) => {
    if (num <= 0) {
        console.log("Please enter a number greater or equal to 1");
        return;
    } else if (num > 3999) {
        console.log("Please enter a number less than or equal to 3999");
        return;
    }
}

let symbol = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

const decimalToRoman = (number) => {
    let quotient;
    let result = "";
    for (let i = 12; i >= 0; i--) {
        while(number >= value[i]) {
            quotient = Math.floor(number/value[i]);
            result += symbol[i].repeat(quotient);
            number -= value[i] * quotient;
        }
    }
    return result;
}

console.log(decimalToRoman(3999));