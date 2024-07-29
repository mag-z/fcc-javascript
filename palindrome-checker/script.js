const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
    if (input.length == 0) {
        alert("Please input a value");
        return;
    }
    
    let inputStr = String(input).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();   
    // let inputReversed = "";
    // for( i = inputStr.length -1; i>=0; i--  ) {
    //     inputReversed += inputStr[i];
    // }
    let inputReversed = inputStr.split("").reverse().join("");

    console.log(inputStr);
    console.log(inputReversed);

    const message = (inputReversed === inputStr) ? `<span>${input}</span> is a palindrome` : `<span>${input}</span> is not a palindrome`

    result.innerHTML = message;
    result.classList.remove("hide");

    if (inputReversed === inputStr) {
        result.classList.remove("no");
        result.classList.add("yes");
    } else {
        result.classList.remove("yes");
        result.classList.add("no");
    }
}

checkBtn.addEventListener("click", () => checkPalindrome(textInput.value));

// clean previous input
textInput.addEventListener("focus", () => {
    textInput.value = "";
})

