import { describe, expect, test } from "vitest";
import emojify from "./emojify";

describe("emojify", () => {
	test.each([
		{ text: "hello world", expected: "👋 🌍" }, // replace words with emoji
		{ text: "Hello World", expected: "👋 🌍" }, // ignore case
		{ text: "helloooooo worlddddd", expected: "helloooooo worlddddd" }, // does not replace parts of words
		{ text: "my other car is a RACING car", expected: "my other 🚗 is a 🏎" }, // replace biggest match
		{ text: "do you LOVE hot dogs?", expected: "do you ❤️ 🌭🌭🌭?" }, // keep punctuation
		{ text: "It's time for a Moon Cake!", expected: "It's time for a 🥮!" }, // keep case
	])("emojifies $text", ({ text, expected }) => {
		const result = emojify(text);
		expect(result).toEqual(expected);
	});
});
