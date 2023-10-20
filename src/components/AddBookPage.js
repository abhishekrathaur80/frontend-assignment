import React, { useState } from "react";
import "./AddBookPage.css";
import { useHistory } from "react-router-dom";

const AddBookPage = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    props.onAddBook(newBook);

    setFormData({
      title: "",
      author: "",
      price: "",
      description: "",
    });

    history.push("");
  };

  return (
    <div className="add-book-page">
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBookPage;
