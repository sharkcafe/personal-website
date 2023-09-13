<script>
	import * as config from '$lib/config';
</script>

<footer>
	<p>
		&copy {new Date().getFullYear()}. Made with ❤ by {config.title} |
		<a href="https://codeberg.org/puppy/personal-website" target="_blank" rel="noopener noreferrer"
			>source code</a>
	</p>
</footer>

<style>
	footer {
		padding-block: var(--size-6);
		border-top: 1px solid var(--border);
	}

	p,
	a {
		color: var(--text-2);
		text-align: center;
		margin-inline: auto;
		font-size: var(--font-size-1);
	}

	a {
		text-decoration: underline;
		transition: 0.2s all;
		animation: var(--animation-fade-in);
	}

	a:hover {
		color: var(--brand);
	}
</style>
