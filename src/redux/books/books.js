const ADD = 'my-app/books/ADD';
const REMOVE = 'my-app/books/REMOVE';

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
      return [
        ...state,
        action.newBook,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
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

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}
