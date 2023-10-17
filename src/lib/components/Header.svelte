<script>
	import * as config from '$lib/config';
	import Toggle from './Toggle.svelte';
</script>

<nav>
	<a href="/" class="dog">
		<div id="dog" />
		<div id="dog-cache" />
	</a>

	<ul class="links">
		<li>
			<a href="/">home</a>
		</li>
		<li>
			<a href="/about">about</a>
		</li>
		<li>
			<a href="/blog">blog</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">rss</a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--brand);
		padding-block: var(--size-3);
		position: sticky;
		top: 0;
		background-color: var(--surface-1);
	}

	.links {
		margin-block: var(--size-7);
		display: flex;
		gap: clamp(1rem, 5vw, 2rem);
		margin-block: 0;
	}

	.links a:hover {
		color: var(--text-1);
	}

	a {
		color: inherit;
		text-decoration: none;
		transition: 0.2s all;
		animation: var(--animation-fade-in);
	}

	#dog {
		width: clamp(2rem, 6vw, 3rem);
		aspect-ratio: 1 / 1;
		background-size: 100%;
		image-rendering: pixelated;
		background-image: url(/dog_idle.gif);
	}

	#dog:hover {
		background-image: url(/dog_hover.gif);
	}

	#dog-cache {
		/* display: none; */
		background-image: url(/dog_hover.gif);
	}
</style>
