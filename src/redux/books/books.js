import { BASE_URL, APP_ID } from '../../url_conf';

const ADD = 'my-app/books/ADD';
const REMOVE = 'my-app/books/REMOVE';
const GET_BOOKS = 'my-app/books/GET_BOOKS';

const defaulState = [];

export default function bookReducer(state = defaulState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.newBook];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
}

export function addBook(book) {
  const newBook = {
    id: book.id,
    author: book.bookAuthor,
    title: book.bookTitle,
  };
  return {
    type: ADD,
    newBook,
  };
}

export function getBooks(books) {
  return {
    type: GET_BOOKS,
    books,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export function deleteBook(id) {
  return async (dispatch) => {
    await fetch(`${BASE_URL}/apps/${APP_ID}/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(remove(id));
  };
}

export function saveBook(book) {
  return async (dispatch) => {
    await fetch(`${BASE_URL}/apps/${APP_ID}/books`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.bookTitle,
        author: book.bookAuthor,
        category: book.category,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(addBook(book));
  };
}

export const fetchBooks = () => async (dispatch) => {
  const bookList = await fetch(`${BASE_URL}/apps/${APP_ID}/books`).then(
    (response) => response.json(),
  );
  const books = [];
  Object.keys(bookList).map((key) => books.push({
    id: key,
    title: bookList[key][0].title,
    author: bookList[key][0].author,
    category: bookList[key][0].category,
  }));
  dispatch(getBooks(books));
};
