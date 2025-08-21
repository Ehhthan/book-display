import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BookDisplay} from './component.tsx'
import './common.css'
import { Base64 } from "js-base64";

function init() {
	const rootEl = document.getElementById('minecraft-book');
	if (!rootEl) return;

	const author = rootEl.dataset.author || "Unknown Author";
	const title = Base64.decode(rootEl.dataset.title || "VW50aXRsZWQ="); // in base 64 because of character escapes
	const pages = Base64.decode(rootEl.dataset.pages || "WyJObyBUZXh0Il0="); // in base 64 because of character escapes


	createRoot(rootEl).render(
		<StrictMode>
			<BookDisplay title={title} author={author} pages={JSON.parse(pages)} />
		</StrictMode>,
	);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
