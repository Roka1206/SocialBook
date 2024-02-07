<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container justify-content-evenly">
      <RouterLink to="/" class="nav-link" :class="{ active: activePath.home }" aria-current="page">
        <span class="material-icons"> home </span></RouterLink
      >

      <RouterLink to="/about" class="nav-link" :class="{ active: activePath.about }">
        <span class="material-icons"> info </span></RouterLink
      >

      <RouterLink to="/posts" class="nav-link" :class="{ active: activePath.posts }">
        <span class="material-icons"> featured_play_list </span></RouterLink
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavComp',
  methods: {
    checkActive() {
      console.log(this.$route.path)
    },
    created() {
      this.checkActive()
    }
  },
  computed: {
    activePath() {
      if (this.$route.path === '/') {
        return {
          home: true,
          about: false,
          posts: false
        }
      } else if (this.$route.path === '/about') {
        return {
          home: false,
          about: true,
          posts: false
        }
      } else {
        return {
          home: false,
          about: false,
          posts: true
        }
      }
    }
  }
}
</script>

<style>
.material-icons {
  color: rgb(240, 240, 240);
  font-size: 1.4em;
  background-color: rgba(217, 217, 217, 0.185);
  padding: 0.3rem;
  border-radius: 50%;
  margin: 0.1em;
}

.active .material-icons {
  color: white;
  background-color: rgba(130, 130, 130, 0.185);
  border: 1px solid rgba(244, 244, 244, 0.342);
}
</style>
