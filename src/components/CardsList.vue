<script>
import axios from 'axios';
import CardElement from './CardElement.vue';
import { store } from '../store';

export default {
  name: 'CardsList',
  components: {
    CardElement,
  },

  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiUrl).then((response) => {
      store.cards = response.data.data;
      // console.log(store.cards);
    });
  },
};
</script>

<template>
  <section class="found">
    <span>Found: {{ store.cards.length }} cards</span>
  </section>
  <ul class="d-flex flex-wrap">
    <CardElement
      v-for="card in store.cards"
      :name="card.name"
      :archetype="card.archetype"
      :img="card.card_images[0].image_url"
    />
  </ul>
</template>

<style lang="scss">
.found {
  background-color: #212529;
  color: #ffff;
}
</style>
