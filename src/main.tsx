import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BookDisplay} from './component.tsx'
import './common.css'
import { Base64 } from "js-base64";

function init() {
	const rootEl = document.getElementById('minecraft-book');
	if (!rootEl) return;

	const author = rootEl.dataset.author || "Unknown Author";
	const title = rootEl.dataset.title || "VW50aXRsZWQ="; // in base 64 because of character escapes
	const pages = rootEl.dataset.pages || "WyJObyBUZXh0Il0="; // in base 64 because of character escapes

	createRoot(rootEl).render(
		<StrictMode>
			<BookDisplay title={Base64.decode(title)} author={author} pages={JSON.parse(Base64.decode(pages))} />
		</StrictMode>,
	);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
