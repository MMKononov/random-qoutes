const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "First, solve the problem. Then, write the code. – John Johnson",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}
generateBtn.addEventListener("click", generateRandomQuote);
// generateRandomQuote(); // Generate a quote on page load
