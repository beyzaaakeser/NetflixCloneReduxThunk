import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
 // params: { lang: 'tr',language:"tr-TR" },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2M4ODVlZTJjMzRhOGE0YmUxMWY3OTAwNmQ2MzA5OSIsIm5iZiI6MTcyNTMwMDc1Ni4yMDY0NTksInN1YiI6IjY2NGUzNWRmNWQ5NTBlNmQxMTE4OTc1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ssBgjoknMm1rtdciofHBDJ_G7gxomLMNXrw-8n_bysk',
  },
});

export default api;
