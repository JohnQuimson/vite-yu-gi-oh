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
  <div class="card-cont">
    <div class="cont-img">
      <img :src="img" :alt="name" class="img-fluid" />
    </div>
    <h3 class="text-uppercase text-white">{{ name }}</h3>
    <p class="">{{ archetype }}</p>
  </div>
</template>

<style lang="scss">
.card-cont {
  background-color: #d48f38;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .cont-img {
    width: 100%;

    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>
