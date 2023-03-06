<template>
  <div>
    <Loader v-if="isLoading" />
    <Triangle
      :imageUrl="getImageUrl(movie?.GraphicUrl)"
      :height="'300px'"
      :showCard="true"
      :cardText="'Watch trailer'"
      :blurCard="true"
    />
    <nav>
      <div class="nav nav-tabs m-5" id="nav-tab" role="tablist">
        <button
          class="nav-item nav-link active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Sessions
        </button>
        <button
          class="nav-item nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          role="tab"
          type="button"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          About
        </button>
        <button
          class="nav-item nav-link"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          role="tab"
          type="button"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          Offers
        </button>
      </div>
    </nav>
    <div class="tab-content m-5" id="nav-tabContent">
      <div
        class="tab-pane fade show active text-left"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="col-md-4 pl-0">
          <select class="form-select mb-3" v-model="selectedCinema">
            <option selected disabled value="default">Where do you want to watch this?</option>
            <option v-for="cinema in cinemas" :key="cinema.CinemaId">
              {{ cinema.DisplayName }}
            </option>
          </select>
        </div>

        <nav v-if="selectedCinema !== 'default'">
          <div class="nav nav-tabs" id="nav-tab-when" role="tablist">
            <button
              class="nav-item nav-link active"
              id="nav-today-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-today"
              role="tab"
              type="button"
              aria-controls="nav-today"
              aria-selected="true"
              @click="setDate('td')"
            >
              TODAY
            </button>
            <button
              class="nav-item nav-link"
              id="nav-tomorrow-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-tomorrow"
              role="tab"
              type="button"
              aria-controls="nav-tomorrow"
              aria-selected="false"
              @click="setDate('tm')"
            >
              TOMORROW
            </button>
            <button
              class="nav-item nav-link"
              id="nav-future-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-future"
              role="tab"
              type="button"
              aria-controls="nav-future"
              aria-selected="false"
              @click="setDate('fu')"
            >
              FUTURE
            </button>
          </div>
        </nav>

        <div class="tab-content mt-4 mb-4" id="nav-CinemaContent">
          <div id="nav-today" role="tabpanel" aria-labelledby="nav-today-tab">
            <div class="btn-toolbar" role="toolbar" ara-label="Time table" v-if="ifDate('td')">
              <div class="btn-group" role="group">
                <button
                  class="btn btn-outline-secondary"
                  :class="{ active: timeOfDay === t.completeTime }"
                  v-for="t in times"
                  :key="t.time"
                  type="button"
                  @click="setTime(t.completeTime)"
                >
                  {{ t.time }}
                  <span class="badge bg-secondary">{{ t.ampm }}</span>
                </button>
              </div>
            </div>
          </div>
          <div id="nav-tomorrow" role="tabpanel" aria-labelledby="nav-tomorrow-tab">
            <div
              class="btn-toolbar"
              role="toolbar"
              ara-label="Time table Tomorrow"
              v-if="ifDate('tm')"
            >
              <div class="btn-group" role="group">
                <button
                  class="btn btn-outline-secondary"
                  :class="{ active: timeOfDay === t.completeTime }"
                  v-for="t in times"
                  :key="t.time"
                  type="button"
                  @click="setTime(t.completeTime)"
                >
                  {{ t.time }}
                  <span class="badge bg-secondary">{{ t.ampm }}</span>
                </button>
              </div>
            </div>
          </div>
          <div id="nav-future" role="tabpanel" aria-labelledby="nav-future-tab">
            <div class="row">
              <div class="col-sm-3">
                <div class="input-group" v-if="ifDate('fu')">
                  <input
                    type="date"
                    class="form-control"
                    aria-label="Select a date"
                    v-model="futureDate"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div
                class="btn-toolbar pt-2"
                role="toolbar"
                ara-label="Time table Future"
                v-if="futureDate"
              >
                <div class="btn-group" role="group">
                  <button
                    class="btn btn-outline-secondary"
                    :class="{ active: timeOfDay === t.completeTime }"
                    v-for="t in times"
                    :key="t.time"
                    type="button"
                    @click="setTime(t.completeTime)"
                  >
                    {{ t.time }}
                    <span class="badge bg-secondary">{{ t.ampm }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button v-if="bookingVisible" class="btn btn-lg btn-primary col-md-2">Book</button>
      </div>
      <div
        class="tab-pane fade text-left"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        {{ movie?.Synopsis }}
      </div>
      <div
        class="tab-pane fade text-left"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <div class="jumbotron">
          <h1 class="display-4">Oh no!</h1>
          <p class="lead">
            You missed on all of our offers, but don't worry, we have offers all year round.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Triangle from "@/components/Triangle.vue";
import { useMoviesStore } from "../stores";
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { generateTimes } from "../utils/timeGenerator";

export default defineComponent({
  components: {
    Loader,
    Triangle,
  },
  setup() {
    const store = useMoviesStore();
    const route = useRoute();
    const movieDetails = computed(() => store.movieDetails[route.params.movieId]);
    const hasDetails = computed(() => {
      return store.movieDetails[route.params.id] != null;
    });
    const cinemas = computed(() => store.cinemas);
    const selectedCinema = ref("default");
    const selectedDate = ref("");
    const timeOfDay = ref("");
    const bookingVisible = ref(selectedCinema && timeOfDay);
    const futureDate = ref(null);

    return {
      bookingVisible,
      movie: movieDetails,
      cinemas: cinemas,
      movieId: route.params.movieId,

      isLoading: store.loading && hasDetails,
      selectedCinema,
      futureDate,
      timeOfDay,
      selectedDate,
    };
  },
  async created() {
    const store = useMoviesStore();
    await store.fetchMovieDetails(this.movieId);
    await store.fetchCinemas();
  },
  methods: {
    setTime(time) {
      this.timeOfDay = time;
    },
    setDate(date) {
      this.selectedDate = date;
      this.timeOfDay = null;
      this.futureDate = null;
    },
    ifDate(d) {
      return this.selectedDate === d;
    },
    getImageUrl(url) {
      if (url) {
        return new URL(url);
      }
    },
  },
  computed: {
    times() {
      return generateTimes();
    },
  },
});
</script>
