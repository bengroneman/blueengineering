<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import ContactForm from '../components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Blue Engineering | About</title>
</svelte:head>
<Hero>
	<div slot="content">
		<ContactForm />
	</div>
</Hero>
