<template>
  <div>
    {{ data.existingProduct }}

    <br />
    <input type="email" v-model="email" /> <br />
    <input type="password" v-model="password" /> <br />
    <button @click="logintest">Войти</button> <br />
    <button @click="addtocard">addtocard</button>
  </div>
</template>

<script setup>
const { data } = useFetch("http://194.58.121.72:3000/products?sortBy=power");

const email = ref("s222@as222222dad.com");
const password = ref("Qwerty1234567");

async function logintest() {
  const { data } = await useBackData("login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });
  console.log(data.value.access_token);
  localStorage.setItem("token", data.value.access_token);
}

async function addtocard() {
  const { data } = await $fetch("/api/cart/add", {
    method: "POST",
    body: {
      email: email.value,
      productId: "26e1144a-920d-45b6-85ab-2fb87603e5e2",
      quantity: 1,
    },
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
</script>
