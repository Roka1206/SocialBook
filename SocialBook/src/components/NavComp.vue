<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container justify-content-evenly">
      <RouterLink to="/" class="nav-link active" aria-current="page">
        <span class="material-icons"> home </span></RouterLink
      >

      <RouterLink to="/about" class="nav-link">
        <span class="material-icons"> info </span></RouterLink
      >

      <RouterLink to="/posts" class="nav-link">
        <span class="material-icons"> featured_play_list </span></RouterLink
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavComp'
}
</script>

<style>
.material-icons {
  color: white;
  font-size: 1.4em;
  background-color: rgba(217, 217, 217, 0.185);
  padding: 0.3rem;
  border-radius: 50%;
  margin: 0.1em;
}
</style>
