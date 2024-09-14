import { defineStore } from 'pinia';
import { useUser } from './userStore';
import axios from 'axios';
import { ref } from 'vue';

export const useProduct = defineStore('productStore', {
  state: () => ({ allProducts: [], cart: {}, simile: {}, user: 1, name: 'guest' }), //user: 1 = guest

  getters: {
    getAllProducts: (state) => state.allProducts,
//     getAllProducts: (state) =>{


//       async function getData() {
//         const getData = await $fetch(`https://dexone.ru/backend_shop/products`, {
//           method: 'GET'
//         });

//       }
  
// getData()

//     },

    getCart: (state) => state.cart,
    getSimile: (state) => state.simile, //{id всех 22 товаров: кол-во в корзине, если нет 0}
    getUser: (state) => state.user,
    getName: (state) => state.name,
    getQuantity: (state) => {
      return Object.values(state.cart).reduce(function(accumulator, item){
        accumulator  = accumulator +=item
        return accumulator
    }, 0)
    },

    getCartSumm: (state) => {
    return Object.values(state.cart).reduce(function(accumulator, item, index){
       accumulator  = accumulator + (item*state.allProducts[Object.keys(state.cart)[index]-1].price)
       return accumulator
   }, 0)
    },
        // svg + loaders + новый проект
  },

  actions: {
      async  getProducts() {
        this.allProducts = await $fetch(`https://dexone.ru/backend_shop/products`, {
          method: 'GET'
        });
      },
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
  persist: {
    storage: persistedState.localStorage,
  },
});
