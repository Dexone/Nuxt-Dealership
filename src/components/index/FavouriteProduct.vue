<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"
  >
    <div class="flex items-center justify-between ml-4 mt-4 pr-2">
      <h5 class="mb-1 text-xl font-medium text-gray-900">
        {{ favourite.brand }} {{ favourite.modelCar }}
      </h5>
      <button
        type="button"
        @click="removeFavourite(favourite)"
        class="z-9999 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        data-modal-hide="default-modal"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
    <NuxtLink :to="`/product/${favourite._id}`">
      <p class="text-sm text-gray-500 ml-4 mr-4 h-10">
        {{ favourite.year }}г. / {{ favourite.power }}л.с. /
        {{ favourite.engine }} / {{ favourite.transmission }} /
        {{ favourite.bodyCar }} / {{ favourite.color }}
      </p>

      <div class="flex flex-col items-center h-48">
        <img class="rounded-t-lg" :src="favourite.image[0][1]" />
      </div>
      <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4">
        {{ favourite.price.toLocaleString() }} ₽
      </h5>
      <span class="text-sm text-gray-500 ml-4">
        {{ Math.round(favourite.price / 84).toLocaleString() }} ₽/мес</span
      >
    </NuxtLink>

    <!-- кн-и купить и перейти в корзину (ключ количества данного товара в корзине) -->
    <div
      class="mx-auto max-w-fit"
      :key="
        quantityCart = Object.values(cartStore.localCart).reduce(function (
          accumulator,
          item
        ) {
          if (item.product._id === favourite._id) {
            accumulator = item.quantity
          }
          return accumulator
        }, 0)
      "
    >
      <!-- кн-а купить если нет товара в корзине -->
      <button
        v-if="quantityCart === 0"
        @click="addToCart(favourite)"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
      >
        Добавить в корзину
      </button>
      <!-- кн-а перейти в корзину если товар в корзине -->
      <NuxtLink v-if="quantityCart > 0" to="/cart">
        <button
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          В корзине >
        </button>
      </NuxtLink>
    </div>
  </div>

  <!-- <div class="mx-auto max-w-fit" :key="quantityFavourite = Object.values(favouriteStore.localFavourite).reduce(function (
      accumulator,
      item
    ) {
      if (item.product._id === favourite._id) {
        accumulator = item.quantity
      }
      return accumulator
    }, 0)
      ">
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Добавить в корзину{{ quantityFavourite }}</button>
  </div> -->
</template>

<script setup>
import { ref } from "vue"
import { useCart } from "../store/cartStore"
import { useFavourite } from "../store/favouriteStore"

const cartStore = useCart()
const favouriteStore = useFavourite()

defineProps({
  favourite: Object
})

const loaderCart = ref(false)
async function addToCart(value) {
  loaderCart.value = true
  await cartStore.addToCart(value)
  loaderCart.value = false
}

const loaderFavourite = ref(false)
async function removeFavourite(value) {
  loaderFavourite.value = true
  await favouriteStore.removeFavourite(value)
  loaderFavourite.value = false
}
</script>
