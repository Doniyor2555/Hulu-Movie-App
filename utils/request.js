const API_KEY = process.env.API_KEY;

export default {
  fetchingTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: "Top rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=10749`
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=9648`
  },  
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=878`
  },  
  fetchWestern: {
    title: "Western",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=37`
  },  
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=16`
  },  
  fetchTv: {
    title: "Tv",
    url: `/discover/movies?api_key=${API_KEY}&with_genres=10770`
  },
}