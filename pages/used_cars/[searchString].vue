<template>
  <main class="bg-white max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto mb-3">
      <Filters />
    </div>

    <template v-if="mainInfo?.length > 0">
      <div
        v-for="main in mainInfo"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"
      >
        <CardProduct :car="main" v-if="main.price >= paramsStore.selectedParams.price[0] && main.price <= paramsStore.selectedParams.price[1] && main.power >= paramsStore.selectedParams.power[0] && main.power <= paramsStore.selectedParams.power[1]" />
      </div>
    </template>

    <Pagiation />
  </main>
</template>

<script setup>
import { ref } from "vue"
import { useParams } from "@/store/paramsStore"
import Filters from "@/src/components/index/filters.vue"
import Pagiation from "@/src/components/index/pagination.vue"
import CardProduct from "@/src/components/index/CardProduct.vue"
const paramsStore = useParams()
const route = useRoute()

const mainInfo = ref(null)
async function getProducts() {
  mainInfo.value = null
  // try {
  const { data } = await useApiCarData(
    `api/used_products?${route.params.searchString}`
  )
  try {
    paramsStore.availableParams.pages = data.value.meta.last_page // пуш количества доступных страниц после применения фильров
  } catch (e) {
    // если ошибка (количество страниц меньше, чем выбранная страница) переброс на 1 page
    paramsStore.selectedParams.page = 1
    paramsStore.createSearchString()
  }

  const mainData = data.value.existingProduct.map((item, index) => {
    return {
      productId: data.value.existingProduct[index].productId,
      _id: data.value.existingProduct[index]._id,
      brand: data.value.existingProduct[index].brand,
      modelCar: data.value.existingProduct[index].modelCar,
      year: data.value.existingProduct[index].year,
      power: data.value.existingProduct[index].power,
      bodyCar: data.value.existingProduct[index].bodyCar,
      transmission: data.value.existingProduct[index].transmission,
      engine: data.value.existingProduct[index].engine,
      color: data.value.existingProduct[index].color,
      price: data.value.existingProduct[index].price,
      image: {
        1: data.value.existingProduct[index].image[0][1],
        2: data.value.existingProduct[index].image[0][2],
        3: data.value.existingProduct[index].image[0][3],
        4: data.value.existingProduct[index].image[0][4],
        5: data.value.existingProduct[index].image[0][5]
      }
    }
  })
  mainInfo.value = mainData
  // } catch (e) {
  // console.log(e.message)
  // toast show with erro
  // }
}
getProducts()

useHead({
  title: "Купить новые автомобили с гарантией"
})
</script>
