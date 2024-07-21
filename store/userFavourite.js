import { defineStore } from 'pinia';
import { useProduct } from './productStore';
import { useFavourite } from './productFavourite';
import axios from 'axios';

export const useFavouriteUser = defineStore('favouriteUser', {
  state: () => ({}),
  getters: {},
  actions: {
    async syncFavourite() {
      const { data } = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'PATCH',
        body: { favourites: useFavourite().favourite }
      }); //пуш id товара в корзину
    },
  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
