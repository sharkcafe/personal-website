<script>
    import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';

    export let data
</script>

<svelte:head>
    <title>{data.meta.title} - {config.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags">
        {#each data.meta.categories as category}
            <span class="surface-4">&num;{category}</span>
        {/each}
    </div>

    <div class="prose">
        <svelte:component this={data.content}/>
    </div>
</article>

<style>
    article {
        max-inline-size: var(--size-content-3);
        margin-inline: auto;
    }

    h1 + p {
        color: var(--text-2);
        margin-top: var(--size-2);
    }

    .tags {
        display: flex;
        margin: var(--size-7) 0;
        gap: var(--size-3);
    }

    .tags > * {
        background-color: var(--surface-2);
        padding: var(--size-2) var(--size-3);
        border-radius: var(--radius-round);
    }
</style>