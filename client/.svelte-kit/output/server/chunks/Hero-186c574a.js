import { c as create_ssr_component } from "./index-2835083a.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white rounded-lg shadow px-5 py-6 sm:px-6 mb-32"}"><div class="${"rounded-lg h-full"}"><div class="${"container text-center mx-auto"}">${slots.title ? slots.title({}) : ``}
			${slots.content ? slots.content({}) : ``}
			${slots.cta ? slots.cta({}) : ``}</div></div></div>`;
});
export { Hero as H };
