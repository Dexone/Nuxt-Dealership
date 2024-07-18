<template>

  <main class="bg-white max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto mb-3">
      <Filters />
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"
      v-for="(main, index) in mainInfo">
      <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4 pt-4">
        <NuxtLink :to="`/product/${main.id}`"> {{ main.brand }} {{ main.model }} </NuxtLink>
      </h5>

      <p class="text-sm text-gray-500 ml-4 mr-4 h-10">
        {{ main.year }}г. / {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} /
        {{ main.kuzov }} / {{ main.color }}
      </p>

      <div class="flex flex-col items-center h-48">
        <img class="rounded-t-lg" v-bind:src="main.image[1]" />
      </div>

      <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4">
        {{ main.price.toLocaleString() }} ₽
      </h5>
      <span class="text-sm text-gray-500 ml-4">
        {{ Math.round(main.price / 84).toLocaleString() }} ₽/мес</span>

      <div class="flex flex-col items-center pb-10">
        <div class="flex mt-4 md:mt-6">
          <button v-if="productStore.simile[main.id] == 'loader'"
            class="inline-flex items-center px-12 h-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg aria-hidden="true" role="status" class="inline w-3 h-3 me-3 text-white animate-spin"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
          </button>

          <NuxtLink v-if="productStore.simile[main.id] > 0" to="/cart"><button
              class="inline-flex items-center px-4 h-10 text-sm font-medium text-center text-gray-900 border border-gray rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
              В корзине >
            </button></NuxtLink>

          <button v-if="productStore.simile[main.id] == 0"
            @click="(productStore.simile[main.id] = 'loader'), addToCart(main)"
            class="inline-flex items-center px-10 h-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Купить
          </button>

          <button v-if="favouriteStore.simile[main.id] == 0"
            @click="(favouriteStore.simile[main.id] = 'loader'), addToFavourite(main)"
            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
            </svg>
          </button>

          <button v-if="favouriteStore.simile[main.id] == 1" @click="deleteFromFavourite(main.id)"
            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          </button>

          <button v-if="favouriteStore.simile[main.id] == 'loader'"
            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
            </svg>
          </button>
        </div>
      </div>
    </div>




    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="flex items-center -space-x-px h-10 text-base max-w-48 mx-auto">
        <li>
          <button @click="ffLeft()"
            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
            <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
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
            <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
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


const runtimeConfig = useRuntimeConfig();
const productStore = useProduct();
const favouriteStore = useFavourite();

productStore.editAllProducts();



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

function addToCart(value) {
  productStore.addToCart(value);
  productStore.findSame();
}
productStore.findSame();

function addToFavourite(value) {
  favouriteStore.addToFavourite(value);
  favouriteStore.findFavourite();
}
function deleteFromFavourite(value) {
  favouriteStore.deleteFromFavourite(value);
  favouriteStore.findFavourite();
}
favouriteStore.findFavourite();








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