import { defineStore } from "pinia"
import { useToast } from "vue-toast-notification"
import { useUser } from "./userStore"
import "vue-toast-notification/dist/theme-sugar.css"
const $toast = useToast()

export const useCart = defineStore("cartStore", {
  state: () => ({
    localCart: []
  }),

  getters: {
    getSumCart: (state) => {
      // сумма товаров в корзине
      return state.localCart.reduce(function (accumulator, item) {
        accumulator = accumulator + item.quantity * item.product.price
        return accumulator
      }, 0)
    },
    getQuantityCart: (state) => {
      // количество товаров в корзине
      return state.localCart.reduce(function (accumulator, item) {
        accumulator = accumulator + item.quantity
        return accumulator
      }, 0)
    }
  },

  actions: {
    async addToCart(car) {
      // добавление товара в корзину
      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const res = await $fetch("/api/cart/add", {
          method: "POST",
          headers: {
            Authorization: `${useUser().token}`
          },
          body: {
            email: useUser().email,
            productId: car.id,
            quantity: 1
          }
        })
        await this.getCart()
      }
      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        const a = await $fetch(`/api/product/${car._id}`, {})
        this.localCart.push({ product: a.data, quantity: 1 })
      }
      $toast.success("Добавлено в корзину", {
        position: "bottom"
      })
    },

    async removeCart(car) {
      // удаление товара из корзины
      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const res = await $fetch("/api/cart/remove", {
          method: "DELETE",
          headers: {
            Authorization: `${useUser().token}`
          },
          body: {
            email: useUser().email,
            productId: car.id
          }
        })
        await this.getCart()
      }
      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        this.localCart.forEach((element, index) => {
          if (element.product._id === car._id) {
            this.localCart.splice(index, 1)
          }
        })
      }
      $toast.error("Удалено из корзины", {
        position: "bottom"
      })
    },

    async getCart() {
      // получение корзины
      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const a = await $fetch(`/api/cart`, {
          headers: {
            Authorization: `${useUser().token}`,
            email: `${useUser().email}`
          }
        })
        this.localCart = a.cart
        return this.localCart
      }
      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        return this.localCart
      }
    },

    async editCartMinus(car) {
      // уменьшение кол-ва товаров в корзине

      let quantity = 0
      Object.values(this.localCart).forEach((element) => {
        if (element.product._id === car._id) {
          quantity = element.quantity
        }
      }) // получение quantity элемента

      if (useUser().token.length > 1) {
        // если пользователь авторизован
        if (quantity > 1) {
          // если кол-во больше 1, уменьшение
          const res = await $fetch("/api/cart/update", {
            method: "PATCH",
            headers: {
              Authorization: `${useUser().token}`
            },
            body: {
              productId: car.id,
              email: useUser().email,
              quantity: quantity - 1
            }
          })
        }
        if (quantity <= 1) {
          // если количество = 1, удаление товара
          this.removeCart(car)
        }
        await this.getCart()
      }

      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        if (quantity > 1) {
          // если кол-во больше 1, уменьшение
          Object.values(this.localCart).forEach((element) => {
            if (element.product._id === car._id) {
              element.quantity--
            }
          })
        }
        if (quantity <= 1) {
          // если количество = 1, удаление товара
          this.removeCart(car)
        }
      }
    },

    async editCartPlus(car) {
      // увеличение кол-ва товаров в корзине

      let quantity = 0
      Object.values(this.localCart).forEach((element) => {
        if (element.product._id === car._id) {
          quantity = element.quantity
        }
      }) // получение quantity элемента

      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const res = await $fetch("/api/cart/update", {
          method: "PATCH",
          headers: {
            Authorization: `${useUser().token}`
          },
          body: {
            productId: car.id,
            email: useUser().email,
            quantity: quantity + 1
          }
        })
        await this.getCart()
      }

      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        this.localCart.forEach((element) => {
          if (element.product._id === car._id) {
            element.quantity++
          }
        })
      }
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
