let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let sum = 0;

function showNumber() {
    msg.innerText = `Your number is ${sum}`;
    msgContainer.classList.remove("hide");
}

function checkInput() {
    let var1 = document.getElementById('input1').value;
    let var2 = document.getElementById('input2').value;
    let var3 = document.getElementById('input3').value;
    let var4 = document.getElementById('input4').value;
    let var5 = document.getElementById('input5').value;
    let var6 = document.getElementById('input6').value;
    let var7 = document.getElementById('input7').value;
    
    if (var1 !== "" && var2 !== "" && var3 !== "" && var4 !== "" && var5 !== "" && var6 !== "" && var7 !== "") {
        calculateSum(var1, var2, var3, var4, var5, var6, var7);
        showNumber();
    }
}

function calculateSum(...values) {
    const arr = [1, 2, 4, 8, 16, 32, 64];
    sum = 0; // Reset sum to ensure correct calculation each time

    values.forEach((value, index) => {
        if (value.toLowerCase() === 'yes' || value.toLowerCase() === 'y') {
            sum += arr[index];
        }
        // No need to handle 'no' explicitly as it's default
    });

    console.log(sum);
}

// Event listener to handle changes in inputs
window.onload = function () {
    for (let i = 1; i <= 7; i++) {
        document.getElementById('input' + i).addEventListener('input', checkInput);
    }
};

// Event listener for the new game button
if (newGameBtn) {
    newGameBtn.addEventListener('click', () => {
        sum = 0; // Reset sum on new game
        msgContainer.classList.add("hide");
        // Clear inputs
        for (let i = 1; i <= 7; i++) {
            document.getElementById('input' + i).value = "";
        }
    });
}

const newGame = () => {
    msgContainer.classList.add("hide");
};

// Adding event listener to newGameBtn
newGameBtn.addEventListener("click", newGame);
