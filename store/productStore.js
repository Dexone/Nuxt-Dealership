import { defineStore } from 'pinia';
import { useUser } from './userStore';

export const useProduct = defineStore('productStore', {
  state: () => ({ allProducts: [], cart: {}, simile: {}, user: 1, name: 'guest'}), //user: 1 = guest

  getters: {
    getAllProducts: (state) => state.allProducts,
    getCart: (state) => state.cart,
    getSimile: (state) => state.simile, //{id всех 22 товаров: кол-во в корзине, если нет 0}
    getUser: (state) => state.user,
    getName: (state) => state.name,
    getQuantity: (state) => {
        let count = 0;
        Object.values(state.cart).forEach((item) => {
          count += item;
        }); //todo переписать на reduce 
        return count;
      },
      // return state.cart.reduce(accumulator, currentValue) => {accumulator + currentValue, initialValue}},
    getCartSumm: (state) => {
      const total = state.cart.reduce((acc, product) => {
        const id = Object.keys(product)[0]
        // todo список продуктов и найти в списке продуктов ценник по id и положить его в product.price
        // svg + loaders + новый проект
          return (
            acc +
            product.price *
              Object.values(product)[0]
          );
      }, 0);
      return total.toFixed(2);
    },
  },

  actions: {

    async addToCart(value) {
      if (this.user == 1) { //если гость (1)
        this.cart[value.id] = 1;
      }
      if (this.user > 1) { //если автоизован (>1)
        this.cart[value.id] = 1;
        useUser().syncFromCartToServer();
      }
    },

    async deleteFromCart(value) {
      if (this.user == 1) { //если гость (1)
        delete this.cart[value];
      }
      if (this.user > 1) { //если автоизован (>1)
        delete this.cart[value];
        useUser().syncFromCartToServer(); //синхронизация локальной корзины с сервером
      }
    },

    async plusCart(value) {
      if (this.user == 1) { //если гость (1)
        this.cart[value] = this.cart[value] + 1;
      }
      if (this.user > 1) { //если автоизован (>1)
        this.cart[value] = this.cart[value] + 1;
        useUser().syncFromCartToServer(); //синхронизация локальной корзины с сервером
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
        useUser().syncFromCartToServer(); //синхронизация локальной корзины с сервером
      }
    },

  },

  persist:  {
    storage: persistedState.localStorage,
  },
});
