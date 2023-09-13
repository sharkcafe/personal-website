<script>
	import Social from "./Social.svelte";
	import Twitter from "./Twitter.svelte";
</script>

<div class="container">
    <Social icon='simple-icons:codeberg' title='Codeberg' href='https://codeberg.org/puppy' username='puppy' />

    <Social icon='ic:round-discord' title='Discord' href='https://discord.com/users/969035746923126824' username='pluwshy' />

    <Social icon='ic:round-tiktok' title='TikTok' href='https://www.tiktok.com/@pluwshyy' username='@pluwshyy' />

    <Twitter href='https://twitter.com/pluwshyy' username='@pluwshyy' />

    <Social icon='lucide:at-sign' title='Bluesky' href='https://bsky.app/profile/pluwshy.gay' username='@pluwshy.gay' />
</div>

<style>
    .container {
        display: grid;
        row-gap: var(--size-3);
        width: fit-content;
    }
</style>