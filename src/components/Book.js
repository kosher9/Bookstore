import React from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

export default function Book(props) {
  const book = props;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="book">
      <div className="ctn-left">
        <div className="ctn-book-info">
          <h5 className="categpry">{book.category}</h5>
          <h2 className="title">{book.title}</h2>
          <h5 className="author">{book.author}</h5>
        </div>
        <div className="ctn-book-action">
          <h4>Comments</h4>
          <h4>Remove</h4>
          <h4>Edit</h4>
        </div>
      </div>

      <div className="ctn-middle">
        <div>
          <image src={book.image} alt={book.title} />
        </div>
        <div className="state-progress">
          <h5>64%</h5>
          <h5>completed</h5>
        </div>
      </div>

      <div className="ctn-right">
        <h5>CURRENT CHAPTER</h5>
        <h5>Chapter 14</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>

      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
      <button type="button" onClick={removeBook}>
        Remove
      </button>
    </div>
  );
}
