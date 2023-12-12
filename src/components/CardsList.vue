<script>
import CardElement from './CardElement.vue';

export default {
  name: 'CardsList',
  components: {
    CardElement,
  },
  data() {
    return {
      cards: [],
    };
  },
};
</script>

<template>
  <CardElement v-for="card in cards" />
</template>

<style lang="scss"></style>
