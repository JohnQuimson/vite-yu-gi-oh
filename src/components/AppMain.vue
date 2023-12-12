<script>
import Search from './Search.vue';
import CardsList from './CardsList.vue';

export default {
  name: 'Main',
  components: {
    Search,
    CardsList,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <Search />
    </div>
    <div class="container">
      <CardsList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
}
</style>
