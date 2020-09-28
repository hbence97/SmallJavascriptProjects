const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";

const randomQuote = async () => {
  const response = await fetch(RANDOM_QUOTE_API_URL);
  const data = await response.json();
  return data.content;
};

/*
function getRandomQuote() {
  return fetch(randomQuoteApiUrl)
    .then(response => response.json())
    .then(data => data.content);
}
*/

const renderNewQuote = async () => {
  const quote = await randomQuote();
  console.log(quote);
};

renderNewQuote();
