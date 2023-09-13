<script>
	import 'iconify-icon';

	export let href = '';
	export let title = '';
	export let description = '';

	let width = 24;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<div class="info">
		<h6 class="title">{title}</h6>
		<p class="description">{description}</p>
	</div>
	<iconify-icon icon="eva:external-link-outline" {width} />
</a>

<style>
	a {
		text-decoration: none;
		background-color: var(--surface-2);
		display: flex;
		justify-content: space-between;
		min-height: var(--size-11);
		padding: var(--size-3) var(--size-4);
		border-radius: var(--radius-3);
		border: var(--border-size-2) solid var(--surface-4);
		margin-block: inherit;
		margin-inline: inherit;
	}

	iconify-icon {
		color: var(--text-2);
	}
	.title {
		color: var(--brand);
		margin-bottom: var(--size-1);
	}
	.description {
		color: var(--text-1);
	}
</style>
