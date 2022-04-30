import React from 'react';
import Book from './Book';

export default function Books(props) {
  const books = props;
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <Book title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
}
