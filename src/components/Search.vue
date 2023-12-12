<script>
export default {
  name: 'Search',
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <form class="row gy-2 gx-3 align-items-center">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
      <select class="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </form>
</template>

<style lang="scss"></style>
