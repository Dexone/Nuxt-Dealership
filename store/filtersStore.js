import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'

export const useFilters = defineStore('filtersStore', {
    state: () => ({ search: []
    }),


    getters: {
        getSearch: (state) => state.search,
      },
    actions: {

    }
}
)