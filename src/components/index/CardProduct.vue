<template>
    <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4 pt-4">
        <NuxtLink :to="`/product/${car.id}`"> {{ car.brand }} {{ car.modelCar }} </NuxtLink>
    </h5>
    <p class="text-sm text-gray-500 ml-4 mr-4 h-10">
        {{ car.year }}г. / {{ car.power }}л.с. / {{ car.engine }} / {{ car.transmission }} /
        {{ car.bodyCar }} / {{ car.color }}
    </p>

    <div class="flex flex-col items-center h-48">
        <img class="rounded-t-lg" v-bind:src="car.image[1]" />
    </div>

    <h5 class="mb-1 text-xl font-medium text-gray-900 ml-4">
        {{ car.price.toLocaleString() }} ₽
    </h5>
    <span class="text-sm text-gray-500 ml-4">
        {{ Math.round(car.price / 84).toLocaleString() }} ₽/мес</span>

    <div class="flex flex-col items-center pb-10">
        <div class="flex mt-4 md:mt-6">
            <button v-if="productStore.simile[car.id] == 'loader'"
                class="inline-flex items-center px-12 h-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg role="status" class="inline w-3 h-3 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor" />
                </svg>
            </button>

            <NuxtLink to="/cart" v-if="(Object.keys(productStore.cart)).includes(String(car.id)) === true"><button
                    class="inline-flex items-center px-4 h-10 text-sm font-medium text-center text-gray-900 border border-gray rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    В корзине >
                </button></NuxtLink>

            <button v-if="(Object.keys(productStore.cart)).includes(String(car.id)) === false" @click="addToCart(car)"
                class="inline-flex items-center px-10 h-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <a v-if="loaderCart === false">Купить</a>
                <span v-if="loaderCart">
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-4 text-gray-200 animate-spin fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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



            <!-- v-if="возврат true, если эта карточка есть в избранном" -->
            <button @click="deleteFromFavourite(car.id)"
                v-if="(Object.keys(favouriteStore.favourite)).includes(String(car.id)) === true"
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                <svg v-if="loaderFavourite === false" class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                </svg>
                <span v-if="loaderFavourite">
                    <div role="status">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin mt-1  fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <button v-if="(Object.keys(favouriteStore.favourite)).includes(String(car.id)) === false"
                @click="addToFavourite(car)"
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                <svg v-if="loaderFavourite === false" class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                </svg>
                <span v-if="loaderFavourite">
                    <div role="status">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin mt-1  fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

import { useProduct } from '../store/productStore';
const productStore = useProduct();
import { useFavourite } from '../store/productFavourite';
const favouriteStore = useFavourite();

import { useUser } from '../store/userStore';
const userStore = useUser();

import { useFavouriteUser } from '../store/userFavourite';
const userFavourite = useFavouriteUser();

import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();


const loaderCart = ref(false)
const loaderFavourite = ref(false)


defineProps({
    car: Object,
})

function addToCart(value) {
    loaderCart.value = true
    setTimeout(() => {
        loaderCart.value = false
        productStore.addToCart(value);
        $toast.success('Добавлено в корзину', {
            position: 'bottom'
        })
    }, 1000);
}

function addToFavourite(value) {
    loaderFavourite.value = true

    setTimeout(() => {
        favouriteStore.addToFavourite(value);
        loaderFavourite.value = false
        $toast.success('Добавлено в избранное', {
            position: 'bottom'
        })
    }, 1000);
}


function deleteFromFavourite(value) {
    loaderFavourite.value = true
    setTimeout(() => {
        favouriteStore.deleteFromFavourite(value);
        loaderFavourite.value = false
        $toast.error('Удалено из избранного', {
            position: 'bottom'
        })
    }, 1000);
}
</script>