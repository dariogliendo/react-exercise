import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../Reducers/newsSlice'
export default configureStore({
  reducer: {
    news: newsReducer,
  },
})