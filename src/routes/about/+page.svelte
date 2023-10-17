<script>
	import Comment from '$lib/components/Comment.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>about - {config.name}</title>
</svelte:head>

<section>
	<div class="about">
		<Comment title="about" />
		<p>
			I enjoy creating something that can live on the Internet, it is what drives me to try out new
			things. 🚀 I am specialized in building and designing web components and I am always ready to
			learn something new! 🎓
		</p>
		<p>
			I occasionally do content creation in my free time as I started developing interest in video
			and photo editing over the years. 📹 🖼️
		</p>
	</div>

	<div class="skills">
		<Comment title="skills" />
		<div class="skills-container">
			<Skills />
		</div>
	</div>

	<div class="projects">
		<Comment title="projects" />
		<Projects />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 3fr;
		grid-template-areas:
			'about about'
			'skills projects';
		gap: var(--size-7);
	}

	section > *:not(:last-child) {
		margin-bottom: var(--size-3);
	}

	p {
		width: fit-content;
		max-inline-size: none;
		margin-bottom: var(--size-2);
		text-align: justify;
	}

	.about {
		grid-area: about;
	}

	.projects {
		grid-area: projects;
	}

	.skills {
		grid-area: skills;
	}

	@media (max-width: 768px) {
		section {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			grid-template-areas:
				'about'
				'skills'
				'projects';
		}

		.skills-container {
			display: grid;
			place-items: center;
		}
	}
</style>
