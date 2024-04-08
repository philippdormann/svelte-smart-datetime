import * as chrono from "chrono-node";
// 
export const parseDateTime = (inputString: string, locale: AllowedLocales) => {
    if (locale === "de") {
        return chrono.de.parseDate(inputString)
    }
    if (locale === "uk") {
        return chrono.uk.parseDate(inputString)
    }
    if (locale === "ja") {
        return chrono.ja.parseDate(inputString)
    }
    if (locale === "fr") {
        return chrono.fr.parseDate(inputString)
    }
    if (locale === "nl") {
        return chrono.nl.parseDate(inputString)
    }
    if (locale === "ru") {
        return chrono.ru.parseDate(inputString)
    }
    if (locale === "pt") {
        return chrono.pt.parseDate(inputString)
    }
    return chrono.parseDate(inputString);
};
export const formatDateTime = (datetime: Date | string) => {
    return new Date(datetime).toLocaleTimeString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
};
export const getDateTimeLocal = (timestamp?: Date): string => {
    const d = timestamp ? new Date(timestamp) : new Date();
    if (d.toString() === "Invalid Date") return "";
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
        .toISOString()
        .split(":")
        .slice(0, 2)
        .join(":");
};
export type AllowedLocales = "en" | "ja" | "fr" | "nl" | "ru" | "uk" | "de" | "pt"