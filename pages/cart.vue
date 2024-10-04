<template>
  <div class="max-w-6xl mx-auto">
    <a class="flex flex-col bg-white rounded-lg md:flex-row">
      <div class="relative w-full max-w-3xl " v-if="Object.keys(productStore.cart).length >0">
        <div class="p-4 md:p-5">
          <ul class="space-y-4 mb-4" v-for="(main, index) in mainInfo">
            <CartProduct :cart="main" />
          </ul>
        </div>
      </div>

     123


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
          <NuxtLink to="/cars"><button type="button"
              class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">На
              главную</button>
          </NuxtLink>
        </div>
      </div>






    </a>
  </div>
</template>

<script setup>

import CartProduct from '@/src/components/index/CartProduct.vue';
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



</script>
