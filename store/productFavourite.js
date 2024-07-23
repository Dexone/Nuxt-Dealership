import { defineStore } from 'pinia';
import { useProduct } from './productStore';
import { useFavouriteUser } from './userFavourite';

export const useFavourite = defineStore('favouriteStore', {
  state: () => ({ favourite: {}, simile: {}
   }),
  getters: {
    getFavourite: (state) => state.favourite,
    getSimile: (state) => state.simile,
  },
  actions: {
    async addToFavourite(value) {
      if (useProduct().user == 1) { //если гость (1)
        this.favourite[value.id] = 1;
      }
      if (useProduct().user > 1) { //если автоизован (>1)
        this.favourite[value.id] = 1; //добавление локально
        useFavouriteUser().syncFromFavouriteToServer(); //синхронизация локальной корзины с сервером
      }
    },

    async deleteFromFavourite(value) {
      if (useProduct().user == 1) {        //если гость (1)
        delete this.favourite[value];
      }
      if (useProduct().user > 1) {         //если автоизован (>1)
        delete this.favourite[value];
        useFavouriteUser().syncFromFavouriteToServer();
      }
    },

   
  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
