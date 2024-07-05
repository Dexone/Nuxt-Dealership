import { e as defineStore } from './server.mjs';
import { u as useProduct } from './productStore-CoAMqkwV.mjs';
import axios from 'axios';

const useFavouriteUser = defineStore("favouriteUser", {
  state: () => ({}),
  getters: {},
  actions: {
    async addToFavourite(value) {
      const getData = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: "GET"
      });
      let editData = getData.favourites;
      editData[value.id] = 1;
      await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: "PATCH",
        body: { favourites: editData }
      });
    },
    async deleteFromFavourite(value) {
      const getData = await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: "GET"
      });
      let editData = getData.favourites;
      delete editData[value];
      await $fetch(`https://dexone.ru/backend_shop/favourite/${useProduct().user}`, {
        method: "PATCH",
        body: { favourites: editData }
      });
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
  persist: true
});
const useFavourite = defineStore("favouriteStore", {
  state: () => ({ favourite: {}, simile: {} }),
  getters: {
    getFavourite: (state) => state.favourite,
    getSimile: (state) => state.simile
  },
  actions: {
    async addToFavourite(value) {
      if (useProduct().user == 1) {
        this.favourite[value.id] = 1;
      }
      if (useProduct().user > 1) {
        useFavouriteUser().addToFavourite(value);
      }
    },
    async deleteFromFavourite(value) {
      if (useProduct().user == 1) {
        delete this.favourite[value];
      }
      if (useProduct().user > 1) {
        useFavouriteUser().deleteFromFavourite(value);
      }
    },
    findFavourite() {
      if (useProduct().user == 1) {
        this.simile = {};
        let keys = Object.keys(this.favourite);
        let keysNum = keys.map((item) => Number(item));
        let values = Object.values(this.favourite);
        for (let i = 1; i < 23; i++) {
          if (keysNum.indexOf(i) >= 0) {
            this.simile[i] = values[keysNum.indexOf(i)];
          } else {
            this.simile[i] = 0;
          }
        }
      }
      if (useProduct().user > 1) {
        useFavouriteUser().findFavourite();
      }
    }
  },
  persist: true
});

export { useFavourite as u };
//# sourceMappingURL=productFavourite-CaJd8aBL.mjs.map
