<template>
  <div class="card-comp mx-auto">
    <div class="card">
      <div class="card-body">
        <form action="">
          <div class="mb-3 mt-2">
            <input type="email" class="form-control" placeholder="Ingresa tu Email" />
          </div>
          <div class="mb-3 mt-2">
            <input type="password" class="form-control" placeholder="Ingresa tu Contraseña" />
          </div>
          <div class="d-grid gap-2">
            <button v-for="btn in btns" :key="btn.txt" class="btn" :class="btn.class">
              {{ btn.txt }}
            </button>
            <hr />
            <button class="btn btn-success">Crear Cuenta</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComp',
  props: {
    btns: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow:
    0 2px 4px rgb(0 0 0 / 10%),
    0 8px 16px rgb(0 0 0 / 10%);
}
.card-comp {
  max-width: 398px;
  margin-top: 3em;
}
.btn-success {
  margin: auto;
  min-width: 195px;
}
</style>
