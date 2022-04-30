import React from 'react';

export default function Book(props) {
  const book = props;
  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
      <button type="button">Remove</button>
    </div>
  );
}
