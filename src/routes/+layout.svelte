<script>
    import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
    import Transition from '../lib/components/Transition.svelte';

    import 'open-props/style';
    import 'open-props/normalize';
    import 'open-props/buttons';
    
    import '../app.css'

    export let data;
</script>

<div class="layout">
    <Header />

    <main>
        <Transition url={data.url}>
            <slot />
        </Transition>
    </main>

    <Footer />
</div>

<style>
    .layout {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        max-inline-size: 1024px;
        margin-inline: auto;
        padding-inline: var(--size-7);
        transition: all 0.3s ease-in-out;
    }

    main {
        padding-block: var(--size-9);
        border-top: var(--border-size-1) solid var(--border);
    }

    @media (max-width: 768px) {
        .layout {
            padding-inline: var(--size-3);
        }
    }
</style>