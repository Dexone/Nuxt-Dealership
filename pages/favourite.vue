<template>
  <main class="bg-white max-w-7xl mx-auto">
    <a v-for="(main, index) in mainInfo">
      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"
        v-if="(Object.keys(favouriteStore.favourite)).includes(String(main.id)) === true"
      >
        <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4 pt-4">
          <NuxtLink :to="`/product/${main.id}`"> {{ main.brand }} {{ main.model }} </NuxtLink>
        </h5>

        <p class="text-sm text-gray-500 ml-4 mr-4">
          {{ main.year }}г. / {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} /
          {{ main.kuzov }} / {{ main.color }}
        </p>

        <div class="flex flex-col items-center">
          <img class="rounded-t-lg" v-bind:src="main.image[1]" />
        </div>

        <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4">{{ main.price }} ₽</h5>
        <span class="text-sm text-gray-500 ml-4"> {{ Math.round(main.price / 84) }} ₽/мес</span>

        <div class="flex flex-col items-center pb-10">
          <div class="flex mt-4 md:mt-6">
            <button
              v-if="(Object.keys(productStore.cart)).includes(String(main.id)) === false"
              @click="addToCart(main)"
              class="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Купить
            </button>

            <NuxtLink v-if="(Object.keys(productStore.cart)).includes(String(main.id)) === true" to="/cart"
              ><button
                class="inline-flex items-center px-6 py-2.5 text-sm font-medium text-center text-gray-900 border border-gray rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
                В корзине >
              </button></NuxtLink>

            <button
              v-if="(Object.keys(favouriteStore.favourite)).includes(String(main.id)) === true"
              @click="deleteFromFavourite(main.id)"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"
                />
              </svg>
            </button>

          
          </div>
        </div>
      </div>
    </a>

    <!-- <div class="bg-gray-50  border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full"
        v-if="Object.keys(favouriteStore.favourite).length === 0 && productStore.user === 1">
        <div class="font-medium text-lg">В избранном пусто</div>
        <div class="text-gray-500 font-light text-sm">Воспользуйтесь поиском, чтобы найти все, что нужно.</div>
        <div v-if="productStore.user == 1" class="text-gray-500 font-light text-sm">Если в избранном были товары, войдите, чтобы посмотреть список.

        <div><NuxtLink to="/login"><button type="button"
          class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">Войти</button>
        </NuxtLink></div>
      </div>
        <div v-else class="text-gray-500 font-light text-sm"><NuxtLink to="/"><button type="button"
          class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">На главную</button>
        </NuxtLink></div>
      </div>

      <div class="bg-gray-50  border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full"
      v-if="productStore.user > 1 && favouriteStore.simile[productStore.user] === 0 || favouriteStore.simile[productStore.user] == 'loader'">
        <div class="font-medium text-lg">В избранном пусто</div>
        <div class="text-gray-500 font-light text-sm">Воспользуйтесь поиском, чтобы найти все, что нужно.</div>
        <div v-if="productStore.user == 1" class="text-gray-500 font-light text-sm">Если в избранном были товары, войдите, чтобы посмотреть список.

        <div><NuxtLink to="/login"><button type="button"
          class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">Войти</button>
        </NuxtLink></div>
      </div>
        <div v-else class="text-gray-500 font-light text-sm"><NuxtLink to="/"><button type="button"
          class=" bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none ">На главную</button>
        </NuxtLink></div>
      </div> -->


  </main>

</template>

<script setup>
import { useFavourite } from '../store/productFavourite';
import { useProduct } from '../store/productStore';
import axios from 'axios';
const productStore = useProduct();
const favouriteStore = useFavourite();

const mainInfo = ref();
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

function addToCart(value) {
  productStore.addToCart(value);
}

function deleteFromFavourite(value) {
  favouriteStore.deleteFromFavourite(value);
}
</script>
