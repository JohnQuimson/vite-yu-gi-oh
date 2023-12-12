<script>
import axios from 'axios';
import CardElement from './CardElement.vue';

export default {
  name: 'CardsList',
  components: {
    CardElement,
  },
  data() {
    return {
      cards: [],
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    };
  },
  created() {
    axios.get(this.apiUrl).then((response) => {
      this.cards = response.data.data;
      console.log(this.cards);
    });
  },
};
</script>

<template>
  <CardElement v-for="card in cards" />
</template>

<style lang="scss"></style>
