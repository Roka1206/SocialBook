<template>
  <div class="posts container">
    <img src="../assets/img/imagen.svg" alt="socialbook" class="logo" />
    <CardComp
      class="mt-2 mx-auto single-spot"
      title="hello"
      picture="https://images.pexels.com/photos/15508375/pexels-photo-15508375/free-photo-of-silhouette-of-forest-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
      cardParragrapho="Primer Post"
      :header="{
        name: 'Katherine Echeverria',
        picture: 'https://randomuser.me/api/portraits/women/81.jpg'
      }"
      :likes="true"
    />
    <CardComp
      class="mt-2 mx-auto single-spot"
      title="hello"
      picture="https://images.pexels.com/photos/3887574/pexels-photo-3887574.jpeg?auto=compress&cs=tinysrgb&w=400"
      cardParragrapho="Segundo Post"
      :header="{
        name: 'Cristian Fonseca',
        picture: 'https://randomuser.me/api/portraits/men/81.jpg'
      }"
      :likes="true"
    />
    />
    <CardComp
      class="mt-2 mx-auto single-spot"
      title="hello"
      picture="https://images.pexels.com/photos/18124509/pexels-photo-18124509/free-photo-of-tree-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=400"
      cardParragrapho="Tercer Post"
      :likes="true"
    />
    />
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue'
export default {
  name: 'PostsView',
  components: {
    CardComp
  }
}
</script>

<style>
.posts {
  min-height: 60vh;
  max-width: 895px;
  margin: auto;
}
.single-spot {
  max-width: 550px;
}
.logo {
  max-width: 115px;
  padding: 0.2rem;
}
</style>
