<script>
    import 'iconify-icon';
	import Skill from './Skill.svelte';

</script>

<div class="container">
    <section>
        <div class="title">
            <iconify-icon icon='lucide:code-2' width=24 />
            <span>Frontend</span>
        </div>
        <div class="chips">
            <Skill icon='uil:html5' title='HTML'/>
            <Skill icon='uiw:css3' title='CSS'/>
            <Skill icon='simple-icons:javascript' title='JavaScript'/>
            <Skill icon='simple-icons:svelte' title='Svelte'/>
        </div>
    </section>
    <section>
        <div class="title">
            <iconify-icon icon='lucide:paintbrush-2' width=24 />
            <span>Web Design</span>
        </div>
        <div class="chips">
            <Skill icon='cib:figma' title='Figma'/>
            <Skill icon='simple-icons:penpot' title='Penpot'/>
        </div>
    </section>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        width: fit-content;
        gap: var(--size-7);
    }

    .chips {
        gap: var(--size-3);
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--size-2);
        margin-bottom: var(--size-3);
        color: var(--brand);
    }
    
</style>