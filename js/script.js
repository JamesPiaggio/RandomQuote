// Quotes
const quotes = [
  {
    category: "Life",
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
  {
    category: "Movie",
    quote: "You gonna eat your tots?",
    source: "Napoleon Dynamite",
    citation: "Napoleon Dynamite",
    year: 2004
  },
  {
    category: "Life",
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison", 
  },
  {
    category: "Music",
    quote: "Then, as it was, then again it will be <br> And though the course may change sometimes <br> Rivers always reach the sea",
    source: "Led Zepplin",
    citation: "Ten Years Gone",
    year: 1975
  },
  {
    category: "Television",
    quote: "You miss 100% of the shot you don't take. -Wayne Gretzky",
    source: "Michael Scott",
    citation: "The Office Season 5, Episode 23: 'Michael Scott Paper Company'",
    year: 2009
  }
];

//getRandomQuote function
const getRandomQuote = () => {
    //Random number generator
    const randomNum = Math.floor(Math.random() * quotes.length);
    //Grabs quote from random array position
    return quotes[randomNum];
}

//printQuote Function
const printQuote = () => {
    //Stores random quote object
    const randomQuote = getRandomQuote();
    //Stores HTML from webpage
    const quoteDiv = document.getElementById("quote-box");
    //Removes existing HTML
    quoteDiv.innerHTML = ``;
    //Adds category and quote
    quoteDiv.innerHTML = `<h2>${randomQuote.category}</h2><p class='quote'>${randomQuote.quote}</p>`;
    //If statements to add source, citation, and year
    if (randomQuote.citation && randomQuote.year) {
        quoteDiv.innerHTML += `<p class='source'>${randomQuote.source}<span class='citation'>${randomQuote.citation}</span><span class='year'>${randomQuote.year}</span></p>`;
    } else if (randomQuote.citation) {
        quoteDiv.innerHTML += `<p class='source'>${randomQuote.source}<span class='citation'>${randomQuote.citation}</span>`;
    } else if (randomQuote.year) {
        quoteDiv.innerHTML += `<p class='source'>${randomQuote.source}<span class='year'>${randomQuote.year}</span>`;
    } else {
        quoteDiv.innerHTML += `<p class='source'>${randomQuote.source}</p>`;
    }  
    changeBackground();
    stopInterval();
    startInterval();
}

//changeBackground function
const changeBackground = () => {
    const colors = ["red", "blue", "gray", "orange", "pink", "rgb(58, 193, 98)"];
    const colorRandom = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorRandom];
    
}

let quoteInterval = setInterval(printQuote, 9000);

const startInterval = () => quoteInterval = setInterval(printQuote, 9000);


const stopInterval = () => quoteInterval = clearInterval(quoteInterval);

// Event Listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);