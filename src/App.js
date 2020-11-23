import React, { useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./App.css";

const App = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

   function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
      .then((data) => {
        setResult(data.data.items);
      });
    event.target.reset();
  }

  return (
    <div className="App">
      <div className="header">
        <div className="form-group">
          <form id="searchContainer" onSubmit={handleSubmit}>
            <input 
            className="form-control searchInput" 
            autoComplete="off" 
            type="text" 
            placeholder="Search for your book" 
            aria-label="Search" 
            id="searchInput" 
            onChange={handleChange}
            />
            <button className="button" id="button">Search</button>        
          </form>
        </div>
      </div>

      <div className="books">
      {result.map(book => (
        <Book title={book.volumeInfo.title}
              authors={(book.volumeInfo.authors && book.volumeInfo.authors.length > 1) ? 
                        book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
              image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : false} 
              link={book.volumeInfo.previewLink}
              key={book.id}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
