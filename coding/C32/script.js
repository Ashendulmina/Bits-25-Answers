const colorInput = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox'); //BOYZ LIKE IT PINK ()

colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    colorBox.style.backgroundColor = selectedColor;
    colorBox.textContent = selectedColor;
    colorInput.style.backgroundColor = selectedColor;
});

colorInput.style.backgroundColor = colorInput.value;

document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText(colorBox.textContent).then(() => {
        alert('Color code copied: ' + colorBox.textContent);
    });
});