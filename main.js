import { quotes } from "./quotes.mjs";
let button = document.querySelector(".btn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

function quoteGenerator() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = `-${quotes[random].author}`;
}

button.addEventListener("click", quoteGenerator);
