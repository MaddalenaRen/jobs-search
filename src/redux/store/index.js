// questo file da il via alla configurazione di Redux nel nostro progetto
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
  reducer: mainReducer, // qui vado a mettere il principale reducer dell'app
})

export default store
// store è il "cuore" della nostra implementazione di Redux
