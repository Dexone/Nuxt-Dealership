<template>
  <div class="justify-center mt-20 max-w-max mx-auto">
    <div
      class="m-6 p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light inline-block"
      style="background-image: url(used2.webp)"
    >
      <p
        class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
      >
        Подержанные авто с пробегом
      </p>
      <button
        type="button"
        class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
      >
        Купить
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
        </svg>
      </button>
    </div>

    <div
      class="m-6 p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light inline-block"
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
        </div>
  </div>
</template>

<script setup>
useHead({
  title: "Dealership"
})
</script>
