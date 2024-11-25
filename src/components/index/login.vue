<template>

  <div v-if="state.email !== undefined && state.token !== undefined">
    <div class="mt-20"> {{ state.email }}</div>
    <button @click=exit type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">Выйти</button>

  </div>


  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 "
    v-if="state.email === undefined && state.token === undefined">
    <div class="space-y-6">
      <h5 class="text-xl font-medium text-gray-900 ">Авторизация</h5>

      <!-- selector -->
      <div class="block overflow-visible">
        <nav>
          <ul role="tablist" class="relative flex flex-row p-1 rounded-lg bg-gray-200 ">
            <li role="tab" @click="selectorloginreg = false"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer text-gray-900"
              data-value="paypal">
              <div class="z-20 text-inherit">Регистрация</div>
              <div v-if="selectorloginreg === false" class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
                data-projection-id="4"></div>
            </li>
            <li role="tab" @click="selectorloginreg = true"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center  cursor-pointer  text-gray-900"
              data-value="card">
              <div class="z-20 text-inherit">Вход</div>
              <div v-if="selectorloginreg === true" class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
                data-projection-id="4"></div>
            </li>

          </ul>
        </nav>
      </div>
      <!-- selector -->

      <!-- registration -->
      <div class="space-y-6" v-if="selectorloginreg === false">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Электронная почта</label>
          <input v-model="regemail" type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@dexone.com">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
          <input v-model="regpassword" type="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        </div>

        <button @click="register" type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Зарегистрироваться</button>
      </div>
      <!-- registration -->

      <!-- enter -->
      <div class="space-y-6" v-if="selectorloginreg === true">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Электронная почта</label>
          <input v-model="enteremail" type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@dexone.com">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
          <input v-model="enterpassword" type="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        </div>

        <button @click="login" type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Войти</button>
      </div>
      <!-- enter -->

    </div>
  </div>


</template>

<script setup>
import { useStorage } from '@vueuse/core'

const state = useStorage('vue-token', { email: undefined, token: undefined })
const selectorloginreg = ref(true)



const regemail = ref("");
const regpassword = ref("");

async function register() {
  const res = await $fetch('https://dexone.ru/api/register', {
    method: "POST",
    body: {
      email: regemail.value,
      password: regpassword.value,
    },
  });
  console.log(res)
  enteremail.value =  regemail.value
  enterpassword.value =  regpassword.value
  login()
}





const enteremail = ref("test@mail.ru");
const enterpassword = ref("12345678");
async function login() {
  const res = await $fetch('https://dexone.ru/api/login', {
    method: "POST",
    body: {
      email: enteremail.value,
      password: enterpassword.value,
    },
  });
  state.value.email = enteremail.value
  state.value.token = res.access_token
}


function exit() {
  state.value.email = undefined
  state.value.token = undefined
}




</script>
