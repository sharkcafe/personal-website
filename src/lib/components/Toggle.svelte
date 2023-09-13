<script>
    import { fly } from 'svelte/transition'
    import 'iconify-icon'
    import { theme, toggleTheme } from '$lib/theme'

    let size = 24;
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
    {#if $theme === 'dark'}
    <div in:fly={{ y: -10 }}>
        <iconify-icon icon='lucide:moon' width={size} />
    </div>
    {:else}
    <div in:fly={{ y: 10 }}>
        <iconify-icon icon='lucide:sun' width={size} />
    </div>
    {/if}
</button>

<style>
    button { 
        padding: 0;
        font-weight: inherit;
        background: none;
        border: none;
        box-shadow: none;
        overflow: hidden;
    }
</style>