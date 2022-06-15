<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import { aboutContent } from '../store/index.js';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(async () => {
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const data = await fetch('http://164.90.152.35:4082/api/about?populate=*', options).then(
				(res) => res.json()
			);
			aboutContent.set(data);
			loading = false;
		} catch (err) {
			console.error(err);
		}
	});
</script>

<svelte:head>
	<title>Blue Engineering | About</title>
</svelte:head>

{#if !loading && $aboutContent}
	<Hero>
		<h2 slot="title" class="pt-6">{$aboutContent.data.attributes.Hero.Header}</h2>
		<div slot="content">
			<p class="mx-auto">
				{$aboutContent.data.attributes.Hero.Content}
			</p>
		</div>

		<button slot="cta" type="button" class="btn-primary mt-8">
			<a href="#projects" class="font-semibold" aria-labelledby="link to scroll to project section"
				>Learn More</a
			>
		</button>
	</Hero>

	<div class="relative py-16 bg-white overflow-hidden">
		<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
			<div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
				<svg
					class="absolute top-12 left-full transform translate-x-32"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
				</svg>
				<svg
					class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="f210dbf6-a58d-4871-961e-36d5016a0f49"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
				</svg>
			</div>
		</div>
		<div class="relative px-4 sm:px-6 lg:px-8">
			<div class="text-lg max-w-prose mx-auto">
				<h1>
					<span
						class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
						>About</span
					>
					<span
						class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
						>Blue Engineering</span
					>
				</h1>
				<p class="mt-8 text-xl text-gray-500 leading-8">
					{$aboutContent.data.attributes.Body}
				</p>
			</div>
			<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto" />
		</div>
	</div>
{/if}
