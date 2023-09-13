<script>
	import 'iconify-icon';

	export let icon = 'simple-icons:x';
	export let title = 'X';
	export let href = '';
	export let username = '';
	let clicked = false;
	let size = 24;

	let changeState = () => {
		if (!clicked) {
			clicked = true;
			icon = 'mdi:twitter';
			title = 'Twitter';
		} else {
			clicked = false;
			icon = 'simple-icons:x';
			title = 'X';
		}
	};
</script>

<div class="layout">
	<div class="text" on:click={changeState} aria-hidden="true">
		<iconify-icon {icon} width={size} />
		<p>{title}</p>
	</div>
	<a {href} target="_blank" rel="noopener noreferrer">{username}</a>
</div>

<style>
	.layout,
	.text {
		display: flex;
		align-items: center;
	}

	.layout:hover {
		cursor: pointer;
	}

	p {
		width: var(--size-11);
	}

	.text {
		gap: var(--size-3);
	}

	a {
		padding: var(--size-1) var(--size-2);
		border-radius: var(--radius-2);
		background-color: var(--surface-2);
		color: var(--brand);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
