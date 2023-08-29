import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ quote: "placeholder quote", author: "placeholder author" });

  const fetchRandomQuote = () => {
    fetch("http://localhost:5000/quotes/random")
      .then((response) => response.json())
      .then(json => setQuote(json))
      .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App" >
      <p style={{paddingTop: "80px"}}>{quote.quote}</p>
      <p>{quote.author}</p>
      <button onClick={fetchRandomQuote}>Next Quote</button>
    </div>
  );
}

export default App;
