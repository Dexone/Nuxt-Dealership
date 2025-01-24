import { defineStore } from "pinia"
import { ref } from "vue"

export const useParams = defineStore("paramsStore", {
  state: () => ({
    availableParams: {
      brands: {},
      bodyCar: [],
      transmission: [],
      engine: [],
      color: [],
      power: [999, 0],
      price: [99999999, 0],
      pages: 1
    },
    selectedParams: {
      brand: null,
      modelCar: null,
      bodyCar: [],
      transmission: [],
      power: ["", ""],
      engine: [],
      price: ["", ""],
      color: [],
      page: 1
    },
    searchString: ""
  }),

  getters: {
    getavailableParams: (state) => state.availableParams, // доступные для выбора параметры
    getselectedParams: (state) => state.selectedParams, // выбранные параметры
    getsearchString: (state) => state.searchString // сформированная строка поиска
  },

  actions: {
    async getProducts() {
      // заполнение параметров, доступных для выбора (availableParams) при загрузке страницы //1
      const res = await $fetch(`/api/products`, {
        // запрос количества страниц
        method: "GET"
      })

      for (let i = 1; i <= res.meta.last_page; i++) {
        // получение всех products на всех страницах
        const res = await $fetch(`/api/products?page=${i}`, {
          method: "GET"
        })
        res.existingProduct.map((item, index) => {
          if (
            Object.keys(this.availableParams.brands).includes(item.brand) ===
            false
          ) {
            // пуш объектов только уникальных марок
            this.availableParams.brands[item.brand] = []
          }
          if (
            this.availableParams.brands[item.brand].includes(item.modelCar) ===
            false
          ) {
            // пуш объектов только уникальных моделей
            this.availableParams.brands[item.brand].push(item.modelCar)
          }
          if (this.availableParams.bodyCar.includes(item.bodyCar) === false) {
            // пуш объектов только уникальных кузовов
            this.availableParams.bodyCar.push(item.bodyCar)
          }
          if (
            this.availableParams.transmission.includes(item.transmission) ===
            false
          ) {
            // пуш объектов только уникальных трансмиссий
            this.availableParams.transmission.push(item.transmission)
          }
          if (this.availableParams.engine.includes(item.engine) === false) {
            // пуш объектов только уникальных трансмиссий
            this.availableParams.engine.push(item.engine)
          }
          if (this.availableParams.color.includes(item.color) === false) {
            // пуш объектов только уникальных  цветов
            this.availableParams.color.push(item.color)
          }
          if (this.availableParams.power[0] > item.power) {
            // пуш минимальной мощности из машин в базе данных
            this.availableParams.power[0] = item.power
          }
          if (this.availableParams.power[1] < item.power) {
            // пуш максимальной мощности из машин в базе данных
            this.availableParams.power[1] = item.power
          }
          if (this.availableParams.price[0] > item.price) {
            // пуш минимальной цены из машин в базе данных
            this.availableParams.price[0] = item.price
          }
          if (this.availableParams.price[1] < item.price) {
            // пуш максимальной цены из машин в базе данных
            this.availableParams.price[1] = item.price
          }
        })
      }

      // парсинг поискового запроса из url в selectedParams при загрузке страницы //2
      const paramsArray = decodeURI(window.location.pathname)
        .slice(6)
        .split("&") // массив параметров из url
      console.log(paramsArray)

      for (let i = 0; i < paramsArray.length; i++) {
        await new Promise((res) => setTimeout(res, 100)) // fix не успевают заполняться фильтры
        if (paramsArray[i].split("=")[0] === "brand") {
          this.selectedParams.brand = paramsArray[i].split("=")[1]
        }
        if (paramsArray[i].split("=")[0] === "modelCar") {
          this.selectedParams.modelCar = paramsArray[i].split("=")[1]
        }
        if (paramsArray[i].split("=")[0] === "bodyCar") {
          this.selectedParams.bodyCar.push(paramsArray[i].split("=")[1])
        }
        if (paramsArray[i].split("=")[0] === "transmission") {
          this.selectedParams.transmission.push(paramsArray[i].split("=")[1])
        }
        if (paramsArray[i].split("=")[0] === "engine") {
          this.selectedParams.engine.push(paramsArray[i].split("=")[1])
        }
        if (paramsArray[i].split("=")[0] === "color") {
          this.selectedParams.color.push(paramsArray[i].split("=")[1])
        }

        if (paramsArray[i].split("=")[0] === "page") {
          this.selectedParams.page = paramsArray[i].split("=")[1]
        }
      }
    },

    createSearchString() {
      // формирование поисковой строки из selectedparams, отправка ее в url и редирект по нажатию кнопки
      this.searchString = ""
      if (this.selectedParams.brand !== null) {
        this.searchString =
          this.searchString + "brand=" + this.selectedParams.brand + "&"
      }
      if (this.selectedParams.modelCar !== null) {
        this.searchString =
          this.searchString + "modelCar=" + this.selectedParams.modelCar + "&"
      }

      if (this.selectedParams.bodyCar.length !== 0) {
        this.selectedParams.bodyCar.forEach((element) => {
          this.searchString = this.searchString + "bodyCar=" + element + "&"
        })
      }
      if (this.selectedParams.transmission.length !== 0) {
        this.selectedParams.transmission.forEach((element) => {
          this.searchString =
            this.searchString + "transmission=" + element + "&"
        })
      }

      if (this.selectedParams.engine.length !== 0) {
        this.selectedParams.engine.forEach((element) => {
          this.searchString = this.searchString + "engine=" + element + "&"
        })
      }

      if (this.selectedParams.color.length !== 0) {
        this.selectedParams.color.forEach((element) => {
          this.searchString = this.searchString + "color=" + element + "&"
        })
      }
      this.searchString =
        this.searchString + "page=" + this.selectedParams.page + "&"

      window.location.href = `/cars/${this.searchString}` // редирект
    }
  }

  //   persist: {
  //     storage: persistedState.localStorage,
  //   },
})
