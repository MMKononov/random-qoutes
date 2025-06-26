import quotes from "./quotes.js";
const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // OPTION 3: Using dot notation
  quoteElement.textContent = randomQuote.qoute;
  quoteAuthorElement.textContent = randomQuote.author;
}
generateBtn.addEventListener("click", generateRandomQuote);

// OPTION 1: Destructuring
// const { qoute, author: quoteAuthor } = randomQuote;
// OPTION 2: Direct assignment
// const qoute = randomQuote.qoute;
// const quoteAuthor = randomQuote.author;
