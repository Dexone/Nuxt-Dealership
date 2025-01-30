<template>
  <li>
    <label for="job-1"
      class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600">
      <div class="block">
        <a class="inline-block -ml-6">
          <img class="w-18 h-10" :src="cart.image[0][1]" />
        </a>

        <a class="inline-block">
          <NuxtLink :to="`/product/${cart._id}`">
            <div class="w-full text-lg font-semibold">
              {{ cart.brand }} {{ cart.model }}
            </div>
          </NuxtLink>
          <div class="hidden md:block text-gray-500">
            {{ cart.year }}г. / {{ cart.power }}л.с. / {{ cart.engine }} /
            {{ cart.transmission }} / {{ cart.bodyCar }} / {{ cart.color }}
          </div>
          <div class="w-full">{{ cart.price.toLocaleString() }} ₽</div>
        </a>
      </div>


      <!-- buttons group -->
      <div>
        <!-- button delete -->
        <div class="items-center text-right mb-2">
          <button @click="cartStore.removeCart(cart)" class="ms-auto text-gray-500 ">
            <!-- x -->
            <svg class="w-3 h-4 mr-1.5 pb-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>


          <!-- кн-и избранного -->
          <button :key="quantityFavourite = Object.values(favouriteStore.localFavourite).reduce(
            function (accumulator, item) {
              if (item.product._id === cart._id) {
                accumulator = item.quantity
              }
              return accumulator
            },
            0
          )
            ">
                      <!-- кн-а добавить в избранное -->
            <svg v-if="loaderFavourite === false && quantityFavourite <= 0" @click="addToFavourite(cart)"
              class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
            </svg>

      
          <!-- кн-а удалить из избранного -->
            <svg v-if="loaderFavourite === false && quantityFavourite > 0" @click="removeFavourite(cart)"
              class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24">
              <path
                d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
            <!-- лоадер -->
            <span v-if="loaderFavourite === true">
              <div role="status">
                <svg aria-hidden="true" class="w-5 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
                </svg>
              </div>
            </span>


    
          </button>


          <button :key="quantityFavourite = Object.values(favouriteStore.localFavourite).reduce(
            function (accumulator, item) {
              if (item.product._id === cart._id) {
                accumulator = item.quantity
              }
              return accumulator
            },
            0
          )
            ">
           
          </button>
        </div>

        <!-- buttons +- -->
        <div :key="quantityCart = Object.values(cartStore.localCart).reduce(function (
      accumulator,
      item
    ) {
      if (item.product._id === cart._id) {
        accumulator = item.quantity
      }
      return accumulator
    }, 0)
      ">
          <button @click="editCartMinus(cart)" type="button"
            class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
            -
          </button>

          <a type="button" class="px-2 py-1 text-sm font-medium text-gray-500">
            <a>
              <svg v-if="loaderCart === true" aria-hidden="true" class="inline w-2 h-2 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill" />
              </svg>
            </a>
            <a v-if="loaderCart === false">{{ quantityCart }}</a>
          </a>

          <button @click="editCartPlus(cart)" type="button"
            class="px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
            +
          </button>
        </div>

      </div>
    </label>
  </li>


</template>

<script setup>
import { useCart } from "../store/cartStore"
import { useUser } from "../store/userStore"
import { useFavourite } from "../store/favouriteStore"
const cartStore = useCart()
const userStore = useUser()
const favouriteStore = useFavourite()




const loaderCart = ref(false)


async function editCartMinus(value) {
  loaderCart.value = true
  await cartStore.editCartMinus(value)
  loaderCart.value = false
}

async function editCartPlus(value) {
  loaderCart.value = true
  await cartStore.editCartPlus(value)
  loaderCart.value = false
}

const loaderFavourite = ref(false)
async function addToFavourite(value) {
  loaderFavourite.value = true
  await favouriteStore.addToFavourite(value)
  loaderFavourite.value = false
}

async function removeFavourite(value) {
  loaderFavourite.value = true
  await favouriteStore.removeFavourite(value)
  loaderFavourite.value = false
}

defineProps({
  cart: Object
})
</script>
