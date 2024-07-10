<template>
  <div class="max-w-6xl mx-auto">
    <a class="flex flex-col bg-white rounded-lg md:flex-row">
      <!-- <a class="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row"> -->
      <div class="relative w-full max-w-3xl " v-if="productStore.quantity[0] > 0">
        <div class="p-4 md:p-5">
          <ul class="space-y-4 mb-4" v-for="(main, index) in mainInfo">
            <li
              v-if="productStore.simile[main.id] >= 1 || productStore.simile[main.id] == 'loaderQuantity' || productStore.simile[main.id] == 'loaderDelete'">
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
                  <button @click="(productStore.simile[main.id] = 'loaderQuantity'), minusCart(main.id)" type="button"
                    class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                    -
                  </button>

                  <a type="button" class="px-2 py-1 text-sm font-medium text-gray-500">
                    <a
                      v-if="productStore.simile[main.id] == 'loaderQuantity' || productStore.simile[main.id] == 'loaderDelete'">
                      <svg aria-hidden="true" class="inline w-2 h-2 text-gray-200 animate-spin fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor" />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill" />
                      </svg>
                    </a>
                    <a v-else>{{ productStore.simile[main.id] }}</a>
                  </a>

                  <button @click="(productStore.simile[main.id] = 'loaderQuantity'), plusCart(main.id)" type="button"
                    class="px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                    +
                  </button>

                  <button @click="(productStore.simile[main.id] = 'loaderDelete'), deleteFromCart(main.id)"
                    class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-500 p-1.5 inline-flex items-center justify-center h-8 w-8"
                    data-dismiss-target="#toast-success" aria-label="Close">


                    <svg v-if="productStore.simile[main.id] == 'loaderDelete'" aria-hidden="true"
                      class="inline w-2 h-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                    </svg>





                    <svg v-else class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
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


      <div class="bg-gray-50 max-w-sm border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full"
        v-if="productStore.quantity[0] > 0">
        <div>Ваша корзина</div>
        <div v-if="productStore.quantity[2] != 0">Количество товаров {{ productStore.quantity[2] }} </div>
        <div v-if="productStore.quantity[2] === 0"> Количество товаров <svg aria-hidden="true"
            class="inline w-2 h-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg></div>


        <div v-if="productStore.quantity[1] != 0">Сумма товаров {{ productStore.quantity[1].toLocaleString() }} ₽</div>
        <div v-if="productStore.quantity[1] === 0">Сумма товаров <svg aria-hidden="true"
            class="inline w-2 h-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg></div>
      </div>








      <div class="bg-gray-50  border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full"
        v-if="productStore.quantity[0] === 0">
        <div class="font-medium text-lg">Корзина пуста</div>
        <div class="text-gray-500 font-light text-sm">Воспользуйтесь поиском, чтобы найти все, что нужно.</div>
        <div v-if="productStore.user == 1" class="text-gray-500 font-light text-sm">Если в корзине были товары, войдите, чтобы посмотреть список.

        <div><NuxtLink to="/login"><button type="button"
          class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">Войти</button>
        </NuxtLink></div>
      </div>
        <div v-else class="text-gray-500 font-light text-sm"><NuxtLink to="/"><button type="button"
          class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">На главную</button>
        </NuxtLink></div>
      </div>


      <!-- <button @click="console.log(productStore.simile)">simile</button>
      <button @click="console.log(productStore.quantity)">quantity</button> -->


      <!-- <div class="flex flex-col justify-between p-4 leading-normal mx-auto mt-5">
        <div class="w-full max-w-sm p-8 px-16 bg-gray-50 border border-gray-200 rounded-lg shadow">
          <h5 class="mb-4 text-xl font-medium text-gray-900">Характеристики</h5>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">

              Сумма товаров:
              <span class="text-base font-normal leading-tight text-gray-900 ms-3">
                <a v-if="productStore.quantity[0] == 0"> Добавьте что-то скорее </a>

                <a v-if="productStore.quantity[0] > 0">
                  {{ productStore.quantity[1].toLocaleString() }} ₽
                </a>

                <a v-if="productStore.quantity[1] == '0'">считаем...</a>
              </span>
            </li>
          </ul>
        </div>
      </div> -->




    </a>
  </div>
</template>

<script setup>
import { useProduct } from '../store/productStore';
// const runtimeConfig = useRuntimeConfig();
const productStore = useProduct();

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
productStore.findSame();
productStore.editQuantity();
</script>
