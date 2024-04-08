<script lang="ts">
	import "../main.css";
	import { format } from "@formkit/tempo";
	import * as chrono from "chrono-node";
	import { onMount } from "svelte";
	//
	function parseDateTime(inputString: string, locale: AllowedLocales) {
		if (locale === "de") {
			return chrono.de.parseDate(inputString);
		}
		if (locale === "uk") {
			return chrono.uk.parseDate(inputString);
		}
		if (locale === "ja") {
			return chrono.ja.parseDate(inputString);
		}
		if (locale === "fr") {
			return chrono.fr.parseDate(inputString);
		}
		if (locale === "nl") {
			return chrono.nl.parseDate(inputString);
		}
		if (locale === "ru") {
			return chrono.ru.parseDate(inputString);
		}
		if (locale === "pt") {
			return chrono.pt.parseDate(inputString);
		}
		return chrono.parseDate(inputString);
	}
	type AllowedLocales = "en" | "ja" | "fr" | "nl" | "ru" | "uk" | "de" | "pt";
	const placeholders = [
		{ locale: "en", text: "E.g. 'tomorrow at 5pm' or 'in 2 hours'" },
		{ locale: "de", text: "z.B. 'morgen um 15 Uhr' oder 'in 2 Stunden'" },
	];
	let placeholder = "";
	//
	export let dateTime = new Date();
	export let dateTimeDisplayed = "";
	let textInput = "";
	export let locale: AllowedLocales = "en";
	onMount(() => {
		const browserLocale = navigator.language.split("-")[0] as AllowedLocales;
		locale = browserLocale;
		placeholder = placeholders.find((p) => p.locale === locale)?.text || "";
	});
</script>

<div
	class="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white shadow-sm transition-all focus-within:border-gray-800 focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-500"
>
	<input
		type="text"
		{placeholder}
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
		class="w-[4ch] border-none bg-transparent p-2 text-gray-500 focus:outline-none focus:ring-0"
	/>
</div>
