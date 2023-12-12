<script>
import Search from './Search.vue';

export default {
  name: 'Main',
  components: {
    Search,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <Search />
    </div>
    <div class="container">cards</div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
}
</style>
