import { defineStore } from "pinia"

import { useToast } from "vue-toast-notification"
import { useUser } from "./userStore"
import "vue-toast-notification/dist/theme-sugar.css"

const $toast = useToast()

export const useFavourite = defineStore("favouriteStore", {
  state: () => ({
    localFavourite: []
  }),

  getters: {
    getQuantityFavourite: (state) => {
      //количество товаров в изрбанном
      return state.localFavourite.reduce(function (accumulator, item) {
        accumulator = accumulator + item.quantity
        return accumulator
      }, 0)
    }
  },

  actions: {
    async addToFavourite(car) {
      // добавление товара в корзину
      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const res = await $fetch("/api/favorite/add", {
          method: "POST",
          headers: {
            Authorization: `${useUser().token}`
          },
          body: {
            email: useUser().email,
            productId: car.productId,
            quantity: 1
          }
        })
        await this.getFavourite()
      }
      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        let a = null
        if(car.image[1].slice(car.image[1].length - 11) === 'used/1.webp'){ 
       a = await $fetch(`/api/used_product/${car._id}`, {})
        }
       else {
          a = await $fetch(`/api/product/${car._id}`, {})
           }
        this.localFavourite.push({ product: a.data, quantity: 1 })
      }
      $toast.success("Добавлено в избранное", {
        position: "bottom"
      })
      console.log(this.localFavourite)
    },

    async removeFavourite(car) {
      // удаление товара из корзины
      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const res = await $fetch("/api/favorite/remove", {
          method: "DELETE",
          headers: {
            Authorization: `${useUser().token}`
          },
          body: {
            email: useUser().email,
            productId: car.productId
          }
        })
        await this.getFavourite()
      }
      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        this.localFavourite.forEach((element, index) => {
          if (element.product._id === car._id) {
            this.localFavourite.splice(index, 1)
          }
        })
      }
      $toast.error("Удалено из корзины", {
        position: "bottom"
      })
    },

    async getFavourite() {
      // получение корзины
      if (useUser().token.length > 1) {
        // если пользователь авторизован
        const a = await $fetch(`/api/favorite`, {
          headers: {
            Authorization: `${useUser().token}`,
            email: `${useUser().email}`
          }
        })
        this.localFavourite = a.favoriteList
        return this.localFavourite
      }
      if (useUser().token.length === 0) {
        // если пользователь не авторизован
        console.log(this.localFavourite)
        return this.localFavourite
      }
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
