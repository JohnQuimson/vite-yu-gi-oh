<script>
export default {
  name: 'Search',
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {},
  components: {},
};
</script>

<template>
  <form class="row">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
      <select
        class="form-select my-3"
        id="autoSizingSelect"
        v-model="searchKey"
        @change="$emit('search')"
      >
        <option selected hidden value="">archetype</option>
        <option value="default">All</option>
        <option value="Alien">Alien</option>
        <option value="Unchained">Unchained</option>
        <option value="Jq's">Jq's</option>
      </select>
    </div>
  </form>
</template>

<style lang="scss"></style>
