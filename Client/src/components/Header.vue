<template>
  <div class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/stage.svg" width="32" height="32" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link"
              >Home <span class="visually-hidden-focusable">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/food">Food</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/a11y">Accessibility</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #293241;
}
.nav-link {
  color: rgb(255, 255, 255, 0.6);
}
.nav-link.router-link-active {
  color: #fff;
}
</style>
