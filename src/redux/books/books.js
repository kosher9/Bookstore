const ADD = 'my-app/books/ADD';
const REMOVE = 'my-app/books/REMOVE';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(id) {
  return {
    type: ADD,
    id,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}
