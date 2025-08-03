import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common.css'
import {BookDisplay} from './component.tsx'

function init() {
	const rootEl = document.getElementById('minecraft-book');
	if (!rootEl) return;

	const author = rootEl.dataset.author || "Unknown";
	const title = rootEl.dataset.title || "Untitled";
	const pages = rootEl.dataset.pages || "[\"No text has been found.\"]";

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
