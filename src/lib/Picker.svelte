<script lang="ts">
	import { format } from "@formkit/tempo";
	import { parseDateTime, type AllowedLocales } from "./utils.js";

	let dateTime = new Date();
	let dateTimeDisplayed = "";
	let textInput = "";
	export let locale: AllowedLocales = "en";
</script>

{dateTimeDisplayed}
<hr />
<div
	class="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white shadow-sm transition-all focus-within:border-gray-800 focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-500"
>
	<input
		type="text"
		placeholder="E.g. 'tomorrow at 5pm' or 'in 2 hours'"
		bind:value={textInput}
		on:blur={() => {
			const parsedDateTime = parseDateTime(textInput, locale);
			if (parsedDateTime) {
				console.log(parsedDateTime);
				dateTime = parsedDateTime;
				dateTimeDisplayed = format(
					new Date(parsedDateTime),
					"YYYY-MM-DDTHH:mm:ss"
				);
				textInput = format(new Date(parsedDateTime), {
					date: "medium",
					time: "short",
				});
			}
		}}
		class="flex-1 border-none bg-transparent p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
	/>
	<input
		type="datetime-local"
		bind:value={dateTimeDisplayed}
		on:change={(event) => {
			// const dateTimeValue = new Date(event.target.value);
			// data = dateTimeValue;
			// if (inputRef) {
			// 	inputRef.value = formatDateTime(dateTimeValue);
			// }
		}}
		class="w-[4ch] border-none bg-transparent p-2 text-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
	/>
</div>
