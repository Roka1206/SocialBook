<template>
  <div class="card">
    <CardHeaderComp v-if="header" :header="header" />
    <div class="card-body">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="cardParragrapho" class="card-text mb-1">
        {{ cardParragrapho }}
      </p>
      <img v-if="picture" :src="picture" alt="post img" class="post-img" />
      <ListGroupComp v-if="likes" />
    </div>
  </div>
</template>

<script>
import CardHeaderComp from './CardHeaderComp.vue'
import ListGroupComp from './ListGroupComp.vue'

export default {
  name: 'CardComp',
  props: {
    title: {
      type: String,
      required: false
    },
    cardParragrapho: {
      type: String,
      required: false
    },
    picture: {
      type: Image,
      required: false
    },
    header: {
      type: Object,
      required: false
    },
    likes: {
      type: Boolean,
      required: false
    }
  },
  components: { CardHeaderComp, ListGroupComp }
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow:
    0 2px 4px rgb(0 0 0 / 10%),
    0 8px 16px rgb(0 0 0 / 10%);
}

.post-img {
  max-width: 100%;
}
</style>
