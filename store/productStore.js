import { defineStore } from 'pinia';
import { useUser } from './userStore';

export const useProduct = defineStore('productStore', {
  state: () => ({ allProducts: [], cart: {}, simile: {}, user: 1, name: 'guest' }), //user: 1 = guest

  getters: {
    // getAllProducts: (state) => state.allProducts,
    getAllProducts: (state) =>{


      async function getData() {
        const getData = await $fetch(`https://dexone.ru/backend_shop/products`, {
          method: 'GET'
        });
        console.log(getData)
      }
  
getData()

    },



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
    },//ok
    
    // return state.cart.reduce(accumulator, currentValue) => {accumulator + currentValue, initialValue}},
    getCartSumm: (state) => {

      // const total = state.cart.reduce((acc, product) => {
      //   const id = Object.keys(product)[0]
      //   console.log(id)
      //   return (
      //     acc +
      //     product.price *
      //     Object.values(product)[0]
      //   );
      // }, 0);
      // return total.toFixed(2);
      let data
      async function getData() {
        data = await $fetch(`https://dexone.ru/backend_shop/products`, {
          method: 'GET'
        });
        console.log(getData)
      }
let dd = 2
      let ks = Object.keys(state.cart) //[ "1", "2", "6" ] id
      let vs = Object.values(state.cart) //[ 7, 4, 1 ] кол-во


      const total = vs.reduce(function(acumulator, item){
        return acumulator + (item * 2)
      })





            return total
    },
            // todo список продуктов и найти в списке продуктов ценник по id и положить его в product.price
        // svg + loaders + новый проект
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
  persist: {
    storage: persistedState.localStorage,
  },
});
