import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common.css'
import {BookDisplay} from './component.tsx'

function init() {
	const rootEl = document.getElementById('minecraft-book');
	if (!rootEl) return;

	const author = rootEl.dataset.author || "Unknown";
	const title = rootEl.dataset.title || "Untitled";
	const pages = rootEl.dataset.pages || "WyJObyBUZXh0Il0="; // in base 64 because of character escapes

	createRoot(rootEl).render(
		<StrictMode>
			<BookDisplay title={title} author={author} pages={JSON.parse(atob(pages))} />
		</StrictMode>,
	);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
