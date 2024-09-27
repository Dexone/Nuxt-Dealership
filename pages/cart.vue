<template>
  <div class="max-w-6xl mx-auto">
    <a class="flex flex-col bg-white rounded-lg md:flex-row">
      <div class="relative w-full max-w-3xl " v-if="Object.keys(productStore.cart).length >0">
        <div class="p-4 md:p-5">
          <ul class="space-y-4 mb-4" v-for="(main, index) in mainInfo">
            <li
            v-if="(Object.keys(productStore.cart)).includes(String(main.id)) === true">
              <label for="job-1"
                class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600">
                <div class="block">
                  <a class="inline-block -ml-6">
                    <img class="w-18 h-10" :src="main.image[1]" />
                  </a>

                  <a class="inline-block">
                    <div class="w-full text-lg font-semibold">{{ main.brand }} {{ main.model }}</div>
                    <div class="hidden md:block text-gray-500"> {{ main.year }}г. / {{ main.power }}л.с. / {{
                      main.engine }} / {{ main.transmission }} /
                      {{ main.kuzov }} / {{ main.color }}</div>
                    <div class="w-full ">{{ main.price.toLocaleString() }} ₽</div>
                  </a>
                </div>


                <div>
                  <button @click="minusCart(main.id)" type="button"
                    class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                    -
                  </button>
              
                  <a class="px-2 py-1 text-sm font-medium text-gray-500">
                    <a>{{ productStore.cart[main.id] }}</a>
                  </a>

                  <button @click="plusCart(main.id)" type="button"
                    class="px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                    +
                  </button>

                  <button @click="(productStore.simile[main.id] = 'loaderDelete'), deleteFromCart(main.id)"
                    class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-500 p-1.5 inline-flex items-center justify-center h-8 w-8"
                    data-dismiss-target="#toast-success" aria-label="Close">

                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                  </button>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>

     





      <div class="bg-gray-50 max-w-sm border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full" v-if="Object.keys(productStore.cart).length >0">
        <div class="font-medium text-lg">Ваша корзина</div>
       <div class="font-light text-sm" >Количество товаров: {{  productStore.getQuantity  }}</div>
         <div class="font-light text-sm">Сумма товаров:  {{ productStore.getCartSumm }} ₽</div>

        <!-- {{ productStore.cart }} -->

        <!-- {{ productStore.getAllProducts}} -->
      </div>








      <div class="bg-gray-50  border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full" v-if="Object.keys(productStore.cart).length === 0">
        <div class="font-medium text-lg">Корзина пуста</div>
        <div class="text-gray-500 font-light text-sm">Воспользуйтесь поиском, чтобы найти все, что нужно.</div>
        <div  class="text-gray-500 font-light text-sm">Если в корзине были товары, войдите,
          чтобы посмотреть список.
         </div>
        <div class="text-gray-500 font-light text-sm">
          <NuxtLink to="/"><button type="button"
              class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">На
              главную</button>
          </NuxtLink>
        </div>
      </div>






    </a>
  </div>
</template>

<script setup>
import { useProduct } from '../store/productStore';
// const runtimeConfig = useRuntimeConfig();
const productStore = useProduct();

useSeoMeta({
  title: () => "Корзина"
})


const mainInfo = ref(0);
async function update() {
  const { data } = await useFetch(`https://dexone.ru/backend_shop/products`);
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
update();

function deleteFromCart(value) {
  productStore.deleteFromCart(value);
}
function plusCart(value) {
  productStore.plusCart(value);
}
function minusCart(value) {
  productStore.minusCart(value);
}

</script>
