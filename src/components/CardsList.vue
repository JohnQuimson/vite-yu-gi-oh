<script>
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
};
</script>

<template>
  <section class="found">
    <span>Found: {{ store.cards.length }} cards</span>
  </section>
  <div class="cards-list row gy-3">
    <div
      class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
      v-for="card in store.cards"
    >
      <CardElement
        :name="card.name"
        :archetype="card.archetype"
        :img="card.card_images[0].image_url"
      />
    </div>
  </div>
</template>

<style lang="scss">
section {
  height: 50px;
  background-color: #212529;
  color: white;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding-left: 10px;
}
</style>
