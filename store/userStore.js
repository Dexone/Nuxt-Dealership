import { defineStore } from 'pinia';
import { useProduct } from './productStore';

export const useUser = defineStore('userStore', {
  state: () => ({ token: "", email: "" }),
  getters: {
    getToken: (state) => state.token,
    getEmail: (state) => state.email
  },
  actions: {
    async syncFromCartToServer() {

    },
  },
  persist:  {
    storage: persistedState.localStorage,
  },
});
