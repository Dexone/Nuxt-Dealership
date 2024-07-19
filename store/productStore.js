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
    async editAllProducts() {
      const getData = await $fetch(`https://dexone.ru/backend_shop/products`, {
        method: 'GET'
      });
      this.allProducts = getData
    },

    async addToCart(value) {
      if (this.user == 1) {
        //если гость (1)
        // this.cart.push(value);
        this.cart[value.id] = 1;
      }
      if (this.user > 1) {
        //если автоизован (>1)
        useUser().addToCart(value);
      }
      this.editQuantity();
      this.findSame();
    },

    async deleteFromCart(value) {
      if (this.user == 1) {
        //если гость (1)
        delete this.cart[value];
      }
      if (this.user > 1) {
        //если автоизован (>1)
        useUser().deleteFromCart(value);
      }
      this.editQuantity();
      this.findSame();
    },

    async plusCart(value) {
      if (this.user == 1) {
        //если гость (1)
        this.cart[value] = this.cart[value] + 1;
      }
      if (this.user > 1) {
        //если автоизован (>1)
        useUser().plusCart(value);
      }
      this.editQuantity();
      this.findSame();
    },

    async minusCart(value) {
      if (this.user == 1) {
        //если гость (1)
        if (this.cart[value] > 1) {
          this.cart[value] = this.cart[value] - 1;
        }
      }
      if (this.user > 1) {
        //если автоизован (>1)
        useUser().minusCart(value);
      }
      this.editQuantity();
      this.findSame();
    },

    findSame() {
      //массив объектов {id: кол-во в корзине}
      if (this.user == 1) {
        // если пользователь гость
        this.simile = {};
        let keys = Object.keys(this.cart); //ключи из объектов в один массив
        let keysNum = keys.map((item) => Number(item)); //строки в массиве в числа
        let values = Object.values(this.cart); //значения из объектов в один массив
        for (let i = 1; i < 23; i++) {
          if (keysNum.indexOf(i) >= 0) {
            this.simile[i] = values[keysNum.indexOf(i)];
          } else {
            this.simile[i] = 0;
          }
        }
      }
      if (this.user > 1) {
        //если пользователь авторизован
        useUser().findSame();
      }
    },

    editQuantity() {
      this.quantity = ['loader', 0, 0]; //кол-во товаров в корзине и их сумма
      if (this.user == 1) {
        //если гость (1)







          let keysNum = Object.keys(this.cart); //ключи из объектов в один массив
          let keys = keysNum.map((item) => Number(item - 1)); //строки в массиве в числа -1 тк из id в индекс
          let values = Object.values(this.cart); //значения из объектов в один массив
          this.quantity[0] = keys.length; //количество
          for (let i = 0; i < this.quantity[0]; i++) {
            this.quantity[1] = this.quantity[1] + values[i] * this.allProducts[keys[i]].price; //сумма = сумма + (количество[индекс в массиве] * цена[индекс в db])
          }
 


          setTimeout(() => {
            let amounts = Object.values(useProduct().simile) //массив количеств товаров в коризине для каждой карточки
                     useProduct().quantity[2] = amounts.reduce(function(a, b){
              return a + b;
          }, 0);
          }, 100);


      }

      if (this.user > 1) {
        //если автоизован (>1)
        useUser().editQuantity();
      }
    }
  },

  persist:  {
    storage: persistedState.localStorage,
  },
});
