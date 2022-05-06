import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2835083a.js";
import { H as Hero } from "../../chunks/Hero-186c574a.js";
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative bg-white"}"><div class="${"absolute inset-0"}"><div class="${"absolute inset-y-0 left-0 w-1/2 bg-gray-50"}"></div></div>
	<div class="${"relative max-w-7xl mx-auto lg:grid lg:grid-cols-5"}"><div class="${"bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"}"><div class="${"max-w-lg mx-auto"}"><h2 class="${"text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"}">Say hello</h2>
				<p class="${"mt-3 text-lg leading-6 text-gray-500"}">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
					Sapien tortor lacus arcu.
				</p>
				<dl class="${"mt-8 text-base text-gray-500"}"><div class="${"mt-6"}"><dt class="${"sr-only"}">Phone number</dt>
						<dd class="${"flex"}">
							<svg class="${"flex-shrink-0 h-6 w-6 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}"></path></svg>
							<span class="${"ml-3"}">(307) 349-2727 </span></dd>
					</div><div class="${"mt-3"}"><dt class="${"sr-only"}">Email</dt>
						<dd class="${"flex"}">
							<svg class="${"flex-shrink-0 h-6 w-6 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}"></path></svg>
							<span class="${"ml-3 underline decoration-sky-400"}">create@blueengineering.dev </span></dd></div></dl></div></div>
		<div class="${"bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"}"><div class="${"max-w-lg mx-auto lg:max-w-none"}"><form action="${"#"}" method="${"POST"}" class="${"grid grid-cols-1 gap-y-6"}"><div><label for="${"full-name"}" class="${"sr-only"}">Full name</label>
						<input type="${"text"}" name="${"full-name"}" id="${"full-name"}" autocomplete="${"name"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}" placeholder="${"Full name"}"></div>
					<div><label for="${"email"}" class="${"sr-only"}">Email</label>
						<input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}" placeholder="${"Email"}"></div>
					<div><label for="${"phone"}" class="${"sr-only"}">Phone</label>
						<input type="${"text"}" name="${"phone"}" id="${"phone"}" autocomplete="${"tel"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}" placeholder="${"Phone"}"></div>
					<div><label for="${"message"}" class="${"sr-only"}">Message</label>
						<textarea id="${"message"}" name="${"message"}" rows="${"4"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"}" placeholder="${"Message"}"></textarea></div>
					<div><button type="${"submit"}" class="${"inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}">Submit</button></div></form></div></div></div></div>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Blue Engineering | About</title>`, ""}`, ""}
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export { Contact as default };
