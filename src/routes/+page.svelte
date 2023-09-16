<script>
	import * as config from '$lib/config';
	import Comment from '$lib/components/Comment.svelte';
	import Socials from '$lib/components/Socials.svelte';
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<Comment title="intro" />
<h1>Heya, name's <span>{config.name}</span>!</h1>
<p>
	I am a 19-year-old software developer from Germany with a great passion for web development and
	design! I also love to do video editing and content creation through social media.
</p>

<Comment title="socials" />
<Socials />

<style>
	p {
		max-inline-size: none;
		padding-block-end: var(--size-7);
		width: fit-content;
	}

	span {
		color: var(--brand);
	}
</style>
