import React from "react";
import { useParams } from "react-router-dom";
import "./BookPage.css";

const BookPage = (props) => {
  const { id } = useParams();

  const bookId = parseInt(id, 10);

  const book = props.books.find((book) => book.id === bookId);

  if (!book) {
    return (
      <div className="book-page">
        <h1>Book Not Found</h1>
        <div className="back-button">
          <a href="/">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="book-page">
      <h1>{book.title}</h1>
      <p className="author">Author: {book.author}</p>
      <p className="description">Description: {book.description}</p>
      <p className="price">Price: ${book.price}</p>
      <p className="publication-date">
        Publication Date: {book.publicationDate}
      </p>
      <div className="back-button">
        <a href="/">Back to Home</a>
      </div>
    </div>
  );
};

export default BookPage;
