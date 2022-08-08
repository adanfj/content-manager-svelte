<script>
	import "../app.css";
	import theme from "$lib/shared/stores/theme";
</script>

<main class={$theme}>
	<div class="bg-orange-200 dark:bg-zinc-800 h-screen w-screen">
		<slot />
	</div>
</main>
