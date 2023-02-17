// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  builder: "webpack",
  // auto import components
  components: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    // '@vueuse/nuxt',
    "@pinia/nuxt",
    // [
    //   "@pinia/nuxt",
    //   {
    //     autoImports: ["counter"],
    //   },
    // ],
  ],
  runtimeConfig: {
    public: {
      baseURL: "https://kinopoiskapiunofficial.tech",
      key: "8f08de08-a9b3-4864-9af0-e10ab25dd6cd",
      // key: "d00a1fbf-d490-477b-9023-06332b18110d",
    },
  },
  css: ["@/assets/css/main.scss"],
});
