<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="cont-img">
      <img src="../../public/img/logo.png" alt="logo" />
    </div>
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #ffffff;
  display: flex;
  align-items: center;

  .cont-img {
    height: 50px;
    margin: 25px;

    img {
      height: 100%;
    }
  }
}
</style>
