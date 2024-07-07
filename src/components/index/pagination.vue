<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base max-w-32 mx-auto">
      <li>
        <button @click="ffLeft(), ffColor()"
          class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
        </button>
      </li>
      <li v-for="(page, index) in totalPages">
        <button :class="{ 'bg-blue-50': color[index] }" @click="(currentPage = page), ffColor()"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
          {{ page }}
        </button>
      </li>
      <li>
        <button @click="ffRight(), ffColor()"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  type: Object,
  required: true
});
const runtimeConfig = useRuntimeConfig();

let search = inject('search');
const currentPage = inject('currentPage');
const totalPages = ref([]);
function ffPage() {
  const data = useFetch(`${runtimeConfig.public.apiBase}/products?${search.value.join('')}`);
  setTimeout(() => {
    totalPages.value = [];
    for (let i = 1; i < Math.ceil(data.data.value.length / 10) + 1; i++) {
      totalPages.value.push(i);
    }
  }, 500);
}
ffPage();
const color = ref([]);
function ffColor() {
  color.value = [];
  for (let i = 0; i < totalPages.value.length; i++) {
    if (totalPages.value[i] === currentPage.value) {
      color.value.push(true);
    } else {
      color.value.push(false);
    }
  }
}
ffColor();
function ffRight() {
  if (currentPage.value === totalPages.value[totalPages.value.length - 1]) {
  } else {
    currentPage.value = currentPage.value + 1;
  }
}
function ffLeft() {
  if (currentPage.value === 1) {
  } else {
    currentPage.value = currentPage.value - 1;
  }
}
//pagination

watch(search, () => {
  ffPage();
  currentPage.value = 1;
  ffColor();
});
</script>
