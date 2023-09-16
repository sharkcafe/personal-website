<script>
	import Comment from '$lib/components/Comment.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>contact - {config.name}</title>
</svelte:head>

<Comment title="socials" />

<Socials />
