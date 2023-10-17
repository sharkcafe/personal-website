<script>
	import 'iconify-icon';

	export let href = '';
	export let icon = '';
	export let title = '';

	let size = 48;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<iconify-icon {icon} width={size} />
	<span>{title}</span>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-2);
		background-color: var(--surface-2);
		width: 7.5rem;
		height: 7.5rem;
		border-radius: var(--radius-3);
		border: var(--border-size-2) solid var(--surface-4);
		text-decoration: none;
		transition: 0.2s all;
		animation: var(--animation-fade-in);
	}

	a:hover {
		border-color: var(--brand);
	}

	span {
		color: var(--text-1);
	}

	iconify-icon {
		color: var(--brand);
	}
</style>
