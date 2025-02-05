<template>
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
    <img class="w-full h-48 object-cover" :src="imageUrl" alt="Car image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <NuxtLink :to="link"
      ><button
        type="button"
        class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center border border-gray-900 mb-4 ml-6 rounded-lg hover:text-gray-600 hover:border-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-700"
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
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
