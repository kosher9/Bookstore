const ADD = 'my-app/categories/ADD';
const REMOVE = 'my-app/categories/REMOVE';
const CHECK_STATUS = 'my-app/categories/CHECK_STATUS';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
        },
      ];
    case REMOVE:
      return state.filter((category) => category.id !== action.id);

    case CHECK_STATUS:
      return state.map((category) => {
        if (category.id === action.id) {
          return {
            ...category,
            status: action.status,
          };
        }
        return category;
      });
    default:
      return state;
  }
}

export function addCategory(category) {
  return {
    type: ADD,
    category,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export function checkStatus() {
  const status = 'Under construction';
  return {
    type: CHECK_STATUS,
    status,
  };
}
