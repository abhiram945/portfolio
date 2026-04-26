import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect, useState } from "react";

import ai from "../docs/ai.json"
import git from "../docs/git.json"
import java from "../docs/java.json"
import react from "../docs/react.json"
import rn from "../docs/rn.json"

import { Link, Navigate, useParams } from "react-router-dom";

const dataMap = {
    'ai': ai,
    'git': git,
    'java': java,
    'react': react,
    'rn': rn,
}

const Docs = () => {
    const [open, setOpen] = useState(false);
    const { doc } = useParams();

    const editor = useCreateBlockNote({
        initialContent: dataMap[doc] || [{ "type": "paragraph" }]
    }, [doc]);

    return <>
        <div className="fixed z-10 top-4 right-4 flex items-center gap-4" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="bg-secondary text-white px-4 py-2 rounded-full flex items-center justify-between min-w-35 cursor-pointer">
                <p className="mr-auto">{doc ? doc.toUpperCase() : "Todo"}</p> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block transition-transform duration-200 transform-gpu origin-center" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg">
                    {open ? <path d="M10 15l5-5 5 5z"></path> : <path d="M10 10l5 5 5-5z"></path>}
                </svg>
            </button>
            {open && <div className="absolute right-0 top-full bg-white rounded-xl shadow min-w-35 overflow-hidden">
                <Link key="portfolio" to="/" onClick={() => setOpen(false)} className="block px-4 py-2 cursor-pointer hover:bg-primary text-gray hover:text-secondary">HOME</Link>
                {Object.keys(dataMap).map((name) => <Link key={name} to={`/docs/${name}`} onClick={() => setOpen(false)} className={`block px-4 py-2 cursor-pointer hover:bg-primary ${doc === name ? "text-secondary bg-primary/90" : 'text-gray'}`}>{name.toUpperCase()}</Link>)}
            </div>}
        </div>
        <BlockNoteView editor={editor} theme="light" />
    </>
}

export default Docs;