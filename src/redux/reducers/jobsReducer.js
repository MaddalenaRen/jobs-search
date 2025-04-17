// qui dentro scriveremo il reducer principale (e unico) della nostra app!
// il reducer di Redux è una funzione pura che non manipola mai i suoi parametri
// e ritorna sempre il NUOVO STATO per l'applicativo

import { SET_ERROR, SET_JOBS, SET_LOADING, SET_QUERY } from "../actions";

const initialState = {
  // qui inserisco lo stato iniziale dell'intera app!
  // poichè in questo stato condiviso tendono a finire tantissime proprietà
  // in progetti corposi, è meglio NON lanciare tutto alla rinfusa!
  // per questo motivo si tende a dividerlo in "fette" (slices)
  query: "",
  jobs: [],
  isLoading: false,
  isError: false,
 
}


const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

      case SET_LOADING:
        return{
          ...state,
          isLoading:action.payload,
        };

        case SET_ERROR:
          return {
            ...state,
            isError:action.payload,
          }


    default:
      return state;
  }
};

export default jobsReducer;

