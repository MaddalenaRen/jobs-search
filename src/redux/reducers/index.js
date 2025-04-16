// qui dentro scriveremo il reducer principale (e unico) della nostra app!
// il reducer di Redux è una funzione pura che non manipola mai i suoi parametri
// e ritorna sempre il NUOVO STATO per l'applicativo

const initialState = {
  // qui inserisco lo stato iniziale dell'intera app!
  // poichè in questo stato condiviso tendono a finire tantissime proprietà
  // in progetti corposi, è meglio NON lanciare tutto alla rinfusa!
  // per questo motivo si tende a dividerlo in "fette" (slices)
  query: "",
  jobs: [],
  favorites: []
}


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };

    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((job, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;

