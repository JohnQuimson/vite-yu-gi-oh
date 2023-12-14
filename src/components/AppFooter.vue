<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <div class="cont-img">
      <img src="../../public/img/logo.png" alt="logo" />
    </div>
    <a href="https://github.com/JohnQuimson">J'Q</a>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #212529;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .cont-img {
    height: 50px;

    img {
      height: 100%;
    }
  }

  a {
    color: #333333;
    text-decoration: none;
  }
}
</style>
