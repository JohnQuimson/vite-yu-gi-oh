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
        <option selected>archetype</option>
        <option value="1">Alien</option>
        <option value="2">Unchained</option>
        <option value="3">Jq's</option>
      </select>
    </div>
  </form>
</template>

<style lang="scss"></style>
