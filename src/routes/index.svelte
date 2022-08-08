<script>
	import { onMount } from "svelte";

	import ContentViewer from "../components/ContentViewer.svelte";
	import FileTree from "../components/FileTree.svelte";

	let tablet = false;

	onMount(() => {
		window.onresize = (e) => {
			tablet = window.clientWidth<1024 && window.clientWidth>768
		};
	});
</script>

<svelte:head>
	<title>Viewer</title>
	<meta name="description" content="Custom Media Manager" />
</svelte:head>

<div class="grid grid-cols-1 lg:grid-cols-3 w-full h-fit min-h-full">
	<div class="max-w-5xl w-full col-span-2 bg-neutral-400">
		<ContentViewer />
	</div>
	{#if !tablet}
		<div class="max-w-5xl w-full bg-neutral-500">
			<FileTree />
		</div>
	{/if}
</div>
