<template>
  <ul class="list-group">
    <li class="list-group-item text-muted">A 10 personas le gusta tu post</li>
    <li class="list-group-item">
      <div class="row">
        <div class="col d-grid">
          <button class="btn d-flex justify-content-center align-items-center gap-2 px-0">
            <span class="material-icons"> thumb_up </span>
            Me gusta
          </button>
        </div>
        <div class="col d-grid">
          <button class="btn d-flex justify-content-center align-items-center gap-2 px-0">
            <span class="material-icons"> chat_bubble_outline </span>
            Commentar
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
.btn:hover {
  color: #5044c9;
}
.material-icons {
  color: black;
  font-size: 1.4em;
  background-color: rgba(55, 55, 55, 0.300);
  padding: 0.3rem;
  border-radius: 50%;
  margin: 0.1em;
}
</style>
