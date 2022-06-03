import React, { useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { saveBook } from '../redux/books/books';

export default function Form() {
  const [inputValues, setInputValues] = useState({
    bookTitle: '',
    bookAuthor: '',
    category: '',
  });

  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { bookTitle, bookAuthor, category } = inputValues;
    const book = {
      id,
      bookTitle,
      bookAuthor,
      category,
    };
    dispatch(saveBook(book));
  };

  const updateInput = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h3 className="form-head">ADD NEW BOOK</h3>
      <form onSubmit={submitBook}>
        <input
          type="text"
          placeholder="Book title"
          name="bookTitle"
          onChange={updateInput}
        />
        <input
          type="text"
          placeholder="Author"
          name="bookAuthor"
          onChange={updateInput}
        />
        <select name="category" onChange={updateInput}>
          <option value="" disabled selected>
            Category
          </option>
          <option value="fiction">Fiction</option>
          <option value="action">Action</option>
          <option value="fantaisy">Fantaisy</option>
          <option value="drama">Drama</option>
        </select>
        <input className="form-but" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}
