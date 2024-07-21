import { defineStore } from 'pinia';
import { useProduct } from './productStore';
import { useFavourite } from './productFavourite';
import axios from 'axios';

export const useFavouriteUser = defineStore('favouriteUser', {
  state: () => ({}),
  getters: {},
  actions: {
    async addToFavourite(value) {
      const getData = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'GET'
      }); //получить корзину пользователя
      let editData = getData.favourites;
      editData[value.id] = 1;
      const { data } = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'PATCH',
        body: { favourites: editData }
      }); //пуш id товара в корзину
    },

    async deleteFromFavourite(value) {
      const getData = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'GET'
      }); //получить корзину пользователя
      let editData = getData.favourites;
      delete editData[value];
      const { data } = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: 'PATCH',
        body: { favourites: editData }
      }); //пуш id товара в корзину
    },
    findFavourite() {
      setTimeout(() => {
        axios.get(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`).then((res) => {
          useFavourite().simile = {};
          let keys = Object.keys(res.data.favourites);
          let keysNum = keys.map((item) => Number(item)); 
          let values = Object.values(res.data.favourites); 
          for (let i = 1; i < 23; i++) {
            if (keysNum.indexOf(i) >= 0) {
              useFavourite().simile[i] = values[keysNum.indexOf(i)];
            } else {
              useFavourite().simile[i] = 0;
            }
          }
        });
      }, 500);
    }
  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
