<script>
export default {
  name: 'CardElement',
  props: ['name', 'archetype', 'img'],
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <li>
    <div class="cont-img">
      <img :src="img" :alt="name" />
    </div>
    <h3 class="text-white text-uppercase fs-6 text-center py-3">{{ name }}</h3>
    <p class="text-center fs-5">{{ archetype }}</p>
  </li>
</template>

<style lang="scss">
li {
  width: calc((100% - 100px) / 5);
  background-color: #d48f38;

  img {
    width: 100%;
  }

  h3 {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
