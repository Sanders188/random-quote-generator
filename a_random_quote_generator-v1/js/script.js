/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 *  create an array of objects that contain movie quotes
***/

let quotes = [
  {
    quote: "I’m not like a regular mom, I’m a cool mom!",
    source: "Amy Poehler",
    citation: "Mean Girls",
    year: 2004,
    tag: 'comedy'
  },
  {
    quote: "This morning, he woke up dead.",
    source: "CJ or Mahalik (idk which)",
    citation: "Scary Movie 3",
    year: 2003
  },
  {
    quote: "It’s not a man purse. It’s called a satchel. Indiana Jones wears one.",
    source: "Zach Galifianakis",
    citation: "The Hangover",
    year: 2009
  },
  {
    quote: "You stink. You smell like beef and cheese. You don’t smell like Santa.",
    source: "Will Ferrell",
    citation: "Elf",
    year: 2003,
    tag: 'holiday'
  },
  {
    quote: "Doth mother know you weareth her drapes?",
    source: "Tony Stark",
    citation: "The Avengers",
    year: 2012,
    tag: 'hero'
  },
];



//console.log(quotes);

/***
 * create a function that generates a random quote
***/

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  //console.log(randomNum);

  let returnedQuote = quotes[randomNum]
  //console.log(returnedQuote)

  return returnedQuote;

}

//getRandomQuote();


/***
 * create a function that generates a string and displays content from the quotes
***/

function printQuote() {
  let printedQuote = getRandomQuote();
  let para = `
  <p class="quote">${printedQuote.quote}</p>
  <p class="source">${printedQuote.source}

  `;

  // check if the object has certain properties

  if (printedQuote.citation !== undefined) {
    para += `<span class="citation">${printedQuote.citation}</span>`;
  }

  if (printedQuote.citation !== undefined) {
    para += `<span class="year">${printedQuote.year}</span>`;

  }

  if (printedQuote.tag !== undefined) {
    para += `<span class="tag"> #${printedQuote.tag}</span>`;
  }

  para += `</p>`;

  document.getElementById('quote-box').innerHTML = para;

}

let red;
let green;
let blue;
let randomRGB;

function color() {
  number = Math.floor(Math.random() * 256);
  return number; // won't work without the return
}
//console.log('test');

function rgb() {
  red = color();
  blue = color();
  green = color();
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener('click', function onClick() {
  // 👇️ change background color
  rgb();
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  document.querySelector("body").style.backgroundColor = randomRGB;

});
