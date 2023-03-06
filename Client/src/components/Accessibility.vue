<template>
  <div class="col-12">
    <Triangle :imageUrl="getImageUrl('1.jpg')" :headerText="'Accessibility'" :height="'300px'" />

    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 p-3">
      <div class="col">
        <div class="card">
          <img class="card-img-top" src="../assets/vision.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Audio Description Films</h5>
            <span class="badge rounded-pill bg-info">AD</span>
            <p class="card-text">Providing audio assistance for vision-impaired</p>
            <a href="#" class="btn btn-light"><u>More info</u></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img class="card-img-top" src="../assets/OCA.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Open Caption Films</h5>
            <span class="badge rounded-pill bg-primary">OC</span>
            <p class="card-text">Bringing Open Caption films to the Deaf & Hard of Hearing</p>
            <a href="#" class="btn btn-light"><u>More info</u></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img class="card-img-top" src="../assets/cc.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Closed Captions Films</h5>
            <span class="badge rounded-pill bg-success">CC</span>
            <p class="card-text">Providing support for hearing-impaired cinema patrons.</p>
            <a href="#" class="btn btn-light"><u>More info</u></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/Sensory-Friendly-Sessions-t.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Sensory Friendly Films</h5>
            <span class="badge rounded-pill bg-warning">SFF</span>
            <p class="card-text">Sensory friendly movie sessions for autistic people</p>
            <a href="#" class="btn btn-light"><u>More info</u></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Triangle from "@/components/Triangle.vue";
export default {
  components: {
    Triangle,
  },
  methods: {
    getImageUrl: function (imgPath) {
      return new URL(`../assets/${imgPath}`, import.meta.url);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 300px;
}
</style>
