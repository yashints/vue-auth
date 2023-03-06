<template>
  <div class="card bg-light col-3 pt-4 m-5 box-shadow">
    <router-link :to="movieDetailsPath" class="link-container">
      <Poster :posterUrl="movie.GraphicUrl" :alt="movie.Title" />
      <div
        class="card-body p-2 pt-4 d-flex flex-column justify-content-between"
      >
        <h5 class="card-title">{{ movie.Title }}</h5>
        <div class="card-text">
          <span :class="ratingClass">{{ movie.Rating }}</span>
          <small class="text-muted">{{ movie.Runtime }} mins</small>
          <div class="d-grid p-2 pt-4">
            <router-link :to="bookingPath" class="btn btn-secondary btn-lg">
              Book
            </router-link>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Poster from "@/components/Poster.vue";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    movieDetailsPath() {
      return `/movie/${this.movie.MovieId}`;
    },
    bookingPath() {
      return `/book/${this.movie.MovieId}`;
    },
    ratingClass() {
      switch (this.movie.Rating) {
        case "M":
          return "badge text-bg-primary";
        case "MA15":
        case "R18+":
          return "badge text-bg-danger";
        case "PG":
        case "CTC":
          return "badge text-bg-warning";
        case "G":
          return "badge text-bg-success";
        case "E":
          return "badge text-bg-info";
        default:
          return "";
      }
    },
  },
  components: {
    Poster,
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
.badge {
  margin-right: 10px;
}
.link-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.btn-secondary {
  color: white;
}
</style>
