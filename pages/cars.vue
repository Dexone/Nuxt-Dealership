<template>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"
      v-for="(main, index) in mainInfo">
      <!-- move to component -->
      <CardProduct :car="main" />

    </div>

{{ meta }}








  <div class="inline-flex -space-x-px text-base h-10" style="  display: flex;
  justify-content: center;">
    <button @click="() => {if(page > 1){page--}}">
      <a  class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Предыдущая</a>
    </button>
    <button v-for="n in meta.last_page" @click="page = n">
      <a  class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">{{ n }}</a>
    </button>

    <button @click="() => {if(page < meta.last_page){page++}}">
      <a  class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Следующая</a>
    </button>
  </div>





</template>


<script setup>
import { ref } from 'vue';
import CardProduct from '@/src/components/index/CardProduct.vue'

const mainInfo = ref();
const meta = ref({"last_page": 0 }) //данные пагинации
const page = ref(1)

async function getproducts() {
  const res = await $fetch(`/api/products?page=${page.value}`, {
    method: "GET",
  });

const mainData = res.existingProduct.map((item, index) => {
    return {
      id: res.existingProduct[index]._id,
      brand: res.existingProduct[index].brand,
      modelCar: res.existingProduct[index].modelCar,
      year: res.existingProduct[index].year,
      power: res.existingProduct[index].power,
      bodyCar: res.existingProduct[index].bodyCar,
      transmission: res.existingProduct[index].transmission,
      engine: res.existingProduct[index].engine,
      color: res.existingProduct[index].color,
      price: res.existingProduct[index].price,
      image: {
        1: res.existingProduct[index].image[0][1],
        2: res.existingProduct[index].image[0][2],
        3: res.existingProduct[index].image[0][3],
        4: res.existingProduct[index].image[0][4],
        5: res.existingProduct[index].image[0][5]
      }
    };
  });
  mainInfo.value = mainData;
meta.value = res.meta
}
getproducts()


watch(page, () => {
getproducts()
});
</script>