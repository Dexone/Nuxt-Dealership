<template>
  <a class="block relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow mx-5">

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Марка:</label>
      <Multiselect v-model="brands" :options="optionsBrands" placeholder="Любая" mode="single"
        class="multiselect-blue" />
    </div>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Модель:</label>
      <Multiselect v-if="brands === undefined || brands === null" v-model="model" :options="compareBrands[brands]"
        placeholder="Любая" mode="single" class="multiselect-blue" disabled="false" />
      <Multiselect v-else v-model="model" :options="compareBrands[brands]" placeholder="Любой" mode="single"
        class="multiselect-blue" />
    </div>



    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Кузов:</label>
      <Multiselect v-model="kuzov" :options="['Кроссвэн', 'Хэтчбек', 'Универсал', 'Седан', 'Кроссовер']"
        placeholder="Любой" mode="tags" class="multiselect-blue" />
    </div>

<a :class="{ 'hidden': hiddenFilters }">



    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Трансмиссия:</label>
      <Multiselect v-model="kpp" :options="['АКПП', 'МКПП', 'Вариатор']" placeholder="Любая" mode="tags"
        class="multiselect-blue" />
    </div>

    <form class="w-72 mt-2 mr-2 inline-block">
      <label class="block mb-2 text-sm font-medium text-gray-900">Мощность двигателя:</label>
      <div>
        <Slider :tooltips="false" v-model="sliderPower" @input="ffSliderPower()" class="slider-blue  ml-5 mr-5"
          :step="10" :min="100" :max="550" :lazy="false" />
      </div>
      <div class="flex">
        <input v-model="powerVM[0]"
          class="rounded-none rounded-s-md bg-gray-0 border border-e-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
          placeholder="Цена от">
        </input>
        <input type="text" v-model="powerVM[1]"
          class="rounded-none rounded-e-lg bg-gray-0 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
          placeholder="Цена до">
      </div>
    </form>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Двигатель:</label>
      <Multiselect v-model="engine" :options="['Бензин', 'Дизель', 'Электро']" placeholder="Любой" mode="tags"
        class="multiselect-blue" />
    </div>

    <form class="w-72 inline-block mr-2">
      <label class="block mb-2 text-sm font-medium text-gray-900">Цена:</label>

      <div>
        <Slider :step="100000" :tooltips="false" v-model="sliderPrice" @input="ffSliderPrice()"
          class="slider-blue ml-5 mr-5" :min="2000000" :max="12000000" :lazy="false" />
      </div>

      <div class="flex">
        <input v-model="otPrice"
          class="rounded-none rounded-s-md bg-gray-0 border border-e-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
          placeholder="Цена от">
        </input>
        <input v-model="doPrice"
          class="rounded-none rounded-e-lg bg-gray-0 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
          placeholder="Цена до">
      </div>
    </form>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Цвет:</label>
      <Multiselect v-model="colorsVM"
        :options="['Черный', 'Красный', 'Серый', 'Белый', 'Коричневый', 'Синий', 'Серебристый']" placeholder="Любой"
        mode="tags" class="multiselect-blue" />
    </div>


  </a>
<button class="text-blue-600 mt-2" @click="hiddenFilters = !hiddenFilters"><a v-if="hiddenFilters === true">Показать еще</a>
  <a v-if="hiddenFilters === false">Скрыть</a></button>
  </a>
</template>

<script setup>
import axios from 'axios'
import { useFilters } from '../../../store/filtersStore';
const filtersStore = useFilters();
defineProps({
  type: Object,
  required: true
})

const hiddenFilters = ref(true)


const otPrice = ref()
const doPrice = ref()
const otPriceVM = ref(2000000)
const doPriceVM = ref(12000000)
const sliderPrice = ref([2000000, 12000000])
function ffSliderPrice() {
  otPrice.value = String(sliderPrice.value[0])
  doPrice.value = String(sliderPrice.value[1])
}
watch(otPrice, () => {
  otPrice.value = Number(otPrice.value.replace(/\D/g, '')).toLocaleString();
  otPriceVM.value = (Number(otPrice.value.replace(/\D/g, '')))
  searchPush()
})
watch(doPrice, () => {
  doPrice.value = Number(doPrice.value.replace(/\D/g, '')).toLocaleString();
  doPriceVM.value = (Number(doPrice.value.replace(/\D/g, '')))
  searchPush()
})

const powerVM = ref([100, 550])
const colorsVM = ref([])

const kpp = ref([])
const kuzov = ref([])
const engine = ref([])

const brands = ref()
const model = ref()

const sliderPower = ref([100, 550])
function ffSliderPower() {
  powerVM.value[0] = sliderPower.value[0]
  powerVM.value[1] = sliderPower.value[1]
}

const compareBrands = ref({})
const optionsBrands = ref()

function ffOptions() {
  axios.get(`https://dexone.ru/backend_shop/products`).then((res) => {
    let brand = []
  for (let i = 0; i < res.data.length; i++) {
    brand.push(res.data[i].brand)

  }
  optionsBrands.value = [...new Set(brand)]
  for (let i = 0; i < optionsBrands.value.length; i++) { // Brand : []
    compareBrands.value[optionsBrands.value[i]] = []
  }
  for (let i = 0; i < res.data.length; i++) { // Brand : ['Model1', 'Model2', ...]
    compareBrands.value[res.data[i].brand].push(res.data[i].model)
  }
    })

}
ffOptions()

// let search = inject("search")
function searchPush() { //строка поиска
  filtersStore.search = []
  for (let i = 0; i < colorsVM.value.length; i++) {
    filtersStore.search.push("&color=" + colorsVM.value[i])
  }
  filtersStore.search.push("&power_gte=" + powerVM.value[0] + "&power_lte=" + powerVM.value[1])
  filtersStore.search.push("&price_gte=" + otPriceVM.value + "&price_lte=" + doPriceVM.value)
  for (let i = 0; i < engine.value.length; i++) {
    filtersStore.search.push("&engine=" + engine.value[i])
  }
  for (let i = 0; i < kpp.value.length; i++) {
    filtersStore.search.push("&transmission=" + kpp.value[i])
  }
  for (let i = 0; i < kpp.value.length; i++) {
    filtersStore.search.push("&transmission=" + kpp.value[i])
  }
  for (let i = 0; i < kuzov.value.length; i++) {
    filtersStore.search.push("&kuzov=" + kuzov.value[i])
  }

  if (brands.value != undefined) {
    filtersStore.search.push("&brand=" + brands.value)
  }

  if (model.value != undefined || model.value != null) {
    filtersStore.search.push("&model=" + model.value)
  }
}

watch([colorsVM, powerVM.value, kuzov, kpp, brands, engine, model], () => {
  searchPush()
})
</script>

<style>
.slider-blue {
  --slider-connect-bg: #1a56db;
  --slider-tooltip-bg: #3B82F6;
  --slider-handle-ring-color: #3B82F630;
  --slider-height: 1px;
  --slider-handle-bg: #1a56db;
  --slider-handle-width: 13px;
  --slider-handle-height: 13px;
}
.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
  --ms-border-color-active: #0066ff;
  --ms-radius: 8px;
  --ms-ring-color: disabled;
  --ms-option-bg-selected: #0066ff;
  --ms-option-bg-selected-pointed: #3988fd;
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/slider/themes/default.css"></style>
<script>
import Multiselect from '@vueform/multiselect'
import Slider from '@vueform/slider'
import src from '@vueform/multiselect'
// import { sr } from 'element-plus/es/locale'
export default {
  components: { Slider },
  components: {
    Multiselect,
  },
}
</script>