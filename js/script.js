/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Quotes
var quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
  },
  {
    quote: "You gonna eat your tots?",
    source: "Napoleon Dynamite",
    citation: "Napoleon Dynamite",
    year: 2004
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison"
  },
  {
    quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
    source: "Henry David Thoreau"
  },
  {
    quote: "You miss 100% of the shot you don't take. -Wayne Gretzky",
    source: "Michael Scott",
    citation: "The Office Season 5, Episode 23: 'Michael Scott Paper Company'",
    year: 2009
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  var randomNum = Math.floor(Math.random() * quotes.length) + 1; //Random number generator
  return quotes[randomNum];  //Grabs quote from random array position    
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);