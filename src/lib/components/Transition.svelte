<script>
    import { fade, fly } from 'svelte/transition';

    export let url = '';
</script>

{#key url}
    <div class="transition" in:fly={{ y: 10 }}>
        <slot />
    </div>
{/key}

<style>
    .transition {
        height: 100%;
    }
</style>