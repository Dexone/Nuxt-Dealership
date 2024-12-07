<template>
<!-- {{ params }} -->
{{ searchString }}
{{searchParams}}

  <a class="block relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow mx-5">

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Марка:</label>
      <Multiselect v-model="searchParams.brand" :options="Object.keys(params.brands)" @change="searchParams.modelCar = null"  placeholder="Любая"
        mode="single" class="multiselect-blue" />
    </div>

    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Модель:</label>
      <Multiselect v-if="searchParams.brand === null"  v-model="searchParams.modelCar" :options="params.brands[searchParams.brand]" placeholder="Любая" mode="single"
        class="multiselect-blue" disabled="false" />
        <Multiselect v-if="searchParams.brand !== null"  v-model="searchParams.modelCar" :options="params.brands[searchParams.brand]" placeholder="Любая" mode="single"
        class="multiselect-blue"  />
    </div>


    <div class="min-w-72 mt-2 mr-2 inline-block">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Кузов:</label>
      <Multiselect v-model="searchParams.bodyCar" :options="params.bodyCar"
        placeholder="Любой" mode="tags" class="multiselect-blue" />
    </div>



    <div class="min-w-72 mt-2 mr-2 inline-block">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Трансмиссия:</label>
        <Multiselect v-model="searchParams.transmission" :options="params.transmission" placeholder="Любая" mode="tags"
          class="multiselect-blue" />
      </div>




      <form class="w-72 mt-2 mr-2 inline-block">
        <label class="block mb-2 text-sm font-medium text-gray-900">Мощность двигателя:</label>
        <!-- <div>
          <Slider :tooltips="false" v-model="searchParams.power" class="slider-blue  ml-5 mr-5"
            :step="10" :min="params.power[0]" :max="params.power[1]" :lazy="false" />
        </div> -->
        <div class="flex">
          <input   v-model="searchParams.power[0]" :placeholder="params.power[0]"
            class="rounded-none rounded-s-md bg-gray-0 border border-e-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
            placeholder="Цена от">
          </input>
          <input v-model="searchParams.power[1]" :placeholder="params.power[1]"
            class="rounded-none rounded-e-lg bg-gray-0 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
            placeholder="Цена до">
        </div>
      </form>


      <div class="min-w-72 mt-2 mr-2 inline-block">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Двигатель:</label>
        <Multiselect v-model="searchParams.engine" :options="params.engine" placeholder="Любой" mode="tags"
          class="multiselect-blue" />
      </div>







      <form class="w-72 inline-block mr-2">
        <label class="block mb-2 text-sm font-medium text-gray-900">Цена:</label>

        <!-- <div>
          <Slider :step="100000" :tooltips="false" v-model="sliderPrice" @input="ffSliderPrice()"
            class="slider-blue ml-5 mr-5" :min="2000000" :max="12000000" :lazy="false" />
        </div> -->

        <div class="flex">
          <input v-model="searchParams.price[0]" :placeholder="params.price[0]"
            class="rounded-none rounded-s-md bg-gray-0 border border-e-0 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
            placeholder="Цена от">
          </input>
          <input v-model="searchParams.price[1]" :placeholder="params.price[1]"
            class="rounded-none rounded-e-lg bg-gray-0 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
            placeholder="Цена до">
        </div>
      </form>



      <div class="min-w-72 mt-2 mr-2 inline-block">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Цвет:</label>
        <Multiselect v-model="searchParams.color" 
          :options="params.color" placeholder="Любой"
          mode="tags" class="multiselect-blue" />
      </div>




  </a>
</template>

<script setup>
import axios from 'axios'
import { useFilters } from '../../../store/filtersStore';


const params = ref({ brands: {}, bodyCar: [], transmission: [], engine: [], color: [], power: [999, 0], price: [99999999, 0] }) //объекты параметров, доступных для выбора
async function getproducts() { //наполнение объектов парметрами, доступными для выбора
  const res = await $fetch(`/api/products`, { //запрос количества страниц
    method: "GET",
  });
  for (let i = 1; i <= res.meta.last_page; i++) { //получение всех products на всех страницах
    const res = await $fetch(`/api/products?page=${i}`, {
      method: "GET",
    });
    res.existingProduct.map((item, index) => {
      if (Object.keys(params.value.brands).includes(item.brand) === false) { //пуш объектов только уникальных марок
        params.value.brands[item.brand] = []
      }
      if (params.value.brands[item.brand].includes(item.modelCar) === false) { //пуш объектов только уникальных моделей
        params.value.brands[item.brand].push(item.modelCar)
      }
      if (params.value.bodyCar.includes(item.bodyCar) === false) { //пуш объектов только уникальных кузовов
        params.value.bodyCar.push(item.bodyCar)
      }
      if (params.value.transmission.includes(item.transmission) === false) { //пуш объектов только уникальных трансмиссий
        params.value.transmission.push(item.transmission)
      }
      if (params.value.engine.includes(item.engine) === false) { //пуш объектов только уникальных трансмиссий
        params.value.engine.push(item.engine)
      }
      if (params.value.color.includes(item.color) === false) { //пуш объектов только уникальных  цветов
        params.value.color.push(item.color)
      }
      if (params.value.power[0] > item.power) { //пуш минимальной мощности
        params.value.power[0] = item.power
      }
      if (params.value.power[1] < item.power) { //пуш максимальной мощности
        params.value.power[1] = item.power
      }
      if (params.value.price[0] > item.price) { //пуш минимальной цены
        params.value.price[0] = item.price
      }
      if (params.value.price[1] < item.price) { //пуш максимальной цены
        params.value.price[1] = item.price
      }
    })
  }
}
getproducts()



const searchParams = ref({ brand: null, modelCar: null, bodyCar: [], transmission: [], power: ["", ""], engine: [], price: ["", ""], color: []}) //объекты выбранных параметров

const searchString = ref("")

watch(searchParams.value, () => {
createString()
});



// setTimeout(() => { //фикс бага, когда слайдер берет максимальное значение мощности только с первой страницы
//   searchParams.value.power = params.value.power
// }, 500);




function createString(){ //формирование поисковой строки
  searchString.value = ""
  if(searchParams.value.brand !== null){
    searchString.value = searchString.value + "brand=" + searchParams.value.brand + "&"
  }
  if(searchParams.value.modelCar !== null){
    searchString.value = searchString.value + "modelCar=" + searchParams.value.modelCar + "&"
  }

  if(searchParams.value.bodyCar.length !== 0){
    searchParams.value.bodyCar.forEach(element => {
      searchString.value = searchString.value + "bodyCar=" + element + "&"
    });
  }
  if(searchParams.value.transmission.length !== 0){
    searchParams.value.transmission.forEach(element => {
      searchString.value = searchString.value + "transmission=" + element + "&"
    });
  }

  if(searchParams.value.engine.length !== 0){
    searchParams.value.engine.forEach(element => {
      searchString.value = searchString.value + "engine=" + element + "&"
    });
  }

  if(searchParams.value.color.length !== 0){
    searchParams.value.color.forEach(element => {
      searchString.value = searchString.value + "color=" + element + "&"
    });
  }

  

}




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