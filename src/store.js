import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  cards: [],
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',
});
