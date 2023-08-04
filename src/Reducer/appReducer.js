export const initialState = {
  page: 1,
  favorites: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADDFAV":
      return { ...state, favorites: [...state.favorites, payload] };
    case "REMOV":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload),
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: state.page - 1,
      };
  }
};
