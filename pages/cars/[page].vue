<template>

  <main class="bg-white max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto mb-3">
      <Filters />
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"
      v-for="(main, index) in mainInfo">
      <!-- move to component -->
      <CardProduct :car="main"/> 
      
    </div>




    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="flex items-center -space-x-px h-10 text-base max-w-48 mx-auto">
        <li>
          <button @click="ffLeft()"
            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
            <svg class="w-3 h-3 rtl:rotate-180"  xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>
        <li v-for="(page, index) in totalPages">
          <NuxtLink :to="`/cars/${page}`">
            <!-- окрашивание кнопки индекс которой соответствует текущей странице -->
            <button :class="{ 'bg-blue-50': index === route.params.page - 1}"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              {{ page }}
            </button></NuxtLink>
        </li>
        <li>
          <button @click="ffRight()"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
            <svg class="w-3 h-3 rtl:rotate-180"  xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
    <!-- pagination -->


  </main>

</template>

<script setup>
import CardProduct from '@/src/components/index/CardProduct.vue'
const route = useRoute();

defineProps({
  type: Object,
  required: true
})

import { useProduct } from '../../store/productStore';
import { useFavourite } from '../../store/productFavourite';
import Filters from '../../src/components/index/filters.vue';

import { useFilters } from '../../store/filtersStore'
const filtersStore = useFilters();






useSeoMeta({
  title: () => "Nuxt-Dealership"
})

const runtimeConfig = useRuntimeConfig();
const productStore = useProduct();
const favouriteStore = useFavourite();




watch(filtersStore, () => {
  update();
});


const mainInfo = ref(0);
async function update() {


  const { data } = await useFetch(
    `https://dexone.ru/backend_shop/products?${filtersStore.search.join('')}&_page=${route.params.page}`
  );
  const mainData = data.value.map((item, index) => {
    return {
      id: data.value[index].id,
      brand: data.value[index].brand,
      model: data.value[index].model,
      year: data.value[index].year,
      power: data.value[index].power,
      kuzov: data.value[index].kuzov,
      transmission: data.value[index].transmission,
      engine: data.value[index].engine,
      color: data.value[index].color,
      price: data.value[index].price,
      image: {
        1: data.value[index].image[1],
        2: data.value[index].image[2],
        3: data.value[index].image[3],
        4: data.value[index].image[4],
        5: data.value[index].image[5]
      }
    };
  });
  mainInfo.value = mainData;
}
await update();


productStore.getProducts()
//pagination


const totalPages = ref([]) //пуш номеров страниц исходя из кол-ва записей в бд
function ffPage() {
  const data = useFetch(`https://dexone.ru/backend_shop/products?${filtersStore.search.join('')}`);
  setTimeout(() => {
    totalPages.value = [];
    for (let i = 1; i < Math.ceil(data.data.value.length / 10) + 1; i++) {
      totalPages.value.push(i);
    }
  }, 500);
}
ffPage();
function ffRight() {
  if (route.params.page < totalPages.value[totalPages.value.length - 1]) { //если страница не последняя, переход к следующей странице
    navigateTo(`/cars/${Number(route.params.page) + 1}`)
  }
}
function ffLeft() {
  if (route.params.page > 1) { //если страница не первая, переход к предыдущей странице
    navigateTo(`/cars/${route.params.page - 1}`)

  }
}
watch(filtersStore, () => { //если меняются фильтры: пуш нового кол-ва страниц, переход к первой странице
  ffPage();
  navigateTo('/cars/1')
});
//pagination






</script>