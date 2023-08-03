export const initialState = {
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
  }
};
