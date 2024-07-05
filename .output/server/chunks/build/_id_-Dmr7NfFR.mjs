import { _ as __nuxt_component_0 } from './nuxt-link-DnnpE7Qp.mjs';
import { u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-DaNr2jnI.mjs';
import { withAsyncContext, ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useProduct } from './productStore-CoAMqkwV.mjs';
import { u as useFavourite } from './productFavourite-CaJd8aBL.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'axios';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const productStore = useProduct();
    const favouriteStore = useFavourite();
    const route = useRoute();
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      // `${runtimeConfig.public.apiBase}/products/${route.params.id}`
      `https://dexone.ru/backend_shop/products/${route.params.id}`,
      "$wpXHD4Yxv9"
    )), __temp = await __temp, __restore(), __temp);
    const selectImg = ref([]);
    const additionalData = ref({
      1: product.value.image[1],
      2: product.value.image[2],
      3: product.value.image[3],
      4: product.value.image[4],
      5: product.value.image[5]
    });
    let count = ref(1);
    function ffSelectImg() {
      selectImg.value = [0];
      for (let i = 0; i < 5; i++) {
        if (Number(Object.getOwnPropertyNames(additionalData.value)[i]) === Number(count.value)) {
          selectImg.value.push(true);
        } else {
          selectImg.value.push(false);
        }
      }
    }
    ffSelectImg();
    watch(count, () => {
      ffSelectImg();
    });
    favouriteStore.findFavourite();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto" }, _attrs))}><a class="flex flex-col items-center bg-white rounded-lg md:flex-row"><div class="relative w-full max-w-4xl"><h5 class="ml-8 text-2xl font-medium text-gray-900">${ssrInterpolate(unref(product).brand)} ${ssrInterpolate(unref(product).model)}</h5><div class="relative h-56 overflow-hidden rounded-lg md:h-96"><div class="duration-700 ease-in-out"><img${ssrRenderAttr("src", unref(additionalData)[unref(count)])} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></div></div><div class="grid gap-4 mx-20"><div class="grid grid-cols-5 gap-4"><!--[-->`);
      ssrRenderList(unref(additionalData), (image, index) => {
        _push(`<div><img class="${ssrRenderClass([{ "bg-blue-50": unref(selectImg)[index] }, "h-auto max-w-full rounded-lg"])}"${ssrRenderAttr("src", image)} alt=""></div>`);
      });
      _push(`<!--]--></div></div><button class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray/30 group-hover:bg-gray/50"><svg class="w-4 h-4 text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg></span></button><button class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"><span class="inline-flex items-center justify-center w-10 h-10"><svg class="w-4 h-4 text-gray rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg></span></button></div><div class="flex flex-col justify-between p-4 leading-normal"><div class="w-full max-w-sm p-8 px-16 bg-gray-50 border border-gray-200 rounded-lg shadow"><h5 class="mb-4 text-xl font-medium text-gray-900">\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438</h5><ul role="list" class="space-y-5 my-7"><li class="flex items-center"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ${ssrInterpolate(unref(product).year)}</span></li><li class="flex"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate(unref(product).power)} \u043B/\u0441</span></li><li class="flex"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u041A\u0443\u0437\u043E\u0432: ${ssrInterpolate(unref(product).kuzov)}</span></li><li class="flex"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u0422\u0440\u0430\u043D\u0441\u043C\u0438\u0441\u0441\u0438\u044F: ${ssrInterpolate(unref(product).transmission)}</span></li><li class="flex"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: ${ssrInterpolate(unref(product).engine)}</span></li><li class="flex"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u0426\u0432\u0435\u0442: ${ssrInterpolate(unref(product).color)}</span></li><li class="flex"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg><span class="text-base font-normal leading-tight text-gray-900 ms-3">\u0426\u0435\u043D\u0430: ${ssrInterpolate(unref(product).price.toLocaleString())} \u20BD</span></li></ul><div class="flex flex-col items-center"><div class="flex mt-4 md:mt-6">`);
      if (unref(productStore).simile[unref(product).id] > 0) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="inline-flex items-center px-6 py-2.5 text-sm font-medium text-center text-gray-900 border border-gray rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300"${_scopeId}> \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 &gt; </button>`);
            } else {
              return [
                createVNode("button", { class: "inline-flex items-center px-6 py-2.5 text-sm font-medium text-center text-gray-900 border border-gray rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300" }, " \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 > ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(productStore).simile[unref(product).id] == "loader") {
        _push(`<button class="inline-flex items-center px-12 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg aria-hidden="true" role="status" class="inline w-3 h-3 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(productStore).simile[unref(product).id] == 0) {
        _push(`<button class="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> \u041A\u0443\u043F\u0438\u0442\u044C </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(favouriteStore).simile[unref(product).id] == 0) {
        _push(`<button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(favouriteStore).simile[unref(product).id] == 1) {
        _push(`<button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(favouriteStore).simile[unref(product).id] == "loader") {
        _push(`<button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Dmr7NfFR.mjs.map
