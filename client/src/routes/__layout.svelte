<script>
	// Assets
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
</script>

<div class="min-h-full">
	<div class="bg-gray-800 pb-32">
		<Navigation />
		<header class="py-10">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
		</header>
	</div>

	<main class="-mt-32">
		<div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</div>
