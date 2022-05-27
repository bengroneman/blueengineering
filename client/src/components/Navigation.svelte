<script>
	import { afterNavigate } from '$app/navigation';

	let mobileMenuOpen = false;
	export let navItems = [
		{
			url: '/',
			title: 'Home'
		},
		{
			url: '/about',
			title: 'About'
		},
		{
			url: '/projects',
			title: 'Projects'
		},
		{
			url: '/contact',
			title: 'Say Hi'
		},
		{
			url: 'http://164.90.152.35/xyz/customer/login',
			title: 'Customer Portal'
		}
	];
	let selectedNavItem = navItems[0];

	afterNavigate(navigation => {
		selectedNavItem = navItems.filter(item => item.url === navigation.to.pathname)[0];
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="border-b border-gray-700">
			<div class="flex items-center justify-between h-16 px-4 sm:px-0">
				<div class="flex items-center">
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline justify-center space-x-4">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							{#each navItems as item}
								<a
									href={item.url}
									class={item.url === selectedNavItem.url ? "bg-gray-900 text-white px-3 py-2 rounded-md font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
									aria-current="page">{item.title}</a
								>
							{/each}
						</div>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						on:click={toggleMobileMenu}
						class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
                          Heroicon name: outline/menu

                          Menu open: "hidden", Menu closed: "block"
                        -->
						<svg
							class={!mobileMenuOpen ? 'block h-6 w-6' : 'hidden'}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<!--
                          Heroicon name: outline/x

                          Menu open: "block", Menu closed: "hidden"
                        -->
						<svg
							class={mobileMenuOpen ? 'block h-6 w-6' : 'hidden'}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if mobileMenuOpen}
		<div class="border-b border-gray-700 md:hidden" id="mobile-menu">
			<div class="px-2 py-3 space-y-1 sm:px-3">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a
					href="/"
					class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
					aria-current="page">Home</a
				>
				{#each navItems as item}
					<a
						href={item.url}
						class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
						aria-current="page">{item.title}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</nav>
