<template>
  <li>
    <label
      for="job-1"
      class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600"
    >
      <div class="block">
        <a class="inline-block -ml-6">
          <img class="w-18 h-10" :src="cart.image[0][1]" />
        </a>

        <a class="inline-block">
          <NuxtLink :to="`/product/${cart.id}`">
            <div class="w-full text-lg font-semibold">
              {{ cart.brand }} {{ cart.model }}
            </div>
          </NuxtLink>
          <div class="hidden md:block text-gray-500">
            {{ cart.year }}г. / {{ cart.power }}л.с. / {{ cart.engine }} /
            {{ cart.transmission }} / {{ cart.kuzov }} / {{ cart.color }}
          </div>
          <div class="w-full">{{ cart.price.toLocaleString() }} ₽</div>
        </a>
      </div>
    </label>
  </li>
</template>

<script setup>
import { useCart } from "../store/cartStore"
const cartStore = useCart()
defineProps({
  cart: Object
})
</script>
