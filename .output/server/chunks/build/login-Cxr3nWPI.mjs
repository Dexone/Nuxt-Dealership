import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useProduct } from './productStore-CoAMqkwV.mjs';
import { u as useFavourite } from './productFavourite-CaJd8aBL.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'axios';

const _imports_0 = "" + buildAssetsURL("user.CXthF0zB.png");
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProduct();
    useFavourite();
    const RegOrLogin = ref(1);
    const regLogin = ref();
    const regPass = ref();
    const enterLogin = ref();
    const enterPass = ref();
    const tfPassword = ref(false);
    const newPassword = ref();
    const newPasswordRepeat = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(productStore).user == 1) {
        _push(`<div>`);
        if (unref(RegOrLogin) == 1) {
          _push(`<div class="max-w-80 mx-auto"><div class="mb-5"><label for="email" class="block mb-2 text-sm font-medium text-gray-900">\u041B\u043E\u0433\u0438\u043D</label><input placeholder="Dexone"${ssrRenderAttr("value", unref(regLogin))} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><div class="mb-5"><label for="password" class="block mb-2 text-sm font-medium text-gray-900">\u041F\u0430\u0440\u043E\u043B\u044C</label><input placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"${ssrRenderAttr("value", unref(regPass))} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"> \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F </button><button class="ml-3 text-gray-700">\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?</button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(RegOrLogin) == 2) {
          _push(`<div class="max-w-80 mx-auto"><div class="mb-5"><label for="email" class="block mb-2 text-sm font-medium text-gray-900">\u041B\u043E\u0433\u0438\u043D</label><input placeholder="Dexone"${ssrRenderAttr("value", unref(enterLogin))} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><div class="mb-5"><label class="block mb-2 text-sm font-medium text-gray-900">\u041F\u0430\u0440\u043E\u043B\u044C</label><input placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"${ssrRenderAttr("value", unref(enterPass))} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"> \u0412\u043E\u0439\u0442\u0438 </button><button class="ml-3 text-gray-700">\u0423 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(productStore).user > 1) {
        _push(`<div class="mx-auto max-w-80"><div class="w-full max-w-80 bg-white border border-gray-200 rounded-lg shadow"><div class="flex justify-end px-4 pt-8"></div><div class="flex flex-col items-center pb-10"><img class="w-24 h-24 mb-3 rounded-full shadow-lg"${ssrRenderAttr("src", _imports_0)}><h5 class="mb-1 text-xl font-medium text-gray-900">${ssrInterpolate(unref(productStore).name)}</h5>`);
        if (unref(tfPassword) == false) {
          _push(`<div class="flex flex-col items-center"><span class="text-sm text-gray-500">ID \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430: ${ssrInterpolate(unref(productStore).user)}</span><span class="text-sm text-gray-500">\u0422\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435: ${ssrInterpolate(unref(productStore).quantity[0])}</span><span class="text-sm text-gray-500">\u0421\u0443\u043C\u043C\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432: ${ssrInterpolate(unref(productStore).quantity[1])}</span><div class="flex mt-4 md:mt-6"><button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> \u0412\u044B\u0439\u0442\u0438 </button><button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"> \u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C </button></div><button class="py-2 px-14 mt-2 text-sm font-medium focus:outline-none bg-red-50 rounded-lg border border-red-500 text-red-700 hover:bg-red-150 hover:text-red-900 focus:z-10 focus:ring-4 focus:ring-gray-100"> \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(tfPassword) == true) {
          _push(`<div><div class="mb-6"><label for="password" class="block mb-2 text-sm font-medium text-gray-900">\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label><input${ssrRenderAttr("value", unref(newPassword))} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"></div><div class="mb-6"><label class="block mb-2 text-sm font-medium text-gray-900">\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C</label><input${ssrRenderAttr("value", unref(newPasswordRepeat))} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"></div><button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> \u041D\u0430\u0437\u0430\u0434 </button><button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"> \u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Cxr3nWPI.mjs.map
