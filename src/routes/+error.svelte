<script>
    import { page } from '$app/stores';
</script>

<div class="error">
    <h2>{$page.status}</h2>
    <p>{$page.error?.message}</p>
    <img src="/error.gif" alt="cat at laptop" loading="lazy">
</div>

<style>
    .error {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    img {
        width: var(--size-fluid-9);;
        margin-top: var(--size-3);
    }
</style>