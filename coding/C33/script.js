function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let resultClass = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        resultClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        resultClass = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        resultClass = 'overweight';
    } else {
        category = 'Obese';
        resultClass = 'obese';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.className = `result ${resultClass}`;
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Your BMI is ${bmi}. Category: <strong>${category}</strong>`;
}