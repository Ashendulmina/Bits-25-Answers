//so since u ppl didnt mention using an api i dint
const quotes = [ //ayye u didnt say we have to put real quotes so enjoy this imaginary bullsit
    { text: "If you want to shine like the sun, You have to burn like it.", author: "Adolf Hitler" },
    { text: "When math starts to f*ck itself, its not math its your prespective.", author: "Ashen Dulmina" }, //this is me btw
    { text: "That's way bigger than my husbands..", author: "She [thats what she said]" },
    { text: "Death is the solution to all problems. No man—no problem..", author: "Joseph Stalin" },
    { text: "I am not a dictator. I am a man of the people.", author: "Saddam Hussein" },
    { text: "Political power grows out of the barrel of a gun", author: "Mao Zedong" },
    { text: "The victor will never be asked if he told the truth.", author: "Adolf Hitler" },
    { text: "Revolution is not an apple that falls when it is ripe. You have to make it fall.", author: "Fidel Castro" },
    { text: "I am not a dictator. I am a revolutionary.", author: "Muammar Gaddafi" },
    { text: "The way to crush the bourgeoisie is to grind them between the millstones of taxation and inflation", author: "Vladimir Lenin" },
    { text: "To be independent is to be a communist.", author: "Pol Pot" },
    { text: "The truth is that men are tired of liberty.", author: "Benito Mussolini" },
    { text: "A revolution is a struggle to the death between the future and the past", author: "Fidel Castro" },
    { text: "Best way to resolve anger is taking it out on someody else.", author: "Ashen Dulmina" } // this is also me btw 100precent proven way of quick anger relief
];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const button = document.getElementById('generate-button');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[randomIndex];

    quoteContainer.style.opacity = 0;
    setTimeout(() => {
        quoteText.textContent = text;
        authorText.textContent = `- ${author}`;
        quoteContainer.style.opacity = 1; 
    }, 500); //couldnt find the perfect time for this
});