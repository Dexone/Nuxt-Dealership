<template>
  <main class="bg-white max-w-7xl mx-auto">
    <a v-for="(favouriteItem, index) in favouriteStore.localFavourite">
      <FavouriteProduct :favourite="favouriteItem.product" />
    </a>
  </main>
  <!-- {{ favouriteStore.localFavourite }} -->
  <!--
  <div
    v-if="Object.keys(favouriteStore.favourite).length === 0"
    class="bg-gray-50 border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 max-w-6xl"
  >
    <div class="font-medium text-lg">В избранном пусто</div>
    <div class="text-gray-500 font-light text-sm">
      Воспользуйтесь поиском, чтобы найти все, что нужно.
    </div>
    <div class="text-gray-500 font-light text-sm">
      Если в избранном были товары, войдите, чтобы посмотреть список.
    </div>
    <div class="text-gray-500 font-light text-sm">
      <NuxtLink to="/cars">
        <button
          type="button"
          class="bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none"
        >
          На главную
        </button>
      </NuxtLink>
    </div>
  </div> -->
</template>

<script setup>
import { useFavourite } from "../store/favouriteStore"
import FavouriteProduct from "~/src/components/index/FavouriteProduct.vue"

const favouriteStore = useFavourite()

// useHead({
//   title: "Избранное"
// })

// const mainInfo = ref()
// async function update() {
//   const { data } = await useFetch(`https://dexone.ru/backend_shop/products`)
//   const mainData = data.value.map((item, index) => {
//     return {
//       id: data.value[index].id,
//       brand: data.value[index].brand,
//       model: data.value[index].model,
//       year: data.value[index].year,
//       power: data.value[index].power,
//       kuzov: data.value[index].kuzov,
//       transmission: data.value[index].transmission,
//       engine: data.value[index].engine,
//       color: data.value[index].color,
//       price: data.value[index].price,
//       image: {
//         1: data.value[index].image[1],
//         2: data.value[index].image[2],
//         3: data.value[index].image[3],
//         4: data.value[index].image[4],
//         5: data.value[index].image[5]
//       }
//     }
//   })
//   mainInfo.value = mainData
// }
// update()
</script>
