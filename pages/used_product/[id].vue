<template>
  <div class="max-w-7xl mx-auto">
    <a class="flex flex-col items-center bg-white rounded-lg md:flex-row">
      <div class="relative w-full max-w-4xl">
        <h5 class="ml-8 text-2xl font-medium text-gray-900">
          {{ product.data.brand }} {{ product.data.modelCar }}
        </h5>
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96 mt-4">
          <div class="duration-700 ease-in-out">
            <img
              :src="product.data.image[0][imageCount]"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>

        <div class="grid gap-4 mx-20">
          <div class="grid grid-cols-5 gap-4">
            <div v-for="(image, index) in product.data.image[0]">
              <img
                :class="{ 'bg-blue-50': index == imageCount }"
                class="h-auto max-w-full rounded-lg"
                :src="image"
                alt=""
                @click="imageCount = index"
              />
            </div>
          </div>
        </div>

        <button
          :class="{ hidden: imageCount <= 1 }"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          @click.prevent="
            () => {
              if (imageCount > 1) {
                imageCount--
              }
            }
          "
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray/30 group-hover:bg-gray/50"
          >
            <svg
              class="w-4 h-4 text-gray"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>

        <button
          :class="{ hidden: imageCount >= 5 }"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          @click.prevent="
            () => {
              if (imageCount < 5) {
                imageCount++
              }
            }
          "
        >
          <span class="inline-flex items-center justify-center w-10 h-10">
            <svg
              class="w-4 h-4 text-gray rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>

      <div class="flex flex-col justify-between p-4 leading-normal">
        <div
          class="w-full max-w-sm p-8 px-16 bg-gray-50 border border-gray-200 rounded-lg shadow"
        >
          <h5 class="mb-4 text-xl font-medium text-gray-900">Характеристики</h5>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>
              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Год выпуска: {{ product.data.year }}</span
              >
            </li>
            <li class="flex">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
                />
              </svg>
              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Мощность: {{ product.data.power }} л/с</span
              >
            </li>

            <li class="flex">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>

              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Кузов: {{ product.data.bodyCar }}</span
              >
            </li>

            <li class="flex">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"
                />
              </svg>

              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Трансмиссия: {{ product.data.transmission }}</span
              >
            </li>

            <li class="flex">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
              </svg>

              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Тип двигателя: {{ product.data.engine }}</span
              >
            </li>

            <li class="flex">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
                />
              </svg>

              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Цвет: {{ product.data.color }}</span
              >
            </li>

            <li class="flex">
              <svg
                class="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>

              <span
                class="text-base font-normal leading-tight text-gray-900 ms-3"
                >Цена: {{ product.data.price.toLocaleString() }} ₽</span
              >
            </li>
          </ul>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: product } = await useApiCarData(`api/${route.path}`)

useHead({
  title:
    "Купить " + product.value.data.brand + " " + product.value.data.modelCar
})

const loaderFavourite = ref(false)
const loaderCart = ref(false)

const imageCount = ref(1)

// function addToCart(value) {
//   loaderCart.value = true
//   setTimeout(() => {
//     loaderCart.value = false
//     productStore.addToCart(value);
//     $toast.success('Добавлено в корзину', {
//       position: 'bottom'
//     })
//   }, 1000);
// }

// function addToFavourite(value) {
//   loaderFavourite.value = true
//   setTimeout(() => {
//     favouriteStore.addToFavourite(value);
//     loaderFavourite.value = false
//     $toast.success('Добавлено в избранное', {
//       position: 'bottom'
//     })
//   }, 1000);
// }

// function deleteFromFavourite(value) {
//   loaderFavourite.value = true
//   setTimeout(() => {
//     favouriteStore.deleteFromFavourite(value);
//     loaderFavourite.value = false
//     $toast.error('Удалено из избранного', {
//       position: 'bottom'
//     })
//   }, 1000);
// }
</script>
