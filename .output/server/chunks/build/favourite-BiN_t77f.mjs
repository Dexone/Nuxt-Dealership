import { _ as __nuxt_component_0 } from './nuxt-link-DnnpE7Qp.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-DaNr2jnI.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useFavourite } from './productFavourite-CaJd8aBL.mjs';
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
  __name: "favourite",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProduct();
    const favouriteStore = useFavourite();
    const mainInfo = ref();
    async function update() {
      const { data } = await useFetch(`https://dexone.ru/backend_shop/products`, "$OQRvdGlbCV");
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
    favouriteStore.findFavourite();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-white max-w-7xl mx-auto" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(mainInfo), (main, index) => {
        _push(`<a>`);
        if (unref(favouriteStore).simile[main.id] >= 1 || unref(favouriteStore).simile[main.id] == "loader") {
          _push(`<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow inline-block m-5"><h5 class="mb-1 text-xl font-medium text-gray-900 ml-4 pt-4">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${main.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(main.brand)} ${ssrInterpolate(main.model)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(main.brand) + " " + toDisplayString(main.model), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h5><p class="text-sm text-gray-500 ml-4 mr-4">${ssrInterpolate(main.year)}\u0433. / ${ssrInterpolate(main.power)}\u043B.\u0441. / ${ssrInterpolate(main.engine)} / ${ssrInterpolate(main.transmission)} / ${ssrInterpolate(main.kuzov)} / ${ssrInterpolate(main.color)}</p><div class="flex flex-col items-center"><img class="rounded-t-lg"${ssrRenderAttr("src", main.image[1])}></div><h5 class="mb-1 text-xl font-medium text-gray-900 ml-4">${ssrInterpolate(main.price)} \u20BD</h5><span class="text-sm text-gray-500 ml-4">${ssrInterpolate(Math.round(main.price / 84))} \u20BD/\u043C\u0435\u0441</span><div class="flex flex-col items-center pb-10"><div class="flex mt-4 md:mt-6">`);
          if (unref(productStore).simile[main.id] == 0) {
            _push(`<button class="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> \u041A\u0443\u043F\u0438\u0442\u044C </button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(productStore).simile[main.id] > 0) {
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
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(productStore).simile[main.id] == "loader") {
            _push(`<button class="inline-flex items-center px-12 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg aria-hidden="true" role="status" class="inline w-3 h-3 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(favouriteStore).simile[main.id] == 1) {
            _push(`<button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(favouriteStore).simile[main.id] == "loader") {
            _push(`<button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      });
      _push(`<!--]--></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favourite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=favourite-BiN_t77f.mjs.map
