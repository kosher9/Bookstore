import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

export default function Books() {
  const books = useSelector((state) => state.book, []);
  return (
    <div>
      <ul className="book-list">
        {books?.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
