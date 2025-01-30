<template>
  <!-- accout page -->
  <div v-if="userStore.email !== '' && userStore.token !== ''"
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-end px-4 pt-4"></div>
    <div class="flex flex-col items-center pb-10">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        src="../../../public/user.png"
      />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ userStore.email.split("@")[0] }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >Количество товаров: {{ cartStore.getQuantityCart }}</span
      >
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >Сумма товаров: {{ cartStore.getSumCart }} ₽</span
      >
      <div class="flex mt-4 md:mt-6">
        <a
          @click="exit"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Выйти</a
        >
        <a
          class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <NuxtLink to="/cart">В корзину</NuxtLink></a
        >
      </div>
    </div>
  </div>

  <div
    v-if="userStore.email === '' && userStore.token === ''"
    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
  >
    <div class="space-y-6">
      <h5 class="text-xl font-medium text-gray-900">Авторизация</h5>

      <!-- selector -->
      <div class="block overflow-visible">
        <nav>
          <ul
            role="tablist"
            class="relative flex flex-row p-1 rounded-lg bg-gray-200"
          >
            <li
              role="tab"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer text-gray-900"
              data-value="paypal"
              @click="selectorloginreg = false"
            >
              <div class="z-20 text-inherit">Регистрация</div>
              <div
                v-if="selectorloginreg === false"
                class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
                data-projection-id="4"
              />
            </li>
            <li
              role="tab"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center cursor-pointer text-gray-900"
              data-value="card"
              @click="selectorloginreg = true"
            >
              <div class="z-20 text-inherit">Вход</div>
              <div
                v-if="selectorloginreg === true"
                class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
                data-projection-id="4"
              />
            </li>
          </ul>
        </nav>
      </div>

      <!-- registration -->
      <div v-if="selectorloginreg === false" class="space-y-6">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Электронная почта</label
          >
          <input
            v-model="regemail"
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@dexone.com"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Пароль</label
          >
          <input
            v-model="regpassword"
            type="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="register"
        >
          Зарегистрироваться
        </button>
      </div>

      <!-- enter -->
      <div v-if="selectorloginreg === true" class="space-y-6">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Электронная почта</label
          >
          <input
            v-model="enteremail"
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@dexone.com"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Пароль</label
          >
          <input
            v-model="enterpassword"
            type="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="login"
        >
          Войти
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core"
import { useCart } from "../store/cartStore"
import { useUser } from "../store/userStore"
import { useFavourite } from "../store/favouriteStore"
const cartStore = useCart()
const userStore = useUser()
const favouriteStore = useFavourite()

const selectorloginreg = ref(true) // reg or login

const regemail = ref("") // registration
const regpassword = ref("")
async function register() {
  const res = await $fetch("/api/register", {
    method: "POST",
    body: {
      email: regemail.value,
      password: regpassword.value
    }
  })
  console.log(res)
  enteremail.value = regemail.value
  enterpassword.value = regpassword.value
  login()
}

const enteremail = ref("test12@gmail.com") // login
const enterpassword = ref("Qwerty1234567")
async function login() {
  const res = await $fetch("/api/login", {
    method: "POST",
    body: {
      email: enteremail.value,
      password: enterpassword.value
    }
  })
  userStore.email = enteremail.value
  userStore.token = res.access_token
}

function exit() {
  // exit
  userStore.email = ""
  userStore.token = ""
}
</script>
