function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (display.innerText.length < 12) {
        if (value === '.' && display.innerText.includes('.')) return; 

        if (display.innerText === '0') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function backspace() {
    const display = document.getElementById('display');

    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');

    try {
        const result = eval(display.innerText.replace('×', '*').replace('÷', '/'));

        if (result.toString().length > 12) {
            display.innerText = 'Overflow';
        } else {
            display.innerText = result;
        }
    } catch {
        display.innerText = 'Error';
    }
}