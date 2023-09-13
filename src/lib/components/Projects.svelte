<script>
	import Project from './Project.svelte';
</script>

<div class="container">
	<Project
		href="https://codeberg.org/puppy/personal-website"
		title="personal-website"
		description="My Personal Website using SvelteKit" />
</div>

<style>
	.container {
		display: grid;
		gap: var(--size-3);
		grid-template-columns: 1fr;
	}
</style>
