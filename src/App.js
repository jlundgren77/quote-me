import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios('https://type.fit/api/quotes');

      setQuotes(response.data);
      setQuote(response.data[Math.floor(Math.random() * response.data.length)]);
    }
    fetchData();
  }, []);
  const getQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };
  return (
    <div className="App">
      <Container className="app-wrapper">
        <h1>Insta-Quote Machine</h1>
        <h2>Who Doesn't Like a Bit of Inspiration</h2>
        <div id="quote-box">
          <h3 id="text">{quote.text}</h3>
          <p id="author">
            - <em>{quote.author}</em>
          </p>
          <Row className="d-flex justify-content-center">
            <Button
              variant="secondary"
              size="lg"
              id="new-quote"
              onClick={getQuote}
            >
              New Quote
            </Button>
          </Row>
          <Row className="d-flex justify-content-center">
            <Button variant="primary">
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                <FaTwitter className="icon" />
                tweet this quote
              </a>
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
