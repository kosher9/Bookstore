import { BASE_URL, APP_ID } from '../../url_conf';

const ADD = 'my-app/books/ADD';
const REMOVE = 'my-app/books/REMOVE';
const GET_BOOKS = 'my-app/books/GET_BOOKS';
const GET_BOOKS_ERROR = 'my-app/books/GET_BOOKS_ERROR';
const GET_BOOKS_SUCCESS = 'my-app/books/GET_BOOKS_SUCCESS';

const defaulState = [
  {
    id: 1,
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    id: 2,
    author: 'Robert Kiyosaki',
    title: 'Rich Dad Poor Dad ',
  },
];

export default function bookReducer(state = defaulState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.newBook];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return action.books;
    case GET_BOOKS_SUCCESS:
      return action.json();
    case GET_BOOKS_ERROR:
      return action.error;
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

export function getBooks(data) {
  console.log(data);
  return {
    type: GET_BOOKS,
    data,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export const fetchBooks = () => async (dispatch) => {
  const bookList = await fetch(`${BASE_URL}/apps/${APP_ID}/books`).then(
    (response) => response.json(),
  );
  dispatch(getBooks(bookList));
};
