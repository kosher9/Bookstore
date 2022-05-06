import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <ul className="book-list">
        {books?.map((book) => (
          <li key={book.id}>
            <Book id={book.id} title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
