import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-DaNr2jnI.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useProduct } from './productStore-CoAMqkwV.mjs';
import './server.mjs';
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProduct();
    const mainInfo = ref(0);
    async function update() {
      const { data } = await useFetch(`https://dexone.ru/backend_shop/products`, "$0qHVSrtFrD");
      const mainData = data.value.map((item, index) => {
        return {
          id: data.value[index].id,
          brand: data.value[index].brand,
          model: data.value[index].model,
          year: data.value[index].year,
          power: data.value[index].power,
          kuzov: data.value[index].kuzov,
          transmission: data.value[index].transmission,
          engine: data.value[index].engine,
          color: data.value[index].color,
          price: data.value[index].price,
          image: {
            1: data.value[index].image[1],
            2: data.value[index].image[2],
            3: data.value[index].image[3],
            4: data.value[index].image[4],
            5: data.value[index].image[5]
          }
        };
      });
      mainInfo.value = mainData;
    }
    update();
    productStore.findSame();
    productStore.editQuantity();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto" }, _attrs))}><a class="flex flex-col bg-white rounded-lg md:flex-row"><div class="relative w-full max-w-3xl"><div class="p-4 md:p-5"><!--[-->`);
      ssrRenderList(unref(mainInfo), (main, index) => {
        _push(`<ul class="space-y-4 mb-4">`);
        if (unref(productStore).simile[main.id] >= 1 || unref(productStore).simile[main.id] == "loader") {
          _push(`<li><label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600"><div class="block"><a class="inline-block -ml-6"><img class="w-18 h-10"${ssrRenderAttr("src", main.image[1])}></a><a class="inline-block"><div class="w-full text-lg font-semibold">${ssrInterpolate(main.model)}</div><div class="hidden md:block">123</div><div class="w-full text-gray-500">${ssrInterpolate(main.price.toLocaleString())} \u20BD</div></a></div><div><button type="button" class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"> - </button><a type="button" class="px-2 py-1 text-sm font-medium text-gray-500">`);
          if (unref(productStore).simile[main.id] == "loader") {
            _push(`<a><svg aria-hidden="true" class="inline w-2 h-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></a>`);
          } else {
            _push(`<a>${ssrInterpolate(unref(productStore).simile[main.id])}</a>`);
          }
          _push(`</a><button type="button" class="px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"> + </button><button class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-500 p-1.5 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close"><span class="sr-only">Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg></button></div></label></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col justify-between p-4 leading-normal"><div class="w-full max-w-sm p-8 px-16 bg-gray-50 border border-gray-200 rounded-lg shadow"><h5 class="mb-4 text-xl font-medium text-gray-900">\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438</h5><ul role="list" class="space-y-5 my-7"><li class="flex items-center"> \u0421\u0443\u043C\u043C\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432: <span class="text-base font-normal leading-tight text-gray-900 ms-3">`);
      if (unref(productStore).quantity[0] == 0) {
        _push(`<a> \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0447\u0442\u043E-\u0442\u043E \u0441\u043A\u043E\u0440\u0435\u0435 </a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(productStore).quantity[0] > 0) {
        _push(`<a>${ssrInterpolate(unref(productStore).quantity[1].toLocaleString())} \u20BD </a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(productStore).quantity[1] == "0") {
        _push(`<a>\u0441\u0447\u0438\u0442\u0430\u0435\u043C...</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></li></ul></div></div></a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-eGyrzfVI.mjs.map
