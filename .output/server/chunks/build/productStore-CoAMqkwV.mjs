import { e as defineStore } from './server.mjs';
import axios from 'axios';

const cart = [
  {
    id: 1,
    carts: {}
  },
  {
    id: 2,
    carts: {
      "1": 1,
      "2": 1,
      "3": 1
    }
  },
  {
    id: 3,
    carts: {
      "1": 1,
      "2": 1
    }
  },
  {
    id: 4,
    carts: {
      "1": 1
    }
  },
  {
    id: 5,
    carts: {
      "1": 1
    }
  },
  {
    id: 6,
    carts: {
      "2": 2
    }
  },
  {
    id: 7,
    carts: {}
  },
  {
    id: 8,
    carts: {}
  }
];
const favourite = [
  {
    id: 1,
    favourites: "13"
  },
  {
    id: 3,
    favourites: "12"
  },
  {
    id: 4,
    favourites: {}
  },
  {
    id: 5,
    favourites: {}
  },
  {
    id: 6,
    favourites: {}
  },
  {
    id: 7,
    favourites: {}
  },
  {
    id: 8,
    favourites: {}
  }
];
const users = [
  {
    id: 1,
    login: "guest",
    pass: "guest"
  },
  {
    id: 2,
    login: "dima",
    pass: "martynoiv"
  },
  {
    id: 3,
    login: "dima2",
    pass: "martynov2"
  },
  {
    id: 4,
    login: "dimaa",
    pass: "martynovv"
  },
  {
    id: 5
  },
  {
    id: 6,
    login: "",
    pass: ""
  },
  {
    id: 7,
    login: "dimaaa",
    pass: "martynovv"
  },
  {
    id: 8,
    login: "1",
    pass: "1"
  }
];
const products = [
  {
    id: 1,
    brand: "Kia",
    model: "Carnival",
    year: "2022",
    power: "249",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u0432\u044D\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u041A\u0440\u0430\u0441\u043D\u044B\u0439",
    price: 4934900,
    image: {
      "1": "/id1/1.png",
      "2": "/id1/2.png",
      "3": "/id1/3.png",
      "4": "/id1/4.png",
      "5": "/id1/5.png"
    }
  },
  {
    id: 2,
    brand: "Kia",
    model: "Ceed",
    year: "2022",
    power: "128",
    kuzov: "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0427\u0435\u0440\u043D\u044B\u0439",
    price: 2614900,
    image: {
      "1": "/id2/1.png",
      "2": "/id2/2.png",
      "3": "/id2/3.png",
      "4": "/id2/4.png",
      "5": "/id2/5.png"
    }
  },
  {
    id: 3,
    brand: "Kia",
    model: "Ceed SW",
    year: "2022",
    power: "128",
    kuzov: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0427\u0435\u0440\u043D\u044B\u0439",
    price: 3194900,
    image: {
      "1": "/id3/1.png",
      "2": "/id3/2.png",
      "3": "/id3/3.png",
      "4": "/id3/4.png",
      "5": "/id3/5.png"
    }
  },
  {
    id: 4,
    brand: "Kia",
    model: "Cerato",
    year: "2022",
    power: "128",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u041C\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0435\u0440\u044B\u0439",
    price: 297e4,
    image: {
      "1": "/id4/1.png",
      "2": "/id4/2.png",
      "3": "/id4/3.png",
      "4": "/id4/5.png",
      "5": "/id4/5.png"
    }
  },
  {
    id: 5,
    brand: "Kia",
    model: "K5",
    year: "2022",
    power: "150",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0411\u0435\u043B\u044B\u0439",
    price: 2734900,
    image: {
      "1": "/id5/1.png",
      "2": "/id5/2.png",
      "3": "/id5/3.png",
      "4": "/id5/4.png",
      "5": "/id5/5.png"
    }
  },
  {
    id: 6,
    brand: "Kia",
    model: "K9",
    year: "2022",
    power: "249",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0427\u0435\u0440\u043D\u044B\u0439",
    price: 7374900,
    image: {
      "1": "/id6/1.png",
      "2": "/id6/2.png",
      "3": "/id6/3.png",
      "4": "/id6/4.png",
      "5": "/id6/5.png"
    }
  },
  {
    id: 7,
    brand: "Kia",
    model: "Rio X",
    year: "2022",
    power: "123",
    kuzov: "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u041A\u043E\u0440\u0438\u0447\u043D\u0435\u0432\u044B\u0439",
    price: 2545900,
    image: {
      "1": "/id7/1.png",
      "2": "/id7/2.png",
      "3": "/id7/3.png",
      "4": "/id7/4.png",
      "5": "/id7/5.png"
    }
  },
  {
    id: 8,
    brand: "Kia",
    model: "Seltos",
    year: "2022",
    power: "149",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0438\u043D\u0438\u0439",
    price: 2799900,
    image: {
      "1": "/id8/1.png",
      "2": "/id8/2.png",
      "3": "/id8/3.png",
      "4": "/id8/4.png",
      "5": "/id8/5.png"
    }
  },
  {
    id: 9,
    brand: "Kia",
    model: "Sorento",
    year: "2022",
    power: "179",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u041A\u0440\u0430\u0441\u043D\u044B\u0439",
    price: 4344900,
    image: {
      "1": "/id9/1.png",
      "2": "/id9/2.png",
      "3": "/id9/3.png",
      "4": "/id9/4.png",
      "5": "/id9/5.png"
    }
  },
  {
    id: 10,
    brand: "Kia",
    model: "Soul",
    year: "2022",
    power: "123",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0438\u043D\u0438\u0439",
    price: 2204900,
    image: {
      "1": "/id10/1.png",
      "2": "/id10/2.png",
      "3": "/id10/3.png",
      "4": "/id10/4.png",
      "5": "/id10/5.png"
    }
  },
  {
    id: 11,
    brand: "Kia",
    model: "Sportage",
    year: "2022",
    power: "190",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0427\u0435\u0440\u043D\u044B\u0439",
    price: 4823200,
    image: {
      "1": "/id11/1.png",
      "2": "/id11/2.png",
      "3": "/id11/3.png",
      "4": "/id11/4.png",
      "5": "/id11/5.png"
    }
  },
  {
    id: 12,
    brand: "Kia",
    model: "Stinger",
    year: "2022",
    power: "247",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0438\u043D\u0438\u0439",
    price: 5374900,
    image: {
      "1": "/id12/1.png",
      "2": "/id12/2.png",
      "3": "/id12/3.png",
      "4": "/id12/4.png",
      "5": "/id12/5.png"
    }
  },
  {
    id: 13,
    brand: "Volkswagen",
    model: "Tiguan",
    year: "2024",
    power: "150",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0427\u0435\u0440\u043D\u044B\u0439",
    price: 495e4,
    image: {
      "1": "/id13/1.png",
      "2": "/id13/2.png",
      "3": "/id13/3.png",
      "4": "/id13/4.png",
      "5": "/id13/5.png"
    }
  },
  {
    id: 14,
    brand: "Hyundai",
    model: "Solaris",
    year: "2022",
    power: "123",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u041A\u0440\u0430\u0441\u043D\u044B\u0439",
    price: 2108e3,
    image: {
      "1": "/id14/1.png",
      "2": "/id14/2.png",
      "3": "/id14/3.png",
      "4": "/id14/4.png",
      "5": "/id14/5.png"
    }
  },
  {
    id: 15,
    brand: "BMW",
    model: "X7",
    year: "2023",
    power: "340",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0411\u0435\u043B\u044B\u0439",
    price: 935e4,
    image: {
      "1": "/id15/1.png",
      "2": "/id15/2.png",
      "3": "/id15/3.png",
      "4": "/id15/4.png",
      "5": "/id15/5.png"
    }
  },
  {
    id: 16,
    brand: "BMW",
    model: "X6",
    year: "2023",
    power: "530",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0435\u0440\u044B\u0439",
    price: 84e5,
    image: {
      "1": "/id16/1.png",
      "2": "/id16/2.png",
      "3": "/id16/3.png",
      "4": "/id16/4.png",
      "5": "/id16/5.png"
    }
  },
  {
    id: 17,
    brand: "BMW",
    model: "X2",
    year: "2023",
    power: "192",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0414\u0438\u0437\u0435\u043B\u044C",
    color: "\u0421\u0438\u043D\u0438\u0439",
    price: 352e4,
    image: {
      "1": "/id17/1.png",
      "2": "/id17/2.png",
      "3": "/id17/3.png",
      "4": "/id17/4.png",
      "5": "/id17/5.png"
    }
  },
  {
    id: 18,
    brand: "BMW",
    model: "3",
    year: "2023",
    power: "190",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0411\u0435\u043B\u044B\u0439",
    price: 393e4,
    image: {
      "1": "/id18/1.png",
      "2": "/id18/2.png",
      "3": "/id18/3.png",
      "4": "/id18/4.png",
      "5": "/id18/5.png"
    }
  },
  {
    id: 19,
    brand: "BMW",
    model: "7",
    year: "2023",
    power: "280",
    kuzov: "\u0421\u0435\u0434\u0430\u043D",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E",
    color: "\u0421\u0438\u043D\u0438\u0439",
    price: 1109e4,
    image: {
      "1": "/id19/1.png",
      "2": "/id19/2.png",
      "3": "/id19/3.png",
      "4": "/id19/4.png",
      "5": "/id19/5.png"
    }
  },
  {
    id: 20,
    brand: "Hyundai",
    model: "Creta",
    year: "2022",
    power: "123",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u041A\u0440\u0430\u0441\u043D\u044B\u0439",
    price: 2904900,
    image: {
      "1": "/id20/1.png",
      "2": "/id20/2.png",
      "3": "/id20/3.png",
      "4": "/id20/4.png",
      "5": "/id20/5.png"
    }
  },
  {
    id: 21,
    brand: "Hyundai",
    model: "Tucson",
    year: "2022",
    power: "186",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0435\u0440\u044B\u0439",
    price: 4449900,
    image: {
      "1": "/id21/1.png",
      "2": "/id21/2.png",
      "3": "/id21/3.png",
      "4": "/id21/4.png",
      "5": "/id21/5.png"
    }
  },
  {
    id: 22,
    brand: "Hyundai",
    model: "Santa FE",
    year: "2022",
    power: "180",
    kuzov: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",
    transmission: "\u0410\u041A\u041F\u041F",
    engine: "\u0411\u0435\u043D\u0437\u0438\u043D",
    color: "\u0421\u0435\u0440\u044B\u0439",
    price: 5320800,
    image: {
      "1": "/id22/1.png",
      "2": "/id22/2.png",
      "3": "/id22/3.png",
      "4": "/id22/4.png",
      "5": "/id22/5.png"
    }
  }
];
const db = {
  cart,
  favourite,
  users,
  products
};
const useUser = defineStore("userStore", {
  state: () => ({ userInfo: {} }),
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    async getDataCarts() {
      const getData = await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: "GET"
      });
      return getData.carts;
    },
    async addToCart(value) {
      const editData = await this.getDataCarts();
      console.log(editData);
      editData[value.id] = 1;
      await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: "PATCH",
        body: { carts: editData }
      });
    },
    async deleteFromCart(value) {
      const editData = await this.getDataCarts();
      delete editData[value];
      await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: "PATCH",
        body: { carts: editData }
      });
    },
    async plusCart(value) {
      const editData = await this.getDataCarts();
      editData[value] = editData[value] + 1;
      await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
        method: "PATCH",
        body: { carts: editData }
      });
    },
    async minusCart(value) {
      const editData = await this.getDataCarts();
      if (editData[value] > 1) {
        editData[value] = editData[value] - 1;
        await $fetch(`https://dexone.ru/backend_shop/cart/${useProduct().user}`, {
          method: "PATCH",
          body: { carts: editData }
        });
      }
    },
    findSame() {
      setTimeout(() => {
        axios.get(`https://dexone.ru/backend_shop/cart/${useProduct().user}`).then((res) => {
          useProduct().simile = [];
          let keys = Object.keys(res.data.carts);
          let keysNum = keys.map((item) => Number(item));
          let values = Object.values(res.data.carts);
          for (let i = 1; i <= db.products.length; i++) {
            if (keysNum.indexOf(i) >= 0) {
              useProduct().simile[i] = values[keysNum.indexOf(i)];
            } else {
              useProduct().simile[i] = 0;
            }
          }
        });
      }, 500);
    },
    editQuantity() {
      setTimeout(() => {
        axios.get(`https://dexone.ru/backend_shop/cart/${useProduct().user}`).then((res) => {
          let keysNum = Object.keys(res.data.carts);
          let keys = keysNum.map((item) => Number(item - 1));
          let values = Object.values(res.data.carts);
          useProduct().quantity[0] = keys.length;
          for (let i = 0; i < useProduct().quantity[0]; i++) {
            useProduct().quantity[1] = useProduct().quantity[1] + values[i] * db.products[keys[i]].price;
          }
        });
      }, 500);
    }
  },
  persist: true
});
const useProduct = defineStore("productStore", {
  state: () => ({ cart: {}, simile: {}, user: 1, name: "guest", quantity: [] }),
  //user: 1 = guest
  getters: {
    getCart: (state) => state.cart,
    getSimile: (state) => state.simile,
    getUser: (state) => state.user,
    getName: (state) => state.name,
    getQuantity: (state) => state.quantity
  },
  actions: {
    async addToCart(value) {
      if (this.user == 1) {
        this.cart[value.id] = 1;
      }
      if (this.user > 1) {
        useUser().addToCart(value);
      }
      this.editQuantity();
      this.findSame();
    },
    async deleteFromCart(value) {
      if (this.user == 1) {
        delete this.cart[value];
      }
      if (this.user > 1) {
        useUser().deleteFromCart(value);
      }
      this.editQuantity();
      this.findSame();
    },
    async plusCart(value) {
      if (this.user == 1) {
        this.cart[value] = this.cart[value] + 1;
      }
      if (this.user > 1) {
        useUser().plusCart(value);
      }
      this.editQuantity();
      this.findSame();
    },
    async minusCart(value) {
      if (this.user == 1) {
        if (this.cart[value] > 1) {
          this.cart[value] = this.cart[value] - 1;
        }
      }
      if (this.user > 1) {
        useUser().minusCart(value);
      }
      this.editQuantity();
      this.findSame();
    },
    findSame() {
      if (this.user == 1) {
        this.simile = {};
        let keys = Object.keys(this.cart);
        let keysNum = keys.map((item) => Number(item));
        let values = Object.values(this.cart);
        for (let i = 1; i < 23; i++) {
          if (keysNum.indexOf(i) >= 0) {
            this.simile[i] = values[keysNum.indexOf(i)];
          } else {
            this.simile[i] = 0;
          }
        }
      }
      if (this.user > 1) {
        useUser().findSame();
      }
    },
    editQuantity() {
      this.quantity = ["loader", 0];
      if (this.user == 1) {
        let keysNum = Object.keys(this.cart);
        let keys = keysNum.map((item) => Number(item - 1));
        let values = Object.values(this.cart);
        this.quantity[0] = keys.length;
        for (let i = 0; i < this.quantity[0]; i++) {
          this.quantity[1] = this.quantity[1] + values[i] * db.products[keys[i]].price;
        }
      }
      if (this.user > 1) {
        useUser().editQuantity();
      }
    }
  },
  persist: true
});

export { useProduct as u };
//# sourceMappingURL=productStore-CoAMqkwV.mjs.map
