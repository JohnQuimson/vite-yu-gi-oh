<script>
import Search from './Search.vue';
import CardsList from './CardsList.vue';

export default {
  name: 'Main',
  components: {
    Search,
    CardsList,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<template>
  <main>
    <div class="container">
      <Search @call="$emit('search')" />
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
