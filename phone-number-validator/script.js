const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("result-div");

// create phone pattern regex
const countryCode = "(1\\s?)?";
const areaCode = "(?:[0-9]{3}|\\([0-9]{3}\\))";
const dashSpace = "[-\\s]?"
const localCode = "[0-9]{3}[-\\s]?[0-9]{4}";
const phoneRegex = new RegExp(`^${countryCode}${areaCode}${dashSpace}${localCode}$`);

const validatePhoneNumber = (str) => {
    // check if empty input
    if (str === "") {
        alert('Please provide a phone number');
        return;
    }
    if (phoneRegex.test(str)) {
        console.log("Valid US number: ")
    } else {
        console.log("Invalid US number: ")
    }
}

const displayResult = () => {
    // clear input
    // append <p class="result-text"></p> to resultDiv in the front
}

const clearResult = () => {
    
}


checkBtn.addEventListener()
clearBtn.addEventListener()