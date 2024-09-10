import { defineStore } from 'pinia';
import { useProduct } from './productStore';

export const useUser = defineStore('userStore', {
  state: () => ({ userInfo: {} }),
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    async syncFromCartToServer() {
      await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: 'PATCH',
        body: { carts: useProduct().cart }
      }); //синхронизация локальной корзины с сервером
    },

    async syncFromServerToCart() {
      const getData = await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: 'GET'
      });
      useProduct().cart = getData.carts
    },
  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
