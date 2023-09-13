import { g as getContext, c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-om4tmo{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}img.svelte-om4tmo{width:var(--size-fluid-9);;;margin-top:var(--size-3)}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="error svelte-om4tmo"><h2>${escape($page.status)}</h2> <p>${escape($page.error?.message)}</p> <img src="/error.gif" alt="cat at laptop" loading="lazy" class="svelte-om4tmo"> </div>`;
});
export {
  Error$1 as default
};
