<template>
















    <div v-if="key === 'adminadmin'">


        <div class="max-w-24 mx-auto mb-10">
            <button @click="key = ''"
                class=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Выйти</button>

        </div>






        <form class="max-w-md mx-auto">
            <div class="grid md:grid-cols-2 md:gap-6 ">
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Марка</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Модель</label>
                </div>
            </div>



            <div class="relative z-0 w-full mb-5 group">
                <input
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Год
                    выпуска</label>
            </div>
            <div class="relative z-0 w-full mb-7 group">
                <input
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Мощность</label>
            </div>



            <div class="relative z-0 w-full mb-7 group ">
                <select
                    class="block pt-2.5 pb-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ">
                    <option v-for="trans in transmission">{{ trans }}</option>
                </select>
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Трансмиссия</label>
            </div>



            <div class="relative z-0 w-full mb-5 group">
                <select
                    class="block pt-2.5 pb-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                    <option v-for="eng in engine">{{ eng }}</option>
                </select>
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Трансмиссия</label>
            </div>


            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Цвет</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Цена</label>
                </div>
            </div>

            <label class="block mb-2 text-xs font-medium text-gray-500" for="small_size">Добавить фото</label>
            <input class="block w-full mb-5 text-xs text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"  type="file">

            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Добавить</button>
        </form>











        <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-7xl mx-auto mt-10">

            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Название
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Мощность
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Кузов
                        </th>
                        <th scope="col" class="px-6 py-3">
                            КПП
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Двигатель
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Цвет
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Цена
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Действие
                        </th>
                    </tr>
                </thead>




                <tbody>
                    <tr class="bg-white border-b  hover:bg-gray-50 " v-for="main in mainInfo">
                        <td class="px-6 py-4">
                            {{ main.id }}
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                            <img class="w-16 h-9 rounded-full" v-bind:src="main.image[1]">
                            <div class="ps-3">
                                <div class="text-base font-semibold">{{ main.brand }} {{ main.model }}</div>
                                <div class="font-normal text-gray-500">{{ main.year }}</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            {{ main.power }} л.с.
                        </td>
                        <td class="px-6 py-4">
                            {{ main.kuzov }}
                        </td>
                        <td class="px-6 py-4">
                            {{ main.transmission }}
                        </td>
                        <td class="px-6 py-4">
                            {{ main.engine }}
                        </td>
                        <td class="px-6 py-4">
                            {{ main.color }}
                        </td>
                        <td class="px-6 py-4">
                            {{ main.price }} р.
                        </td>
                        <td class="px-6 py-4">

                            <a type="button" class="font-medium text-blue-600  hover:underline">Ред. </a>
                            <a type="button" class="font-medium text-blue-600  hover:underline">Удалить</a>
                        </td>
                    </tr>


                </tbody>
            </table>


        </div>




    </div>










    <!-- login -->
    <div v-if="key !== 'adminadmin'">
        <form class="max-w-sm mx-auto">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">Электронная почта</label>
            <div class="flex">
                <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                    <svg class="w-4 h-4 text-gray-500 " xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 16">
                        <path
                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path
                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </span>
                <input type="text" v-model="login"
                    class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    placeholder="dexone@example.com">
            </div>
        </form>

        <form class="max-w-sm mx-auto mt-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
            <div class="flex">
                <span
                    class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                    <svg class="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
                <input type="password" v-model="password"
                    class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    placeholder="*********">
            </div>

            <button type="button" @click="key = login + password"
                class="mt-6 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                Войти
            </button>
        </form>
        <!-- login -->

    </div>



</template>

<script setup>

import { useStorage } from '@vueuse/core'



//login
const login = ref("")
const password = ref("")
const key = ref("")
const state = useStorage('vue-use-local-storage', key)
//login




//add
const transmission = ref(['АКПП', 'МКПП', 'Вариатор', 'Робот'])
const engine = ref(['Бензин', 'Дизель', 'Электро'])
//add



//allproducts
const mainInfo = ref()
const { data } = await useFetch(
    `https://dexone.ru/backend_shop/products`
);
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


</script>
