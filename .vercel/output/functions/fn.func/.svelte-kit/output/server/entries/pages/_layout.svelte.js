import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape } from "../../chunks/ssr.js";
import "iconify-icon";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
import { t as title } from "../../chunks/config.js";
const browser = BROWSER;
const userTheme = browser;
const theme = writable(userTheme);
const Toggle_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-11cxotz{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}",
  map: null
};
let size = 24;
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-11cxotz">${$theme === "dark" ? `<div><iconify-icon icon="lucide:moon"${add_attribute("width", size, 0)}></iconify-icon></div>` : `<div><iconify-icon icon="lucide:sun"${add_attribute("width", size, 0)}></iconify-icon></div>`} </button>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-zvxe76.svelte-zvxe76{display:flex;justify-content:space-between;align-items:center;color:var(--brand);padding-block:var(--size-3);position:sticky;top:0;background-color:var(--surface-1)}.links.svelte-zvxe76.svelte-zvxe76{margin-block:var(--size-7);display:flex;gap:clamp(1rem, 5vw, 2rem);margin-block:0}.links.svelte-zvxe76 a.svelte-zvxe76:hover{color:var(--text-1)}a.svelte-zvxe76.svelte-zvxe76{color:inherit;text-decoration:none;transition:0.2s all;animation:var(--animation-fade-in)}#dog.svelte-zvxe76.svelte-zvxe76{width:clamp(2rem, 6vw, 3rem);aspect-ratio:1 / 1;background-size:100%;image-rendering:pixelated;background-image:url(/dog_idle.gif)}#dog.svelte-zvxe76.svelte-zvxe76:hover{background-image:url(/dog_hover.gif)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-zvxe76"><a href="/" class="dog svelte-zvxe76" data-svelte-h="svelte-17sum4n"><div id="dog" class="svelte-zvxe76"></div></a> <ul class="links svelte-zvxe76" data-svelte-h="svelte-196zcku"><li><a href="/" class="svelte-zvxe76">home</a></li> <li><a href="/about" class="svelte-zvxe76">about</a></li> <li><a href="/blog" class="svelte-zvxe76">blog</a></li> <li><a href="/rss.xml" target="_blank" class="svelte-zvxe76">rss</a></li></ul> ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})} </nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-k3sx3v{padding-block:var(--size-6);border-top:1px solid var(--border)}p.svelte-k3sx3v,a.svelte-k3sx3v{color:var(--text-2);text-align:center;margin-inline:auto;font-size:var(--font-size-1)}a.svelte-k3sx3v{text-decoration:underline;transition:0.2s all;animation:var(--animation-fade-in)}a.svelte-k3sx3v:hover{color:var(--brand)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-k3sx3v"><p class="svelte-k3sx3v">© ${escape((/* @__PURE__ */ new Date()).getFullYear())}. Made with ❤ by ${escape(title)} |
		<a href="https://codeberg.org/puppy/personal-website" target="_blank" rel="noopener noreferrer" class="svelte-k3sx3v" data-svelte-h="svelte-pnye3a">source code</a></p> </footer>`;
});
const Transition_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transition.svelte-18kqe58{height:100%}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="transition svelte-18kqe58">${slots.default ? slots.default({}) : ``}</div>`;
});
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-xin978{height:100%;display:grid;grid-template-rows:auto 1fr auto;max-inline-size:1024px;margin-inline:auto;padding-inline:var(--size-7);transition:all 0.3s ease-in-out}main.svelte-xin978{padding-block:var(--size-9);border-top:var(--border-size-1) solid var(--border)}@media(max-width: 768px){.layout.svelte-xin978{padding-inline:var(--size-3)}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-xin978">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-xin978">${validate_component(Transition, "Transition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
