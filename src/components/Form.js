import React from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';
import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  return (
    <form onSubmit={dispatch(addBook())}>
      <Field type="text" name="Title" component="input" />
      <Field type="text" name="Author" component="input" />
      <button type="submit" value="Add Book">
        Add Book
      </button>
    </form>
  );
}
