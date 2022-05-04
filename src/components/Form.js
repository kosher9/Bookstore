import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function Form() {
  const [inputValues, setInputValues] = useState({
    bookTitle: '',
    bookAuthor: '',
  });

  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { booktitle, category } = inputValues;
    const book = { id, booktitle, category };
    dispatch(addBook(book));
  };

  const updateInput = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={submitBook}>
      <input
        type="text"
        placeholder="Title"
        name="bookTitle"
        onChange={updateInput}
      />
      <input
        type="text"
        placeholder="Author"
        name="bookAuthor"
        onChange={updateInput}
      />
      <button type="submit" value="Add Book">
        Add Book
      </button>
    </form>
  );
}
