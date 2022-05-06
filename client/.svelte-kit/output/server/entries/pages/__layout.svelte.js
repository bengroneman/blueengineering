import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-2835083a.js";
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"min-h-full"}"><div class="${"bg-gray-800 pb-32"}"><nav class="${"bg-gray-800"}"><div class="${"max-w-7xl mx-auto sm:px-6 lg:px-8"}"><div class="${"border-b border-gray-700"}"><div class="${"flex items-center justify-between h-16 px-4 sm:px-0"}"><div class="${"flex items-center"}"><div class="${"flex-shrink-0"}"><img class="${"h-8 w-8"}" src="${"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"}" alt="${"Workflow"}"></div>
							<div class="${"hidden md:block"}"><div class="${"ml-10 flex items-baseline space-x-4"}">
									<a href="${"/"}" class="${"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"}" aria-current="${"page"}">Home</a>

									<a href="${"/about"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">About</a>

									<a href="${"/"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Projects</a>

									<a href="${"http://164.90.152.35/xyz/customer/login"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Customer portal</a>

									<a href="${"/contact"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Say Hi</a></div></div></div>
						<div class="${"-mr-2 flex md:hidden"}">
							<button type="${"button"}" class="${"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
								
								<svg${add_attribute("class", "block h-6 w-6", 0)} xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>
								
								<svg${add_attribute("class", "hidden", 0)} xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div></div></div></div>

			
			${``}</nav>
		<header class="${"py-10"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"></div></header></div>

	<main class="${"-mt-32"}"><div class="${"max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8"}">${slots.default ? slots.default({}) : ``}</div></main></div>`;
});
export { _layout as default };
