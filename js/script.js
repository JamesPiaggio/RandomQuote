/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// Quotes
var quotes = [
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
function getRandomQuote () {
    //Random number generator
    var randomNum = Math.floor(Math.random() * quotes.length);
    //Grabs quote from random array position
    return quotes[randomNum];
}

//printQuote Function
function printQuote () {
    //Stores random quote object
    var randomQuote = getRandomQuote();
    //Stores HTML from webpage
    var quoteDiv = document.getElementById("quote-box");
    //Removes existing HTML
    quoteDiv.innerHTML = "";
    //Adds category and quote
    quoteDiv.innerHTML = "<h2>" + randomQuote.category + "</h2><p class='quote'>" + randomQuote.quote + "</p>";
    //If statements to add source, citation, and year
    if (randomQuote.citation && randomQuote.year) {
        quoteDiv.innerHTML += "<p class='source'>" + randomQuote.source + "<span class='citation'>" + randomQuote.citation + "</span><span class='year'>" + randomQuote.year + "</span></p>";
    } else if (randomQuote.citation) {
        quoteDiv.innerHTML += "<p class='source'>" + randomQuote.source + "<span class='citation'>" + randomQuote.citation + "</span>";
    } else if (randomQuote.year) {
        quoteDiv.innerHTML += "<p class='source'>" + randomQuote.source + "<span class='year'>" + randomQuote.year + "</span>";
    } else {
        quoteDiv.innerHTML += "<p class='source'>" + randomQuote.source + "</p>"
    }  
    changeBackground();
    stopInterval();
    startInterval();
}

//changeBackground function
function changeBackground () {
    var colors = ["red", "blue", "gray", "orange", "pink", "rgb(58, 193, 98)"];
    var colorRandom = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorRandom];
    
}

var quoteInterval = setInterval(printQuote, 9000);

function startInterval () {
    quoteInterval = setInterval(printQuote, 9000);
}

function stopInterval () {
    quoteInterval = clearInterval(quoteInterval);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);