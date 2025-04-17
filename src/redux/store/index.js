// questo file da il via alla configurazione di Redux nel nostro progetto
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import jobsReducer from '../reducers/jobsReducer';
import favoritesReducer from '../reducers/favoritesReducer';

const uniqueReducer = combineReducers({

  jobs: jobsReducer,
  favorites: favoritesReducer
})
const store= configureStore({
  reducer:uniqueReducer
})
export default store

// store è il "cuore" della nostra implementazione di Redux
