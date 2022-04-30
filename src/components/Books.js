import React from 'react';
import Book from './Book';

export default function Books() {
  const books = [
    {
      id: 1,
      author: 'J.K. Rowling',
      title: 'Harry Potter and the Chamber of Secrets',
    },
    {
      id: 2,
      author: 'J.K. Rowling',
      title: 'Harry Potter and the Prisoner of Azkaban',
    },
  ];
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
