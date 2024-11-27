// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-10-23",
  modules: [
    "nuxt-api-party",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-api-party",
  ],
  apiParty: {
    endpoints: {
      Back: {
        url: "https://dexone.ru",
        // headers: {
        //   Authorization: `Bearer ${process.env.JSON_PLACEHOLDER_API_TOKEN}`
        // }
      },
    },
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "https://dexone.ru",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
});
