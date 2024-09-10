import { defineStore } from 'pinia';
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