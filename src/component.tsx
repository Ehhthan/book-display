import './styles.css'
import MiniMessage from "minimessage-js";
import {useState} from "react";

export function BookDisplay({text, maxPages}: {text: string, maxPages: number}) {
    const [page, setPage] = useState(1);

    const component = MiniMessage
        .miniMessage()
        .deserialize(text);

    return (
        <div className={'book-container'}>
            <div className={"book-page-counter book-text"}>
                Page {page} of {maxPages}
            </div>

            <div className={"book-text book-text-content"}
                 dangerouslySetInnerHTML={{__html: MiniMessage.miniMessage().toHTML(component)}}
            />

            <div
                className={"book-button book-backward"}
                draggable={false}
                hidden={page <= 1}
                onClick={() => {
                    if (page - 1 > 0) {
                        setPage(page - 1);
                    }
                }}
            />

            <div
                className={"book-button book-forward"}
                draggable={false}
                hidden={page >= maxPages}
                onClick={() => {
                    if (page + 1 <= maxPages) {
                        setPage(page + 1);
                    }
                }}
            />

        </div>
    );
}
