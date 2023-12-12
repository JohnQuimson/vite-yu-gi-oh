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
    <h3>{{ name }}</h3>
    <span>{{ archetype }}</span>
  </li>
</template>

<style lang="scss"></style>
