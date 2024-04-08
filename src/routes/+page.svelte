<script>
	import Picker from "$lib/Picker.svelte";
	//
	let dateTime = new Date();
</script>

<div class="p-2 space-y-4">
	<p>{dateTime}</p>
	<Picker locale="de" bind:dateTime />
</div>
