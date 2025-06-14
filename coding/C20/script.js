const sentences = [ //tsp shit
    "The quick brown fox jumps over the lazy dog.",
    "I legally hand over all my properties to this page's developer.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends."
];

let timer;
let startTime;

const sentenceEl = document.getElementById('sentence');
const inputEl = document.getElementById('input');
const startBtn = document.getElementById('startBtn');
const finishBtn = document.getElementById('finishBtn');
const restartBtn = document.getElementById('restartBtn');
const resultsEl = document.getElementById('results');
const timerEl = document.getElementById('timer');

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function startGame() {
    const sentence = getRandomSentence();
    sentenceEl.textContent = sentence;
    inputEl.value = '';
    inputEl.disabled = false;
    inputEl.focus();
    finishBtn.disabled = false;
    resultsEl.textContent = '';
    timerEl.textContent = '0.00s';
    startTime = new Date();

    timer = setInterval(() => {
        const elapsed = ((new Date() - startTime) / 1000).toFixed(2);
        timerEl.textContent = elapsed + 's';
    }, 100);
}

function finishGame() { //will somebody even click this btn idk man
    clearInterval(timer);
    finishBtn.disabled = true;
    restartBtn.style.display = 'inline-block';

    const typedText = inputEl.value;
    const originalText = sentenceEl.textContent;
    const timeTaken = ((new Date() - startTime) / 1000).toFixed(2);
    const wordsTyped = typedText.trim().split(' ').length;
    const wpm = ((wordsTyped / timeTaken) * 60).toFixed(2);

    let correctWords = 0;
    const typedWords = typedText.split(' ');
    const originalWords = originalText.split(' ');

    originalWords.forEach((word, index) => {
        if (typedWords[index] === word) {
            correctWords++;
        }
    });

    const accuracy = ((correctWords / originalWords.length) * 100).toFixed(2);
    resultsEl.innerHTML = `Time: ${timeTaken}s<br>WPM: ${wpm}<br>Accuracy: ${accuracy}%`;

    highlightErrors(originalWords, typedWords);
}

function highlightErrors(originalWords, typedWords) { //ayye you better fucking give marks for this man it took too long to make this
    const highlightedSentence = originalWords.map((word, index) => {
        return typedWords[index] === word ? word : `<span class="highlight">${word}</span>`;
    }).join(' ');

    sentenceEl.innerHTML = highlightedSentence;
}

function restartGame() { // this dosent fucking work 
    inputEl.value = '';
    resultsEl.textContent = '';
    timerEl.textContent = '0.00s';
    restartBtn.style.display = 'none';
    finishBtn.disabled = false;
    startBtn.disabled = false;
}

startBtn.addEventListener('click', () => {
    startGame();
    startBtn.disabled = true;
    restartBtn.style.display = 'none'; 
});

finishBtn.addEventListener('click', finishGame);
inputEl.addEventListener('input', () => {
    if (inputEl.value.trim() === sentenceEl.textContent) {
        finishGame();
    }
});
restartBtn.addEventListener('click', restartGame);