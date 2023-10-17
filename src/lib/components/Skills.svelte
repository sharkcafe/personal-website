<script>
	import 'iconify-icon';
	import Skill from './Skill.svelte';
</script>

<div class="container">
	<section>
		<div class="title">
			<iconify-icon icon="lucide:code-2" width="24" />
			<span>Frontend</span>
		</div>
		<div class="chips">
			<Skill icon="uil:html5" title="HTML" href="https://html.spec.whatwg.org/multipage/" />
			<Skill icon="uiw:css3" title="CSS" href="https://www.w3.org/Style/CSS/" />
			<Skill icon="simple-icons:javascript" title="JavaScript" href="https://tc39.es/ecma262/" />
			<Skill icon="simple-icons:svelte" title="Svelte" href="https://svelte.dev/" />
		</div>
	</section>
	<section>
		<div class="title">
			<iconify-icon icon="lucide:paintbrush-2" width="24" />
			<span>Web Design</span>
		</div>
		<div class="chips">
			<Skill icon="cib:figma" title="Figma" href="https://www.figma.com/" />
			<Skill icon="simple-icons:penpot" title="Penpot" href="https://penpot.app/" />
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
		gap: var(--size-5);
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
