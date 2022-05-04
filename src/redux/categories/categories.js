const CHECK_STATUS = 'my-app/categories/CHECK_STATUS';

export default function categoryReducer(state = [], action) {
  switch (action.type) {
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

export function checkStatus() {
  const status = 'Under construction';
  return {
    type: CHECK_STATUS,
    status,
  };
}
