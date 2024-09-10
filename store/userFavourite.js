import { defineStore } from 'pinia';
import { useProduct } from './productStore';
import { useFavourite } from './productFavourite';

export const useFavouriteUser = defineStore('favouriteUser', {
  state: () => ({}),
  getters: {},
  actions: {
    async syncFromFavouriteToServer() {
      const { data } = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'PATCH',
        body: { favourites: useFavourite().favourite }
      }); //пуш id товара в корзину
    },

    async syncFromServerToFavourite() {
      const getData = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'GET'
      });
      useFavourite().favourite = getData.favourites
      console.log(getData)
    },
  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
