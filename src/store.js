import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  cards: [],
  searchKey: '',
  // apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  endPointArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  arrArchetypes: [],
});

// apiUrl: {
//   default: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
//   archetype: '?archetype=',
// },

// apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',

// `${this.store.apiUrl.default}${this.store.apiUrl.archetype}${store.searchKey}`;
