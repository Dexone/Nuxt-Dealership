<template>
  <div
    class="inline-flex -space-x-px text-base h-10"
    style="display: flex; justify-content: center"
  >
    <button
      :class="{ 'bg-gray-100': paramsStore.selectedParams.page === '1' }"
      class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
      @click="
        () => {
          if (paramsStore.selectedParams.page > 1) {
            paramsStore.selectedParams.page--, paramsStore.createSearchString()
          }
        }
      "
    >
      Предыдущая
    </button>
    <button
      v-for="n in paramsStore.availableParams.pages"
      @click="
        ((paramsStore.selectedParams.page = n),
        paramsStore.createSearchString())
      "
    >
      <a
        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        :class="{ 'bg-gray-100': paramsStore.selectedParams.page == n }"
        >{{ n }}</a
      >
    </button>

    <button
      :class="{
        'bg-gray-100':
          paramsStore.selectedParams.page == paramsStore.availableParams.pages
      }"
      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
      @click="
        () => {
          if (
            paramsStore.selectedParams.page < paramsStore.availableParams.pages
          ) {
            paramsStore.selectedParams.page++
            paramsStore.createSearchString()
          }
        }
      "
    >
      Следующая
    </button>
  </div>
</template>

<script setup>
import { useParams } from "@/store/paramsStore"
const paramsStore = useParams()
</script>
