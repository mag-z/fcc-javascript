const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

const checkConvertInput = () => {
    const num = Number(inputNumber.value)

    if (!Number.isInteger(num) || isNaN(num)) {
        outputText.innerText = "Please enter a valid number";
        return;
    }

    if (num <= 0) {
        outputText.innerText = "Please enter a number greater or equal to 1";
        return;
    } else if (num > 3999) {
        outputText.innerText = "Please enter a number less than or equal to 3999";
        return;
    }

    decimalToRoman(num);
}

// check int "Please enter a valid number" "

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
    outputText.innerText = result;
}

convertBtn.addEventListener("click", checkConvertInput);