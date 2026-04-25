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

const dataMap = {
    'ai': ai,
    'git': git,
    'java': java,
    'react': react,
    'rn': rn
}
const cleanBlock = (block) => {
    if (!block || typeof block !== "object") return null;

    const result = {
        type: block.type,
    };

    // -------- CLEAN PROPS --------
    if (block.props) {
        const cleanedProps = {};

        Object.entries(block.props).forEach(([key, value]) => {
            // remove unwanted defaults
            if (
                value === "default" ||
                value === null ||
                value === undefined
            ) return;

            // remove known defaults explicitly
            if (key === "textAlignment" && value === "left") return;
            if (key === "isToggleable" && value === false) return;
            if (key === "level" && value === 1) return; // optional: remove h1 default

            cleanedProps[key] = value;
        });

        if (Object.keys(cleanedProps).length > 0) {
            result.props = cleanedProps;
        }
    }

    // -------- CLEAN CONTENT --------
    if (Array.isArray(block.content)) {
        const texts = block.content
            .map((c) => {
                if (!c || c.type !== "text") return null;

                if (!c.text) return null;

                // remove empty styles
                if (!c.styles || Object.keys(c.styles).length === 0) {
                    return c.text;
                }

                return {
                    type: "text",
                    text: c.text,
                    styles: c.styles,
                };
            })
            .filter(Boolean);

        if (texts.length === 1 && typeof texts[0] === "string") {
            result.content = texts[0];
        } else if (texts.length > 0) {
            result.content = texts;
        }
    }

    // -------- CLEAN TABLE --------
    if (block.type === "table" && block.content?.rows) {
        const headers =
            block.content.rows[0]?.cells?.map(
                (c) => c.content?.[0]?.text || ""
            ) || [];

        const rows =
            block.content.rows.slice(1).map((row) =>
                row.cells.map((c) => c.content?.[0]?.text || "")
            ) || [];

        result.content = {
            headers,
            rows,
        };
    }

    return result;
};
const cleanDocument = (doc) => {
    return doc
        .map(cleanBlock)
        .filter(Boolean);
};

const Docs = ({ docName }) => {
    const [open, setOpen] = useState(false);
    const downloadJSON = () => {
        const raw = JSON.parse(localStorage.getItem("editor-content"));
        const cleaned = cleanDocument(raw);
        const blob = new Blob(
            [JSON.stringify(cleaned, null, 2)],
            { type: "application/json" }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${docName}.json`;
        a.click();

        URL.revokeObjectURL(url);
    };

    const editor = useCreateBlockNote({
        initialContent: dataMap[docName]
    });
    useEffect(() => {
        let timeOutId = null;
        if (!editor) return;
        const handleOnChnage = editor.onChange((e) => {
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => {
                console.log("Saving...")
                localStorage.setItem("editor-content", JSON.stringify(editor.document))
            }, 2000);
        })
        return () => handleOnChnage()
    }, [editor])
    return <>
        <div className="fixed z-10 top-4 right-4 flex items-center gap-4">
            {import.meta.env.DEV && <button onClick={downloadJSON} className="cursor-pointer bg-secondary text-white px-4 py-2 align-middle rounded-full">Save</button>}
            <button onClick={() => setOpen(!open)} className="bg-secondary text-white px-4 py-2 rounded-full flex items-center justify-between min-w-35 cursor-pointer">
                <p className="mr-auto">{docName.toUpperCase()}</p> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block transition-transform duration-200 transform-gpu origin-center" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg">
                  {open?<path d="M10 15l5-5 5 5z"></path>:<path d="M10 10l5 5 5-5z"></path>}
                </svg>
            </button>
            {open && <div className="absolute top-12 right-0 bg-white rounded-xl shadow min-w-35 overflow-hidden">
                {Object.keys(dataMap).map((name) => <div key={name} onClick={() => (window.location = `/docs/${name}`)} className={`px-4 py-2 cursor-pointer hover:bg-primary ${docName===name ? "text-secondary bg-primary/90" : 'text-gray'}`}>{name.toUpperCase()}</div>)}
            </div>}
        </div>
        <BlockNoteView editor={editor} theme="light" />
    </>
}

export default Docs;