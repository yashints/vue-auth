<template>
  <section>
    <div class="row">
      <div class="col-lg-4 ms-5 pt-5">
        <div class="input-group mb-4 border rounded-pill p-1">
          <div class="input-group-prepend border-0">
            <button
              id="button-addon4"
              type="button"
              class="btn btn-link text-info"
            >
              <span class="bi-search"></span>
            </button>
          </div>
          <input
            type="search"
            placeholder="What're you searching for?"
            aria-describedby="button-addon4"
            class="form-control bg-none border-0"
            v-model="searchTerm"
          />
        </div>
      </div>
    </div>

    <Loader v-if="isLoading" />
    <div class="container-fluid text-center">
      <div class="row">
        <Movie v-for="movie in movies()" :key="movie.MovieId" :movie="movie" />
      </div>
    </div>
  </section>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Movie from "@/components/Movie.vue";
import { defineComponent, computed } from "vue";
import { useMoviesStore } from "../stores";

export default defineComponent({
  components: {
    Loader,
    Movie,
  },
  setup() {
    const store = useMoviesStore();
    const searchTerm = computed({
      get: () => store.searchTerm,
      set: (value) => (store.searchTerm = value),
    });

    function movies() {
      return store.getMovies(this.searchTerm);
    }

    return {
      movies,

      isLoading: store.loading,
      searchTerm: searchTerm,
    };
  },
  async created() {
    const store = useMoviesStore();
    await store.fetchMovies();
  },
});
</script>
