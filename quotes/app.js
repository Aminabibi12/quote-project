const cors = require('cors');
const lodash = require('lodash');
const express = require('express');
const app = express();
const fs = require('fs');

// Use CORS middleware to allow cross-origin requests
app.use(cors({
  origin: "*",
}));

// Load the quotes JSON
const quotes = require("./quotes.json");

// Register handlers for routes
app.get("/", function (request, response) {
  response.send("Welcome to the quotes server and find out some beautiful quotes :)");
});

app.get("/quotes", function(request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function(request, response) {
  response.send(lodash.sample(quotes));
});

app.get("/quotes/search", function(request, response) {
  const searchTerm = request.query.term.toLowerCase();
  const matchingQuotes = quotes.filter(quote => quote.quote.toLowerCase().includes(searchTerm) || quote.author.toLowerCase().includes(searchTerm));
  response.json(matchingQuotes);
});

module.exports = app;

