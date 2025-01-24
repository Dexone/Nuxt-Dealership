import { defineStore } from "pinia"

export const useUser = defineStore("userStore", {
  state: () => ({ token: "", email: "" }),
  getters: {
    getToken: (state) => state.token,
    getEmail: (state) => state.email
  },
  actions: {
    async syncFromCartToServer() {}
  },
  persist: {
    storage: persistedState.localStorage
  }
})
