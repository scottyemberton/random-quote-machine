import { useState, useEffect, useRef } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomElement = (array: any[]) => array[Math.floor(Math.random() * array.length)];

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomElement(quotes));
  const [randomColor, setRandomColor] = useState<string>(getRandomElement([
    "#664D00", "#6E2A0C", "#691312", "#5D0933", "#291938",
    "#042D3A", "#12403C", "#475200",
  ]));
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = randomColor;
  }, [randomColor]);

  const changeQuote = () => {
    setQuote(getRandomElement(quotes));
    setRandomColor(getRandomElement([
      "#664D00", "#6E2A0C", "#691312", "#5D0933", "#291938",
      "#042D3A", "#12403C", "#475200",
    ]));
  };

  return (
    <div id="quote-box">
      <div className="quote-content">
        <h2 id="text" ref={textRef}>
          <FaQuoteLeft size="20" className="quote-icon" />
          {quote.quote}
          <FaQuoteRight size="20" className="quote-icon" />
        </h2>
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a 
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote.quote}" ${quote.author}`)}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <button id="new-quote" onClick={changeQuote}>New</button>
      </div>
    </div>
  );
}

export default App;
