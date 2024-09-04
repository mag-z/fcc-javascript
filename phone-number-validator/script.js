const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("result-div");

// create phone pattern regex
const countryCode = ;
const areaCode = ;
const localCode = ;
const phoneRegex = `${countryCode}${areaCode}${localCode}`;

const validatePhoneNumber = () => {
    // check if empty input
    if (userInput === "") {
        alert('Please provide a phone number');
        return;
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