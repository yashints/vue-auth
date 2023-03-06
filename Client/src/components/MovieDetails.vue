<template>
  <section>
    <Loader v-if="isLoading" />
    <section v-if="hasDetails">
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-3">
            <Poster :posterUrl="movie.GraphicUrl" />
          </div>
          <div class="col-sm-9 details">
            <h2>{{ movie.Title }}</h2>
            <p>{{ movie.Synopsis }}</p>
            <div>Runtime: {{ runtime }}</div>
            <!-- <div>Average Rating: {{ movie.vote_average.toFixed(1) }}</div>
            <div>
              Production company: {{ movie.production_companies[0].name }}
            </div> -->
            <div>Release Date: {{ releaseDate }}</div>
            <h4>Trailers</h4>
            <a
              :href="trailer.url"
              v-for="trailer in trailers"
              :key="trailer.id"
              class="trailer"
              target="_blank"
            >
              <img :src="trailer.thumbnail" />
            </a>
            <a :href="ticketsPath" class="btn btn-success">Get Tickets</a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loader from "@/components/Loader.vue";
import BackdropImage from "@/components/BackdropImage.vue";
import Poster from "@/components/Poster.vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { computed, defineComponent } from "vue";
import { useMoviesStore } from "../stores";

export default defineComponent({
  setup() {
    const store = useMoviesStore();
    const route = useRoute();
    const movieDetails = computed(() => store.movieDetails[route.params.id]);
    const hasDetails = computed(() => {
      return store.movieDetails[route.params.id] != null;
    });
    return {
      movie: movieDetails,
      movieId: route.params.id,

      hasDetails: hasDetails,
      isLoading: store.loading,
    };
  },

  async created() {
    const store = useMoviesStore();
    await store.fetchMovieDetails(this.movieId);
  },
  computed: {
    // calculate movie time.
    runtime() {
      const runtime = this.movie.Runtime;
      const hours = Math.floor(runtime / 60);
      const minutes = runtime - 60 * hours;
      return `${hours}h ${minutes}m`;
    },
    ticketsPath() {
      return `/movie/${this.movieId}/tickets`;
    },
    releaseDate() {
      const rDate = new Date(this.movie.ReleaseDate);
      return rDate.toLocaleDateString("en-au", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    trailers() {
      const trailers = [];
      // this.movie.videos.results.forEach((video) => {
      //   if (video.type === "Trailer") {
      //     trailers.push({
      //       thumbnail: `https://i.ytimg.com/vi/${video.key}/sddefault.jpg`,
      //       url: `https://youtube.com/watch?v=${video.key}`,
      //     });
      //   }
      // });
      return trailers;
    },
  },
  components: {
    Loader,
    BackdropImage,
    Poster,
  },
});
</script>

<style scoped>
.trailer {
  width: 150px;
  height: 110px;
  display: block;
  float: left;
  margin-right: 20px;
}
.trailer img {
  width: 100%;
  height: 100%;
}
</style>
