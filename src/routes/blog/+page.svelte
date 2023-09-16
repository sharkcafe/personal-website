<script>
	import * as config from '$lib/config';
	import Comment from '$lib/components/Comment.svelte';
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>blog - {config.name}</title>
</svelte:head>

<Comment title="blog" />

<section>
	<ul class="posts">
		{#each data.posts as post}
			<a href={post.slug}>
				<li class="post">
					<div class="info">
						<p class="title">{post.title}</p>
						<p class="description">{post.description}</p>
					</div>
					<p class="date">{formatDate(post.date)}</p>
				</li></a>
		{/each}
	</ul>
</section>

<style>
	a {
		text-decoration: none;
	}

	.posts {
		display: grid;
		gap: var(--size-3);
	}

	.post {
		display: flex;
		justify-content: space-between;
		background-color: var(--surface-2);
		padding: var(--size-3);
		border-radius: var(--size-3);
		border: var(--border-size-2) solid var(--surface-4);
		max-inline-size: none;
		transition: 0.2s all;
		animation: var(--animation-fade-in);
	}

	.post:hover {
		border-color: var(--brand);
	}

	.title {
		font-size: var(--font-size-fluid-1);
		color: var(--brand);
	}

	.date {
		color: var(--text-2);
	}

	.description {
		color: var(--text-1);
	}
</style>
