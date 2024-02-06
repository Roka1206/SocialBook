<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">LOGO</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page">
              <span class="material-icons"> home </span></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">
              <span class="material-icons"> info </span></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/posts" class="nav-link">
              <span class="material-icons"> featured_play_list </span></RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style></style>
