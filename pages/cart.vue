<template>
  <template v-if="!cartStore.localCart"> Loader </template>

  <template v-else>
    <div class="max-w-6xl mx-auto">
      <a class="flex flex-col bg-white rounded-lg md:flex-row">
        <div class="relative w-full max-w-3xl">
          <div class="p-4 md:p-5">
            <ul
              v-for="(cartItem, index) in cartStore.localCart"
              class="space-y-4 mb-4"
            >
              <CartProduct :cart="cartItem.product" />
            </ul>
          </div>
        </div>

        <!-- right bar -->
        <div
          v-if="Object.keys(cartStore.localCart).length > 0"
          class="bg-gray-50 max-w-sm border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full"
        >
          <div class="font-medium text-lg">Ваша корзина</div>
          <div class="font-light text-sm">
            Количество товаров: {{ cartStore.getQuantityCart }}
          </div>
          <div class="font-light text-sm">
            Сумма товаров: {{ cartStore.getSumCart }} ₽
          </div>
        </div>
      </a>
      <!-- заглушка -->
      <div
        v-if="Object.keys(cartStore.localCart).length === 0"
        class="bg-gray-50 border border-gray-200 rounded-lg shadow p-6 mx-auto mt-5 w-full"
      >
        <div class="font-medium text-lg">Корзина пуста</div>
        <div class="text-gray-500 font-light text-sm">
          Воспользуйтесь поиском, чтобы найти все, что нужно.
        </div>
        <div class="text-gray-500 font-light text-sm">
          Если в корзине были товары, войдите, чтобы посмотреть список.
        </div>
        <div class="text-gray-500 font-light text-sm">
          <NuxtLink to="/"
            ><button
              type="button"
              class="bg-blue-100 hover:bg-blue-400 hover:text-blue-900 text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mt-3 me-2 mb-2 focus:outline-none"
            >
              На главную
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { useCart } from "../store/cartStore"
import CartProduct from "~/src/components/index/CartProduct.vue"

const cartStore = useCart()

useHead({
  title: "Корзина"
})
</script>
