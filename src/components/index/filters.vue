<template>
  <a
    class="block relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow mx-5"
  >
    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Марка:</label
      >
      <Multiselect
        v-model="paramsStore.selectedParams.brand"
        :options="Object.keys(paramsStore.availableParams.brands)"
        placeholder="Любая"
        mode="single"
        class="multiselect-blue"
        @change="paramsStore.selectedParams.modelCar = null"
      />
    </div>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Модель:</label
      >
      <Multiselect
        v-model="paramsStore.selectedParams.modelCar"
        :options="
          paramsStore.availableParams.brands[paramsStore.selectedParams.brand]
        "
        placeholder="Любая"
        mode="single"
        class="multiselect-blue"
        :disabled="paramsStore.selectedParams.brand === null"
      />
    </div>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Кузов:</label
      >
      <Multiselect
        v-model="paramsStore.selectedParams.bodyCar"
        :options="paramsStore.availableParams.bodyCar"
        placeholder="Любой"
        mode="tags"
        class="multiselect-blue"
      />
    </div>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Трансмиссия:</label
      >
      <Multiselect
        v-model="paramsStore.selectedParams.transmission"
        :options="paramsStore.availableParams.transmission"
        placeholder="Любая"
        mode="tags"
        class="multiselect-blue"
      />
    </div>

    <form class="w-72 mt-2 mr-2 inline-block">
      <label class="block mb-2 text-sm font-medium text-gray-900"
        >Мощность двигателя:</label
      >

      <div>
        <Slider
          v-model="sliderPower"
          :tooltips="false"
          class="slider-blue ml-5 mr-5"
          :step="1"
          :min="0"
          :max="paramsStore.availableParams.power[1]"
          :lazy="false"
        />
      </div>

      <div class="flex">
        <input
          v-model="paramsStore.selectedParams.power[0]"
          :placeholder="paramsStore.availableParams.power[0]"
          class="rounded-none rounded-s-md bg-gray-0 border border-e-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Цена от"
        />
        <input
          v-model="paramsStore.selectedParams.power[1]"
          :placeholder="paramsStore.availableParams.power[1]"
          class="rounded-none rounded-e-lg bg-gray-0 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Цена до"
        />
      </div>
    </form>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Двигатель:</label
      >
      <Multiselect
        v-model="paramsStore.selectedParams.engine"
        :options="paramsStore.availableParams.engine"
        placeholder="Любой"
        mode="tags"
        class="multiselect-blue"
      />
    </div>

    <form class="w-72 inline-block mr-2">
      <label class="block mb-2 text-sm font-medium text-gray-900">Цена:</label>

      <div>
        <Slider
          v-model="sliderPrice"
          :step="1"
          :tooltips="false"
          class="slider-blue ml-5 mr-5"
          :min="0"
          :max="paramsStore.availableParams.price[1]"
          :lazy="false"
        />
      </div>

      <div class="flex">
        <input
          v-model="paramsStore.selectedParams.price[0]"
          :placeholder="paramsStore.availableParams.price[0]"
          class="rounded-none rounded-s-md bg-gray-0 border border-e-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Цена от"
        />
        <input
          v-model="paramsStore.selectedParams.price[1]"
          :placeholder="paramsStore.availableParams.price[1]"
          class="rounded-none rounded-e-lg bg-gray-0 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Цена до"
        />
      </div>
    </form>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
        >Цвет:</label
      >
      <Multiselect
        v-model="paramsStore.selectedParams.color"
        :options="paramsStore.availableParams.color"
        placeholder="Любой"
        mode="tags"
        class="multiselect-blue"
      />
    </div>
  </a>
  <button @click="paramsStore.createSearchString">Найти</button>
</template>

<script setup>
import axios from "axios"

import { useParams } from "@/store/paramsStore"
const paramsStore = useParams()
// onMounted(() => paramsStore.parseStringFromURL());

paramsStore.getProducts()
const sliderPower = ref([0, 999999999])
watch(sliderPower, () => {
  paramsStore.selectedParams.power = sliderPower.value
})

const sliderPrice = ref([0, 999999999])
watch(sliderPrice, () => {
  paramsStore.selectedParams.price = sliderPrice.value
})
//
</script>

<script>
import Multiselect from "@vueform/multiselect"
import Slider from "@vueform/slider"
import src from "@vueform/multiselect"

// watch(paramsStore.selectedParams, () => { //формирование поисковой строки
// paramsStore.createSearchString()

// // async function go(){
// //   await navigateTo(`/cars/${paramsStore.searchString}`)
// // }
// // go()
// });

// присвоение значения из слайдера в searchParams

// import { sr } from 'element-plus/es/locale'
export default {
  components: { Slider },
  components: {
    Multiselect
  }
}
</script>

<style>
.slider-blue {
  --slider-connect-bg: #1a56db;
  --slider-tooltip-bg: #3b82f6;
  --slider-handle-ring-color: #3b82f630;
  --slider-height: 1px;
  --slider-handle-bg: #1a56db;
  --slider-handle-width: 13px;
  --slider-handle-height: 13px;
}

.multiselect-blue {
  --ms-tag-bg: #dbeafe;
  --ms-tag-color: #2563eb;
  --ms-border-color-active: #0066ff;
  --ms-radius: 8px;
  --ms-ring-color: disabled;
  --ms-option-bg-selected: #0066ff;
  --ms-option-bg-selected-pointed: #3988fd;
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/slider/themes/default.css"></style>
