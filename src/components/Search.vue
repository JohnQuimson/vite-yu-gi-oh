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
  <form class="row">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
      <select class="form-select my-3" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </form>
</template>

<style lang="scss"></style>
