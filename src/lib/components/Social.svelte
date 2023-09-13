<script>
    import 'iconify-icon';

    export let icon = '';
    export let title = '';
    export let href = '';
    export let username = '';

    let size = 24;
</script>

<div class="layout">
    <div class="text">
        <iconify-icon {icon} width={size} />
        <p>{title}</p>
    </div>
    <a {href} target="_blank" rel="noopener noreferrer">{username}</a>
</div>


<style>

    .layout, .text {
        display: flex;
        align-items: center;
    }

    .text {
        gap: var(--size-3);
    }

    p {
       width: var(--size-11) 
    }

    a {
        padding: var(--size-1) var(--size-2);
        border-radius: var(--radius-2);
        background-color: var(--surface-2);
        color: var(--brand);
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>