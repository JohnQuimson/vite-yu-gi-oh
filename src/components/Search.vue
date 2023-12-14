<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: 'Search',
  data() {
    return {
      store,
    };
  },
  methods: {},
  created() {
    axios.get(store.endPointArchetypeUrl).then((response) => {
      store.arrArchetypes = response.data;
    });
  },
};
</script>

<template>
  <form class="row">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
      <select
        class="form-select my-3"
        id="autoSizingSelect"
        v-model="this.store.archetypeKey"
        @change="$emit('call')"
      >
        <option selected hidden value="">archetype</option>
        <option class="bg-secondary text-white" value="">All</option>
        <option
          v-for="archetype in store.arrArchetypes"
          :value="archetype.archetype_name"
        >
          {{ archetype.archetype_name }}
        </option>
      </select>
    </div>
  </form>
</template>

<style lang="scss"></style>
