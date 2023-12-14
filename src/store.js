import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  cards: [],
  arrArchetypes: [],
  archetypeKey: '',
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=2000&offset=0',
  endPointArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
});
