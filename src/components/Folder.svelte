<script>
    export let parent="";
    export let name;
    export let opened=true;
    export let files;
</script>

<div>{name}</div>
{#if opened}
<div class="ml-1">
{#each files as f}
    {#if f.split("/").length>0}
        <svelte:self parent={parent+"/"+f} files/>
    {/if}
{/each}
</div>
{/if}