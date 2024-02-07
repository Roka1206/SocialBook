<template>
  <div class="home">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
          <img src="../assets/img/imagen.svg" alt="imagen social book" />
          <h2 class="text-center text-lg-start">Conectandote con tus futuros amigos!!!</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <LoginComp :btns="btnArray" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'
export default {
  name: 'HomeView',
  components: {
    LoginComp
  },

  data() {
    return {
      btnArray: [
        {
          txt: 'Iniciar Sesión',
          class: 'btn-primary'
        },
        {
          txt: 'Olvidaste tu contraseña?',
          class: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  max-width: 470px;
  margin: auto;
  font-size: 1.8rem;
}
.home {
  min-height: 60vh;
  max-width: 895px;
  margin: auto;
}

.img-cont {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 315px;
  margin: 1em auto 0 auto;
}

@media (min-width: 992px) {
  .home {
    margin: 4em auto;
  }
  img {
    margin: 0;
    margin-top: 5.6em;
  }
}
</style>
