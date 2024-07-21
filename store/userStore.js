import { defineStore } from 'pinia';
import { useProduct } from './productStore';
import axios from 'axios';

export const useUser = defineStore('userStore', {
  state: () => ({ userInfo: {} }),
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    async syncCart() {
      await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: 'PATCH',
        body: { carts: useProduct().cart }
      }); //синхронизация локальной корзины с сервером
    },


  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
