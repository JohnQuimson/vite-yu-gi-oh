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
  <ul class="d-flex flex-wrap px-2">
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
  display: flex;
  background-color: #212529;
  color: #ffff;
  height: 55px;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  padding-left: 15px;
  margin: 0 8px;
}

ul {
  gap: 25px;
}
</style>
