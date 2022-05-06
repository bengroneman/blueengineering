<script lang="ts">
	import Hero from '../components/Hero.svelte';
</script>

<svelte:head>
	<title>Blue Engineering | Home</title>
</svelte:head>

<Hero>
	<h2 slot="title" class="pt-6">Simplicity. User Experience. Community.</h2>
	<div slot="content" class="content">
		<p class="mx-auto">
			Hello, I am an independent Software Engineer with diverse experience in full-stack
			engineering, analytics, marketing, design, and communications.<br />
			I spend a majority of my time working with non-profits, small businesses, and focus on delivering
			high-quality, user focused software.
		</p>
	</div>

	<button slot="cta" type="button" class="btn-primary mt-8">
		<a href="#projects" class="font-semibold" aria-labelledby="link to scroll to project section"
			>See my work</a
		>
	</button>
</Hero>

<div class="relative">
	<div class="absolute inset-0 flex items-center" aria-hidden="true">
		<div class="w-full border-t border-gray-300" />
	</div>
	<div class="relative flex justify-center">
		<h1 id="projects" class="p-6 text-gray-700">Projects</h1>
	</div>
</div>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
	<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
		<div>
			<p class="mt-3 mx-auto text-xl text-gray-500 sm:mt-4">
				Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
				Sapien tortor lacus arcu.
			</p>
		</div>
		<div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
			<div>
				<div>
					<a href="/" class="inline-block">
						<span
							class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
						>
							JavaScript
						</span>
						<span
							class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-sky-800"
						>
							Python
						</span>
					</a>
				</div>
				<a href="/" class="block mt-4">
					<p class="text-xl font-semibold text-gray-900">Quality Toolkit</p>
					<p class="mt-3 text-base text-gray-500">
						Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
						Sapien tortor lacus arcu.
					</p>
				</a>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="/">
							<span class="sr-only"> Self </span>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-gray-900">
							<span class="font-medium">Lead Software Engineer </span> @
							<span class="underline decoration-sky-400 font-semibold">Blue Engineering LLC</span>
						</p>
						<div class="flex space-x-1 text-sm text-gray-500">
							<time datetime="2022-01-01"> 2022 </time>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div>
					<a href="/" class="inline-block">
						<span
							class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
						>
							JavaScript
						</span>
						<span
							class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
						>
							Strapi
						</span>
						<span
							class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
						>
							Case Study
						</span>
					</a>
				</div>
				<a href="/" class="block mt-4">
					<p class="text-xl font-semibold text-gray-900">Blue Engineering redesign</p>
					<p class="mt-3 text-base text-gray-500">
						Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
						Sapien tortor lacus arcu.
					</p>
				</a>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="/">
							<span class="sr-only">Lead Software Engineer with Blue Engineering LLC</span>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-gray-900">
							<span class="font-medium">Lead Software Engineer </span> @
							<span class="underline decoration-sky-400 font-semibold">Blue Engineering LLC</span>
						</p>
						<div class="flex space-x-1 text-sm text-gray-500">
							<time datetime="2022-01-01"> 2022 </time>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div>
					<a href="/" class="inline-block">
						<span
							class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
						>
							Case Study
						</span>
					</a>
				</div>
				<a href="/" class="block mt-4">
					<p class="text-xl font-semibold text-gray-900">NOLS Step Forward</p>
					<p class="mt-3 text-base text-gray-500">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi
						sequi.
					</p>
				</a>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="https://nols.edu">
							<span class="sr-only">National Outdoor Leadership School</span>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm text-gray-900">
							<span class="font-medium">Web Developer </span> @
							<span class="underline decoration-amber-700 font-semibold"
								>National Outdoor Leadership School</span
							>
						</p>
						<div class="flex space-x-1 text-sm text-gray-500">
							<time datetime="2020-02-12"> Feb 12, 2020 </time>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
