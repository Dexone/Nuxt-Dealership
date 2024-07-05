import { _ as __nuxt_component_0 } from './nuxt-link-DnnpE7Qp.mjs';
import { ref, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProduct();
    const page = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><header><nav class="bg-white border-gray-200 pt-4 px-4 max-w-7xl mx-auto"><div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pb-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="flex items-center space-x-3 rtl:space-x-reverse"${_scopeId}>`);
            if (unref(page) === 1) {
              _push2(`<span class="text-blue-700 self-center text-2xl font-semibold whitespace-nowrap"${_scopeId}>MSHOP</span>`);
            } else {
              _push2(`<span class="self-center text-2xl text-gray-700 font-semibold whitespace-nowrap"${_scopeId}>MSHOP</span>`);
            }
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", {
                onClick: ($event) => page.value = 1,
                class: "flex items-center space-x-3 rtl:space-x-reverse"
              }, [
                unref(page) === 1 ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-blue-700 self-center text-2xl font-semibold whitespace-nowrap"
                }, "MSHOP")) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "self-center text-2xl text-gray-700 font-semibold whitespace-nowrap"
                }, "MSHOP"))
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center space-x-4 rtl:space-x-reverse font-medium pt-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/favourite",
        onClick: ($event) => page.value = 2
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-[29px] h-[29px] text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-[29px] h-[29px] text-gray-700",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        onClick: ($event) => page.value = 3
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="relative inline-flex items-center pt-1.5 px-0.5 text-sm font-medium text-center"${_scopeId}><svg class="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"${_scopeId}></path></svg>`);
            if (unref(productStore).quantity[0] == "loader") {
              _push2(`<span class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-800 border-2 border-white rounded-full -top-2 -end-2"${_scopeId}><svg aria-hidden="true" class="inline w-3 h-3 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"${_scopeId}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"${_scopeId}></path></svg></span>`);
            } else {
              _push2(`<span class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-800 border-2 border-white rounded-full -top-2 -end-2"${_scopeId}>${ssrInterpolate(unref(productStore).quantity[0])}</span>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "relative inline-flex items-center pt-1.5 px-0.5 text-sm font-medium text-center" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-[33px] h-[33px] text-gray-800 dark:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.3",
                    d: "M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  })
                ])),
                unref(productStore).quantity[0] == "loader" ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-800 border-2 border-white rounded-full -top-2 -end-2"
                }, [
                  (openBlock(), createBlock("svg", {
                    "aria-hidden": "true",
                    class: "inline w-3 h-3 text-gray-200 animate-spin fill-blue-600",
                    viewBox: "0 0 100 101",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                      fill: "currentColor"
                    }),
                    createVNode("path", {
                      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                      fill: "currentFill"
                    })
                  ]))
                ])) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-800 border-2 border-white rounded-full -top-2 -end-2"
                }, toDisplayString(unref(productStore).quantity[0]), 1))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="py-1.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"${_scopeId}>`);
            if (unref(productStore).user == 1) {
              _push2(`<a${_scopeId}>\u0412\u043E\u0439\u0442\u0438</a>`);
            } else {
              _push2(`<a${_scopeId}>${ssrInterpolate(unref(productStore).name)}</a>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "py-1.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              }, [
                unref(productStore).user == 1 ? (openBlock(), createBlock("a", { key: 0 }, "\u0412\u043E\u0439\u0442\u0438")) : (openBlock(), createBlock("a", { key: 1 }, toDisplayString(unref(productStore).name), 1))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav></header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<footer><hr class="my-6 border-gray-200 mx-auto"><span class="block text-sm text-gray-500 text-center">\xA9 2024 <a href="https://github.com/Dexone" class="hover:underline">Dexone</a>. All Rights Reserved.</span></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-kAHUVExV.mjs.map
