const quotes = [
  {
    quote: "우리는 항상 젊음을 위해 미래를 개발할 수는 없지만, 미래를 위해 우리의 젊음을 개발할 수는 있다.",
    author: "- Franklin D. Roosevelt -",
  },
  {
    quote: "자 드가자 하는거지. 악으로 깡으로 버텨라",
    author: "- Lalo -",
  },
  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
