<script>
    import 'iconify-icon';

    export let icon = '';
    export let title = '';

    let size = 48;
</script>

<div>
    <iconify-icon {icon} width={size} />
    <span>{title}</span>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--size-1);
        background-color: var(--surface-2);
        width: 7.5rem;
        height: 7.5rem;
        border-radius: var(--radius-3);
        border: var(--border-size-2) solid var(--surface-4);
    }

    iconify-icon {
        color: var(--brand);
    }
</style>