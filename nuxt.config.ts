// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }]
    }
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-10-23",
  modules: [
    "nuxt-api-party",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-api-party"
  ],
  apiParty: {
    endpoints: {
      apiCar: {
        url: "https://dexone.ru"
        // url: "http://localhost:3000",
        // headers: {
        //   Authorization: `Bearer ${process.env.JSON_PLACEHOLDER_API_TOKEN}`
        // }
      }
    }
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "https://dexone.ru",
          // target: "http://localhost:3000",
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    }
  }
})
