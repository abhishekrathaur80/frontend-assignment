import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  const [filteredBooks, setFilteredBooks] = useState(props.books);
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = props.books.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [search, props.books]);

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="book-list">
        {paginatedBooks.map((book) => (
          <li key={book.id}>
            <div>
              <h2>
                {" "}
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </h2>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous Page
        </button>
        <span> Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={endIndex >= filteredBooks.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
