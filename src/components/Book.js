import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

export default function Book(props) {
  const book = props;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook(book.id));
  };

  const chapterVal = Math.round(Math.random() * 20);

  return (
    <div className="book">
      <div className="ctn-left">
        <div className="ctn-book-info">
          <h5 className="category">{book.category}</h5>
          <h2 className="title">{book.title}</h2>
          <h5 className="author">{book.author}</h5>
        </div>
        <div className="ctn-book-action">
          <h4>Comments</h4>
          <span>|</span>
          <button className="remove-but" type="button" onClick={removeBook}>
            Remove
          </button>
          <span>|</span>
          <h4>Edit</h4>
        </div>
      </div>

      <div className="ctn-middle">
        <div className="state-progress">
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={Math.round((chapterVal / 20) * 100)} />
          </div>
          <div className="state-progress-info">
            <h5 className="prog-numb">
              {Math.round((chapterVal / 20) * 100)}
              %
            </h5>
            <h5 className="comp">completed</h5>
          </div>
        </div>
      </div>

      <div className="ctn-right">
        <h5 className="cur-chap">CURRENT CHAPTER</h5>
        <h5 className="chap">Chapter 14</h5>
        <button className="chap-but" type="button">
          Update progress
        </button>
      </div>
    </div>
  );
}
