<template>
  <div>
    <header>
      <nav class="bg-white border-gray-200 pt-4 px-4 max-w-7xl mx-auto">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pb-5"
        >
          <a
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
            @click="page = 1"
          >
            <img src="../public/car.png" class="h-8" />
            <span
              v-if="page === 1"
              class="text-blue-700 self-center text-2xl font-semibold whitespace-nowrap"
              >DEALERSHIP</span
            >
            <span
              v-else
              class="self-center text-2xl text-gray-700 font-semibold whitespace-nowrap"
              >DEALERSHIP</span
            >
          </a>

          <div
            class="flex items-center space-x-4 rtl:space-x-reverse font-medium pt-2"
          >
            <NuxtLink to="/favourite" @click="page = 2">
              <button
                class="relative inline-flex items-center pt-1.5 px-0.5 text-sm font-medium text-center"
              >
                <svg
                  class="w-[29px] h-[29px] text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>

                <span
                  class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 border-2 border-white rounded-full -top-2.5 -end-2"
                >
                  {{ favouriteStore.getQuantityFavourite }}
                </span>
              </button>
            </NuxtLink>

            <NuxtLink to="/cart" @click="page = 3">
              <button
                class="relative inline-flex items-center pt-1.5 px-0.5 text-sm font-medium text-center"
              >
                <svg
                  class="w-[33px] h-[33px] text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.3"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>

                <span
                  class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 border-2 border-white rounded-full -top-2 -end-2"
                >
                  {{ cartStore.getQuantityCart }}
                </span>
              </button>
            </NuxtLink>

            <button
              type="button"
              class="py-1.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              @click="((hiddenLogin = false), (blur = true))"
            >
              Аккаунт
            </button>
          </div>
        </div>
      </nav>
    </header>
    <div :class="{ 'blur-md': blur }">
      <slot />
    </div>
    <div
      :class="{ hidden: hiddenLogin }"
      class="fixed inset-0 h-[calc(100%-1rem)] max-h-[500px] max-w-sm mx-auto mt-36"
    >
      <button
        type="button"
        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="popup-modal"
        @click="((hiddenLogin = true), (blur = false))"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      <Login />
    </div>

    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
import Login from "../src/components/index/login.vue"
import DefaultFooter from "./components/DefaultFooter.vue"
import { useCart } from "../store/cartStore"
import { useFavourite } from "../store/favouriteStore"

const cartStore = useCart()
const favouriteStore = useFavourite()

const page = ref(0)

const hiddenLogin = ref<boolean>(true)
const blur = ref<boolean>(false)
</script>
