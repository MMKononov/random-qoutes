const quotes = [
  {
    qoute: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
  },
  {
    qoute:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    qoute: "Code is like humor. When you have to explain it, it’s bad",
    author: "Cory House",
  },
  {
    qoute: "In the middle of difficulty lies opportunity",
    author: "Albert Einstein",
  },
  {
    qoute: "First, solve the problem. Then, write the code",
    author: "John Johnson",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // OPTION 1: Destructuring
  // const { qoute, author: quoteAuthor } = randomQuote;
  // OPTION 2: Direct assignment
  // const qoute = randomQuote.qoute;
  // const quoteAuthor = randomQuote.author;
  // OPTION 3: Using dot notation
  quoteElement.textContent = randomQuote.qoute;
  quoteAuthorElement.textContent = randomQuote.author;
}
generateBtn.addEventListener("click", generateRandomQuote);
