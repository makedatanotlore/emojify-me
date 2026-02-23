import { useState } from "react";
import emojify from "./utils/emojify";
import "./App.css";

function App() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	return (
		<>
			<header>
				<h1>🎺 EMOJIFY</h1>
			</header>
			<section>
				<textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type something..."
				/>
				<textarea value={output} />
			</section>
		</>
	);
}

export default App;
