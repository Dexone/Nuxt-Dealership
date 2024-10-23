<template>


    <div v-if="(Object.values(state2).join('')) === '1111'">






        <div class="max-w-24 mx-auto mb-10" >
        <button @click="state2.input1 = '', state2.input2 = '', state2.input3 = '', state2.input4 = ''"
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

                <a type="button" 
                    class="font-medium text-blue-600  hover:underline">Ред. </a>
                    <a type="button" 
                    class="font-medium text-blue-600  hover:underline">Удалить</a>
            </td>
        </tr>


    </tbody>
</table>


</div>




    </div>















    <form class="max-w-sm mx-auto" v-if="(Object.values(state2).join('')) !== '1111'">
        <label class="block mb-2 text-sm font-medium text-gray-900">Админ-панель</label>
        <p class="mb-2 text-sm text-gray-500 ">Введите ключ доступа</p>
        <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
            <div>
                <input v-model="state.input1" type="text" maxlength="1" id="code-1"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>
            <div>
                <input v-model="state.input2" @keydown.delete="inp1focus()" type="text" maxlength="1" id="code-2"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ">
            </div>
            <div>
                <input v-model="state.input3" @keydown.delete="inp2focus()" type="text" maxlength="1" id="code-3"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>
            <div>
                <input v-model="state.input4" @keydown.delete="inp3focus(), state.input4 = ''" type="text" maxlength="1"
                    id="code-4"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>

        </div>

    </form>
    <div>
    </div>






</template>

<script setup>

import { useStorage } from '@vueuse/core'





//login
const theDefault = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
}
const state = useStorage('vue-use-local-storage', theDefault)
const state2 = useStorage('vue-use-local-storage', theDefault)
watch(state2, () => {

    if (state2.value.input1 > 0) {
        inp2focus()
    }
    if (state2.value.input2 > 0) {
        inp3focus()
    }
    if (state2.value.input3 > 0) {
        inp4focus()
    }
});
function inp1focus() {
    document.getElementById('code-1').focus();
}
function inp2focus() {
    document.getElementById('code-2').focus();
}
function inp3focus() {
    document.getElementById('code-3').focus();
}
function inp4focus() {
    document.getElementById('code-4').focus();
}
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
