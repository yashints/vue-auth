import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import MovieDetails from "@/components/MovieDetails.vue";
import About from "@/components/About.vue";
import Booking from "@/components/Booking.vue";
import Food from "@/components/Food.vue";
import Accessibility from "@/components/Accessibility.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movie/:id",
    component: MovieDetails,
  },
  {
    path: "/book/:movieId",
    component: Booking,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/food",
    component: Food,
  },
  {
    path: "/a11y",
    component: Accessibility,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
