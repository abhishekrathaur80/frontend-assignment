import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import BookPage from "./components/BookPage";
import AddBookPage from "./components/AddBookPage";

import "./App.css";
const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1", price: 10.99 },
    { id: 2, title: "Book 2", author: "Author 2", price: 12.99 },
    { id: 3, title: "Book 3", author: "Author 3", price: 14.99 },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  return (
    <div className="wrapper">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-book">Add Book</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage books={books} />
          </Route>
          <Route path="/book/:id">
            <BookPage books={books} />
          </Route>
          <Route path="/add-book">
            <AddBookPage onAddBook={addBook} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
