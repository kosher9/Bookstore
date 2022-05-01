import React from 'react';
import Book from './Book';
import Form from './Form';

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
    <div>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
