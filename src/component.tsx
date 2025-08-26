import './styles.css'
import {useState} from "react";
import MiniMessage from "minimessage-js";

interface BookMeta {
    author: string;
    title: string;
    pages: string[];
}

export function BookDisplay({author, title, pages}: BookMeta) {
    const [page, setPage] = useState(1);

    const maxPages = pages.length;

    const component = MiniMessage
        .miniMessage()
        .deserialize(pages[page - 1]);

    return <div className={'book-container'}>
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
        <div className={"book-info"} draggable={false} title={"Title: " + title + "\n" + "Author: " + author }/>
    </div>;
}
