import { defineStore } from 'pinia';
import { useUser } from './userStore';
import axios from 'axios';

export const useProduct = defineStore('productStore', {
  state: () => ({ allProducts: [], cart: {}, simile: {}, user: 1, name: 'guest', quantity: [] }), //user: 1 = guest

  getters: {
    getAllProducts: (state) => state.allProducts,
    getCart: (state) => state.cart,
    getSimile: (state) => state.simile, //{id всех 22 товаров: кол-во в корзине, если нет 0}
    getUser: (state) => state.user,
    getName: (state) => state.name,
    getQuantity: (state) => state.quantity //[0:кол-во карточек в коризне, 1: сумма товаров в корзине]
  },

  actions: {

    async addToCart(value) {
      if (this.user == 1) { //если гость (1)
        this.cart[value.id] = 1;
      }
      if (this.user > 1) { //если автоизован (>1)
        this.cart[value.id] = 1;
        useUser().syncCart();
      }
    },

    async deleteFromCart(value) {
      if (this.user == 1) { //если гость (1)
        delete this.cart[value];
      }
      if (this.user > 1) { //если автоизован (>1)
        delete this.cart[value];
        useUser().syncCart(); //синхронизация локальной корзины с сервером
      }
    },

    async plusCart(value) {
      if (this.user == 1) { //если гость (1)
        this.cart[value] = this.cart[value] + 1;
      }
      if (this.user > 1) { //если автоизован (>1)
        this.cart[value] = this.cart[value] + 1;
        useUser().syncCart(); //синхронизация локальной корзины с сервером
      }
    },

    async minusCart(value) {
      if (this.user == 1) { //если гость (1)
        if (this.cart[value] > 1) {
          this.cart[value] = this.cart[value] - 1;
        }
      }
      if (this.user > 1) {
        this.cart[value] = this.cart[value] - 1;
        useUser().syncCart(); //синхронизация локальной корзины с сервером
      }
    },

  },

  persist:  {
    storage: persistedState.localStorage,
  },
});
