<template>
  <footer class="mt-5">
    <ul class="list-group list-group-flush list-group-horizontal text-center m-0">
      <li class="list-group-item">
        <RouterLink class="router-link" to="/">Home</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink class="router-link" to="/about">About</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink class="router-link" to="/posts">Post</RouterLink>
      </li>
    </ul>
    <img src="../assets/img/logo.svg" alt="socialbook logo" />
    <div class="text-black-50 text-center">SocialBook &#169; 2023</div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default { components: { RouterLink } }
</script>

<style scoped>
footer {
  width: 100%;
}

img {
  max-width: 200px;
  margin: 0 auto;
  display: block;
}

.text-center {
  margin-top: -0.5em;
  margin-top: 0.5em;
}

.list-group {
  justify-content: center;
}
.list-group-item {
  border: none;
}
.router-link {
  text-decoration: none;
}
@media (min-width: 769px) {
  footer {
    position: absolute;
  }
  img {
    position: relative;
    bottom: 0;
  }
}
</style>
