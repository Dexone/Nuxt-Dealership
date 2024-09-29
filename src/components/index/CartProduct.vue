<template>

    <li v-if="(Object.keys(productStore.cart)).includes(String(cart.id)) === true">
        <label for="job-1"
            class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600">
            <div class="block">
                <a class="inline-block -ml-6">
                    <img class="w-18 h-10" :src="cart.image[1]" />
                </a>

                <a class="inline-block">
                    
                     <NuxtLink :to="`/product/${cart.id}`">  <div class="w-full text-lg font-semibold">{{ cart.brand }} {{ cart.model }}</div> </NuxtLink>
                    <div class="hidden md:block text-gray-500"> {{ cart.year }}г. / {{ cart.power }}л.с. / {{
                        cart.engine }} / {{ cart.transmission }} /
                        {{ cart.kuzov }} / {{ cart.color }}</div>
                    <div class="w-full ">{{ cart.price.toLocaleString() }} ₽</div>
                </a>
            </div>


            <div>
                <button @click="minusCart(cart.id)" type="button"
                    class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                    -
                </button>

                <a class="px-2 py-1 text-sm font-medium text-gray-500">
                    <a>{{ productStore.cart[cart.id] }}</a>
                </a>

                <button @click="plusCart(cart.id)" type="button"
                    class="px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                    +
                </button>

                <button @click="(productStore.simile[cart.id] = 'loaderDelete'), deleteFromCart(cart.id)"
                    class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-500 p-1.5 inline-flex items-center justify-center h-8 w-8"
                    data-dismiss-target="#toast-success" aria-label="Close">

                    <svg v-if="loader === false" class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <svg v-if="loader" aria-hidden="true" role="status"
                        class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="#1C64F2" />
                    </svg>

                </button>
            </div>
        </label>
    </li>
</template>


<script setup>
import { useProduct } from '@/store/productStore';
// const runtimeConfig = useRuntimeConfig();
const productStore = useProduct();
import { ref } from 'vue';

import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

defineProps({
    cart: Object,
})

const loader = ref(false)
function deleteFromCart(value) {
    loader.value = true
    setTimeout(() => {
        productStore.deleteFromCart(value);
        loader.value = false
        $toast.error('Удалено из корзины', {
            position: 'bottom'
        })
    }, 1000);
}


function plusCart(value) {
    productStore.plusCart(value);
}
function minusCart(value) {
    productStore.minusCart(value);
}
</script>