import React from 'react';
import { useState } from 'react';

function App() {
  
  const [quotes, setQuotes] = useState([]);



  
  return (
    <div className="App">
      <h1>Our beautiful form will be here:</h1>
      <form>
        <textarea onChange={setQuote} style={{ placeholder:"add your quote" }}> {quote} </textarea>
        <input onChange={setName} style={{ placeholder:"add your quote" }}> {name} </input>
      </form>
      <h1>Quotes:</h1>
      <div className="quote">
        <p>
          My biggest fear is that people will attribute fake quotes to me and
          millions of morons on the internet will believe it.
        </p>
        - <span>Albert Einstein</span>
      </div>
    </div>
  );
}

export default App;
