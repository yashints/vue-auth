import { ref, computed } from "vue";
import { defineStore } from "pinia";
import service from "../services";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
    movieDetails: {},
    cinemas: [],
    loading: false,
    error: null,
    searchTerm: "",
  }),
  getters: {
    getMovies: (state) => (filter) => {
      if (filter) {
        return state.movies.filter((x) =>
          x.title.toLowerCase().includes(filter.toLowerCase())
        );
      }
      return state.movies;
    },
    getMovie: (state) => (movieId) => {
      return state.movies.find((x) => x.movieId === movieId);
    },
    getCinemas: (state) => {
      return state.cinemas;
    },
  },
  actions: {
    async fetchMovies() {
      this.movies = [];
      this.loading = true;
      try {
        const movies = await service.fetchMovies();
        this.movies = movies.data;
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchMovieDetails(id) {
      try {
        this.loading = true;
        const movie = await service.fetchMovieDetails(id);
        this.movieDetails[id] = movie.data[0];
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchCinemas() {
      try {
        this.cinemas = [];
        this.loading = true;
        const cinemas = await service.fetchCinemas();
        this.cinemas = cinemas.data;
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
