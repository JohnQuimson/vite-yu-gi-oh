<script>
import Search from './Search.vue';
import CardsList from './CardsList.vue';
import { store } from '../store';

export default {
  name: 'Main',
  components: {
    Search,
    CardsList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    filterCards() {
      console.log('Call dal figlio');
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <Search @search="filterCards" />
    </div>
    <div class="main-cont container bg-white p-5">
      <CardsList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
}
</style>
