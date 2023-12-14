<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store.js';

export default {
  name: 'App',
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    filterCards() {
      console.log('Chiamata dal figlio');
      console.log(`filter Archetype: ${store.archetypeKey}`);
      if (this.store.archetypeKey !== '') {
        axios
          .get(store.apiUrl, {
            params: {
              archetype: this.store.archetypeKey,
            },
          })
          .then((response) => {
            this.store.cards = response.data.data;
          });
      } else {
        axios.get(store.apiURL).then((response) => {
          this.store.cards = response.data.data;
        });
      }
    },
  },
  created() {
    axios.get(store.apiUrl).then((response) => {
      store.cards = response.data.data;
      // console.log(`Loading: ${store.loading}`);
    });
  },
};
</script>

<template>
  <AppHeader />
  <AppMain @search="filterCards()" />
  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
