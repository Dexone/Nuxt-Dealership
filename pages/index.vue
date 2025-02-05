<template>
  <div class="flex justify-center mt-20">
    <!-- <a
      class="m-6 p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
      style="background-image: url(used2.webp)"
    >
      <p
        class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
      >
        Подержанные авто с пробегом
      </p>
      <NuxtLink to="/used_cars/page=1">
        <button
          type="button"
          class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </a> -->
    <div class="flex justify-between w-[48rem]">
      <IndexProduct
        imageUrl="used2.webp"
        title="Подержанные авто с пробегом"
        link="/used_cars/page=1"
      />
      <IndexProduct
        imageUrl="new2.avif"
        title="Новые автомобили с гарантией"
        link="/cars/page=1"
      />
    </div>
    <!-- <a
      class="m-6 p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
      style="background-image: url(new2.avif)"
    >
      <p
        class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
      >
        Новые автомобили с гарантией
      </p>
      <NuxtLink to="/cars/page=1"
        ><button
          type="button"
          class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
        >
          Посмотреть
          <svg
            class="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg></button
      ></NuxtLink>
    </a> -->
  </div>
</template>

<script setup>
import IndexProduct from "../src/components/index/IndexProduct.vue"

useHead({
  title: "Dealership"
})
</script>
