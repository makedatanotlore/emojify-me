# 🎺 Emojify – To Do

## Tools

- React
- Internet

## What's up?

- 📝 The app should feature two inputs ...
  - 🗒️ One multiline input field **on the left** that the user can write text into
  - 🗒️ One multiline input field **on the right** that displays the text from the other input with matching words replaced with emoji from [emoji.json](src/utils/emoji.json)
- ✅ Put your emojify function in [src/utils/emojify.ts](src/utils/emojify.ts)
- ✅ The text should not be emojified until the user presses an "Emojify!" button — use React 19's [`useActionState`](https://react.dev/reference/react/useActionState) to handle this
- ✅ The area with the emojified text should not be editable

## Example

- 📝 **Input**: `Hello world!`
- 🗒️ **Output**: `👋 🌍!`

## Helpful Links

- [React Reference](https://react.dev/reference/react)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Hey, listen! (bonus points)

- 🚨 Verify your emojify function with the [tests](src/utils/emojify.test.ts)!
- 📝 The app should be styled
- 🔗 The input text should be reflected in the URL so the page can be shared and will pre-fill the input on load

