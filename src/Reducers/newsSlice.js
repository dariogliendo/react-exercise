import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    value: []
  },
  reducers: {
    setNews(state, a) {
      state.value = [...a.payload]
    },
    async getNews(state, a) {
      try {
        const { data } = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=qkKbInStoXtJ1h4dAv7ILP13Eo4xPG1l"
        );
        let news;
        if (a.payload) news = data.results.filter(f => f.subsection === a.payload)
        else news = data.results
        state.value = [...news]
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export const { setNews, getNews } = newsSlice.actions
export default newsSlice.reducer