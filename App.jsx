import { useState } from 'react';

function App() {
  
  const [quotes, setQuotes] = useState([
    {
      quote:
        "Ser dike azad dibe, azad dibe bedew dibe, bedew dibe tê hezkirin",
      name: "Serok Tolhildan",
    },
  ]);
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  const addQuote = (event) => {
    event.preventDefault();
    setQuotes((quotes) => [{name, quote} , ...quotes]);
    setQuote("");
    setName("");
  };
  
  return (
    <div className="App">
      <h1>Share your favourite quote </h1>
    
      <form onSubmit={addQuote}>
        <textarea 
          onChange={(event) => setQuotes(event.target.value)} 
          style={{ placeholder:"add your quote" }}
          value={quote}
         /> 
        <input 
          onChange={(event) => setName(event.target.value)} 
          style={{ placeholder:"Author" }}
          value= {name} 
          />
        <button type="submit" >
              "Add Quote"
        </button>
      </form>

      <h1>Favourite Quotes:</h1>
        {quotes.map((quote) => {
          return (
            <div className="quote" key={quote.quote}>
                <p>
                    {quote.quote}
                </p>
                - <span>
                  {quote.name}
                 </span>
              </div>
            );
        })}
      </div>
  );
}

export default App;
