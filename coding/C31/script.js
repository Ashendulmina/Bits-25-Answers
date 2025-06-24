document.getElementById('checkButton').addEventListener('click', function() {
    const input = document.getElementById('textInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (input === '') {
        resultDiv.textContent = 'Please enter some text.';
    } else {
        const sanitizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, ''); //me redde...
        const reversedInput = sanitizedInput.split('').reverse().join('');

        if (sanitizedInput === reversedInput) {
            resultDiv.textContent = 'Palindrome';
        } else {
            resultDiv.textContent = 'Not a Palindrome';
        }
    }

    resultDiv.classList.remove('visible'); 
    void resultDiv.offsetWidth;
    resultDiv.classList.add('visible');
});