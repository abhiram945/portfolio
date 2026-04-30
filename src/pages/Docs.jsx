import { useState, useEffect, useRef, memo, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, query, orderBy, writeBatch } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

const DOCS_NAMES_COLLECTION = "docs-names";
const normalizeDocName = (name = "") => name.trim().toLowerCase();
const getDocCollectionName = (docName) => `doc_${normalizeDocName(docName)}`;
const getBlocksCollection = (docName) => collection(db, getDocCollectionName(docName));
const INDENT_PX = 24;

const TableCell = memo(({ value, onChange }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && ref.current.innerText !== value) {
            ref.current.innerText = value;
        }
    }, [value]);

    return (
        <div
            ref={ref}
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => onChange(e.currentTarget.innerText)}
            className="outline-none select-text min-h-[1.5em] w-full h-full p-2"
        />
    );
});

const placeCaretAtEnd = (el) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
};

const Block = memo(function Block({ b, i, updateBlock, handleKeyDown, olNumber }) {
    const ref = useRef(null);

    useEffect(() => {
        if (b._new && ref.current) {
            ref.current.focus();
        }
    }, [b._new]);

    // Sync state to DOM only when they differ to prevent cursor jumping
    useEffect(() => {
        if (ref.current && ref.current.innerText !== b.text) {
            ref.current.innerText = b.text;
        }
    }, [b.text]);

    if (b.type === "table") {
        let data = [["", ""]];
        try {
            data = JSON.parse(b.text || "[[\"\", \"\"], [\"\", \"\"]]");
        } catch (e) {
            data = [["", ""]];
        }

        const updateCell = (rowIndex, colIndex, val) => {
            const newData = data.map((row, ri) =>
                ri === rowIndex ? row.map((cell, ci) => ci === colIndex ? val : cell) : row
            );
            updateBlock(b.id, JSON.stringify(newData));
        };

        const addRow = () => {
            const newData = [...data, new Array(data[0].length).fill("")];
            updateBlock(b.id, JSON.stringify(newData));
        };

        const removeRow = () => {
            if (data.length <= 1) return;
            const newData = data.slice(0, -1);
            updateBlock(b.id, JSON.stringify(newData));
        };

        const addCol = () => {
            const newData = data.map(row => [...row, ""]);
            updateBlock(b.id, JSON.stringify(newData));
        };

        const removeCol = () => {
            if (data[0].length <= 1) return;
            const newData = data.map(row => row.slice(0, -1));
            updateBlock(b.id, JSON.stringify(newData));
        };

        return (
            <div className="relative group/table w-fit">
                <table className="border-collapse border border-gray-300 min-w-[200px]">
                    <tbody>
                        {data.map((row, ri) => (
                            <tr key={ri}>
                                {row.map((cell, ci) => (
                                    <td key={ci} className="border border-gray-300 min-w-[80px] p-0">
                                        <TableCell value={cell} onChange={(val) => updateCell(ri, ci, val)} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Right Controls (Columns) */}
                <div className="absolute right-0 top-0 bottom-0 translate-x-1/2 flex flex-col justify-center gap-2 opacity-0 group-hover/table:opacity-100 transition-opacity">
                    <button
                        onClick={addCol}
                        className="p-1 bg-black/5 rounded cursor-pointer"
                        title="Add Column"
                    >
                        <img src="/images/docs/plus.svg" className="w-5 h-5" alt="add col" />
                    </button>
                    <button
                        onClick={removeCol}
                        className="p-1 bg-black/5 rounded cursor-pointer disabled:opacity-30"
                        title="Remove Column"
                        disabled={data[0].length <= 1}
                    >
                        <img src="/images/docs/minus.svg" className="w-5 h-5" alt="remove col" />
                    </button>
                </div>

                {/* Bottom Controls (Rows) */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 flex justify-center gap-2 opacity-0 group-hover/table:opacity-100 transition-opacity">
                    <button
                        onClick={addRow}
                        className="p-1 bg-black/5 rounded cursor-pointer"
                        title="Add Row"
                    >
                        <img src="/images/docs/plus.svg" className="w-5 h-5" alt="add row" />
                    </button>
                    <button
                        onClick={removeRow}
                        className="p-1 bg-black/5 rounded cursor-pointer disabled:opacity-30"
                        title="Remove Row"
                        disabled={data.length <= 1}
                    >
                        <img src="/images/docs/minus.svg" className="w-5 h-5" alt="remove row" />
                    </button>
                </div>
            </div>
        );
    }

    const commonProps = {
        ref,
        contentEditable: true,
        suppressContentEditableWarning: true,
        onInput: (e) => updateBlock(b.id, e.currentTarget.innerText),
        onKeyDown: (e) => handleKeyDown(e, i, b),
        onFocus: (e) => {
            if (!b._new) {
                placeCaretAtEnd(e.currentTarget);
            }
        },
        className: "outline-none w-full select-text",
        placeholder: "Start typing..."
    };

    switch (b.type) {
        case "h1":
            return <h1 {...commonProps} className="text-3xl font-bold outline-none w-full select-text" />
        case "ol":
            return (
                <div className="text-base outline-none w-full select-text flex items-start">
                    <span className="font-bold mr-1 min-w-5">{olNumber}.</span>
                    <div {...commonProps} className="text-base outline-none w-full select-text" />
                </div>
            )
        case "code":
            return <pre className="bg-gray-100 p-2 rounded select-text">
                <code {...commonProps} className="font-mono text-sm outline-none w-full block select-text whitespace-pre-wrap" />
            </pre>
        case "p":
        default:
            return <p {...commonProps} className="text-base outline-none w-full select-text" />
    }
});

export default function Docs() {
    const { docNameAsId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [blocks, setBlocks] = useState([]);
    const [docList, setDocList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeDropDownId, setActiveDropDownId] = useState(null);
    const [open, setOpen] = useState(false);
    const [docExists, setDocExists] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, setUser);
        return () => unsub();
    }, []);

    useEffect(() => {
        fetchDocList();
        initializeCurrentDoc();
    }, [docNameAsId]);

    const fetchDocList = async () => {
        const namesSnap = await getDocs(query(collection(db, DOCS_NAMES_COLLECTION), orderBy("createdAt", "asc")));
        setDocList(namesSnap.docs.map((d) => d.id));
    };

    const initializeCurrentDoc = async () => {
        setLoading(true);
        const normalizedName = normalizeDocName(docNameAsId);
        const nameDoc = await getDoc(doc(db, DOCS_NAMES_COLLECTION, normalizedName));
        if (!nameDoc.exists()) {
            setDocExists(false);
            setLoading(false);
            return;
        }

        const blocksCollection = getBlocksCollection(normalizedName);
        const blockSnap = await getDocs(query(blocksCollection, orderBy("order", "asc")));
        if (blockSnap.empty) {
            setDocExists(true);
            setBlocks([
                {
                    id: "temp-" + Date.now(),
                    type: "h1",
                    text: "",
                    order: 1,
                    parentId: null,
                    children: [],
                    _new: true
                }
            ]);
            setLoading(false);
            return;
        }
        setDocExists(true);
        await fetchBlocks(normalizedName);
    };

    const fetchBlocks = async (docName) => {
        setLoading(true);
        const blocksCollection = getBlocksCollection(docName);
        const snap = await getDocs(query(blocksCollection, orderBy("order", "asc")));

        if (snap.empty) {
            setBlocks([
                {
                    id: "temp-" + Date.now(),
                    type: "h1",
                    text: "",
                    order: 1,
                    parentId: null,
                    children: [],
                    _new: true
                }
            ]);
            setLoading(false);
            return;
        }

        const blocksArray = snap.docs
            .map((d) => ({
                id: d.id,
                type: "p",
                text: "",
                order: 1,
                parentId: null,
                children: [],
                ...d.data()
            }))
            .sort((a, b) => a.order - b.order);

        setBlocks(blocksArray);
        setLoading(false);
    };

    const updateBlock = useCallback((id, text) => {
        setBlocks(prev => prev.map(b => b.id === id ? { ...b, text, _updated: true } : b));
    }, []);

    const deleteBlock = useCallback(async (id) => {
        setBlocks(prev => {
            const newBlocks = prev
                .filter((b) => b.id !== id)
                .map((b) => ({
                    ...b,
                    parentId: b.parentId === id ? null : b.parentId,
                    children: (b.children || []).filter((childId) => childId !== id)
                }));
            return newBlocks.length === 0
                ? [{ id: "temp-" + Date.now(), type: "h1", text: "", order: 1, parentId: null, children: [], _new: true }]
                : newBlocks;
        });

        // Surgical delete from Firestore (single block document)
        if (!id.startsWith("temp-")) {
            try {
                await deleteDoc(doc(db, getDocCollectionName(docNameAsId), id));
            } catch (error) {
                if (error.code === "permission-denied") {
                    alert("You are not allowed to delete blocks.");
                }
            }
        }
    }, [docNameAsId]);

    const addBlock = useCallback((index, type = "p") => {
        setBlocks(prev => {
            const copy = [...prev];
            const currentBlock = copy[index];
            const currentId = currentBlock?.id;

            const childMap = new Map();
            copy.forEach((b) => {
                if (!b.parentId) return;
                if (!childMap.has(b.parentId)) childMap.set(b.parentId, []);
                childMap.get(b.parentId).push(b.id);
            });

            const subtreeIds = new Set();
            const collect = (id) => {
                if (!id || subtreeIds.has(id)) return;
                subtreeIds.add(id);
                const kids = childMap.get(id) || [];
                kids.forEach(collect);
            };
            collect(currentId);

            let insertAt = index;
            if (subtreeIds.size > 0) {
                copy.forEach((b, i) => {
                    if (subtreeIds.has(b.id) && i > insertAt) insertAt = i;
                });
            }

            const newBlock = {
                id: "id-" + Date.now(),
                type: type,
                text: type === "table" ? JSON.stringify([["", ""], ["", ""]]) : "",
                order: 1,
                parentId: currentBlock?.parentId || null,
                children: [],
                _new: true
            };
            copy.splice(insertAt + 1, 0, newBlock);
            return copy.map((b, idx) => {
                const nextOrder = idx + 1;
                if (b.order !== nextOrder) {
                    return { ...b, order: nextOrder, _updated: b._new ? b._new : true };
                }
                return b;
            });
        });
        setActiveDropDownId(null)
    }, []);

    const handleAddNewDoc = async () => {
        const docName = prompt("Enter new doc name:");
        if (!docName) return;
        const normalizedName = normalizeDocName(docName);

        try {
            const nameRef = doc(db, DOCS_NAMES_COLLECTION, normalizedName);
            const existingName = await getDoc(nameRef);
            if (existingName.exists()) {
                alert("Document already exists!");
                return;
            }

            const initialBlockId = "id-" + Date.now();
            const initialBlocks = {
                [initialBlockId]: {
                    type: "h1",
                    text: docName,
                    order: 1,
                    parentId: null,
                    children: []
                }
            };

            await setDoc(doc(db, getDocCollectionName(normalizedName), initialBlockId), initialBlocks[initialBlockId]);
            await setDoc(nameRef, { createdAt: Date.now() });
            await fetchDocList();
            navigate(`/docs/${normalizedName}`);
        } catch (error) {
            if (error.code === "permission-denied") {
                alert("You are not allowed to create documents.");
            } else {
                console.error("Error adding document:", error);
                alert("An error occurred while creating the document.");
            }
        }
    }

    const handleDeleteDoc = async () => {
        if (!confirm(`Are you sure you want to delete ${docNameAsId}?`)) return;
        try {
            const normalizedName = normalizeDocName(docNameAsId);
            const blocksCollection = collection(db, getDocCollectionName(normalizedName));
            const snap = await getDocs(blocksCollection);
            const batch = writeBatch(db);
            snap.forEach((d) => batch.delete(d.ref));
            batch.delete(doc(db, DOCS_NAMES_COLLECTION, normalizedName));
            await batch.commit();
            await fetchDocList();
            navigate(`/docs/${docList[0]}`);
        } catch (error) {
            if (error.code === "permission-denied") {
                alert("You are not allowed to delete this document.");
            } else {
                console.error("Error deleting document:", error);
                alert("An error occurred while deleting the document.");
            }
        }
    }

    const handleKeyDown = useCallback((e, i, b) => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (i === 0) return;
            setBlocks((prev) => {
                const copy = [...prev];
                const current = copy[i];
                const previous = copy[i - 1];
                if (!current || !previous) return prev;

                if (current.parentId === previous.id) return prev;

                if (current.parentId) {
                    const oldParentIndex = copy.findIndex((x) => x.id === current.parentId);
                    if (oldParentIndex !== -1) {
                        copy[oldParentIndex] = {
                            ...copy[oldParentIndex],
                            children: (copy[oldParentIndex].children || []).filter((cid) => cid !== current.id),
                            _updated: true
                        };
                    }
                }

                copy[i] = { ...current, parentId: previous.id, _updated: true };
                if (!(previous.children || []).includes(current.id)) {
                    copy[i - 1] = { ...previous, children: [...(previous.children || []), current.id], _updated: true };
                }

                return copy;
            });
            return;
        }

        if (e.key === "Enter" && b.type !== "code") {
            e.preventDefault();
            addBlock(i, b.type === "ol" ? "ol" : "p");
        }
        if (e.key === "Backspace" && !b.text) {
            e.preventDefault();
            deleteBlock(b.id);
        }
    }, [addBlock, deleteBlock]);

    const handleSave = async () => {
        try {
            const normalizedName = normalizeDocName(docNameAsId);
            const batch = writeBatch(db);
            const normalizedBlocks = blocks.map((b, idx) => ({
                ...b,
                id: b.id.startsWith("temp-") ? "id-" + Date.now() + "-" + idx : b.id,
                order: idx + 1
            }));
            normalizedBlocks.forEach((block) => {
                const { _new, _updated, ...payload } = block;
                const blockRef = doc(db, getDocCollectionName(normalizedName), block.id);
                if (_new) {
                    batch.set(blockRef, payload);
                } else if (_updated) {
                    batch.set(blockRef, payload, { merge: true });
                }
            });

            await batch.commit();
            alert("Saved changes!");
            fetchBlocks(normalizedName);
        } catch (error) {
            if (error.code === "permission-denied") {
                alert("You are not allowed to make changes to this document.");
            } else {
                console.error("Error saving document:", error);
                alert("An error occurred while saving.");
            }
        }
    };

    const handleOutSideClick = (e) => {
        if (activeDropDownId) {
            setActiveDropDownId(null);
        }
        if (open) {
            setOpen(false);
        }
    }

    const getOlNumber = (block) => {
        if (block.type !== "ol") return null;
        const siblings = blocks.filter((b) => b.parentId === block.parentId).sort((a, b) => a.order - b.order);
        const idx = siblings.findIndex((b) => b.id === block.id);
        if (idx === -1) return 1;
        let count = 0;
        for (let j = idx; j >= 0; j--) {
            if (siblings[j].type !== "ol") break;
            count += 1;
        }
        return count;
    };

    return (
        <main className="w-full h-full select-text" onClick={(e) => handleOutSideClick(e)}>
            <header className="flex gap-2 absolute z-10 right-2 top-2 bg-secondary backdrop-blur p-1 rounded-2xl">
                <div className="relative" onMouseLeave={() => setOpen(false)}>
                    <button className="bg-secondary text-white px-4 py-2 rounded-xl border flex items-center justify-between min-w-[140px] cursor-pointer" onMouseEnter={() => setOpen(true)}>
                        <p className="mr-auto">{docNameAsId.toUpperCase()}</p> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block transition-transform duration-200 transform-gpu origin-center" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg">
                            {open ? <path d="M10 15l5-5 5 5z"></path> : <path d="M10 10l5 5 5-5z"></path>}
                        </svg>
                    </button>
                    {open && <div className="absolute top-full bg-white rounded-xl shadow min-w-[140px] overflow-hidden">
                        <Link key="portfolio" to="/" onClick={() => setOpen(false)} className="block px-4 py-2 cursor-pointer hover:bg-primary text-gray hover:text-secondary">HOME</Link>
                        {docList.map((name) => <Link key={name} to={`/docs/${name}`} onClick={() => setOpen(false)} className={`block px-4 py-2 cursor-pointer hover:bg-primary ${docNameAsId === name ? "text-secondary bg-primary/90" : 'text-gray'}`}>{name.toUpperCase()}</Link>)}
                    </div>}
                </div>
                {user ? <>
                    <button onClick={handleAddNewDoc} className="p-2 rounded-xl cursor-pointer hover:bg-white/25">
                        <img className="w-6 h-w-6" src="/images/docs/plus-white.svg" alt="add doc" />
                    </button>
                    <button onClick={handleDeleteDoc} className="p-2 rounded-xl cursor-pointer hover:bg-white/25">
                        <img className="w-6 h-w-6" src="/images/docs/delete-white.svg" alt="delete doc" />
                    </button>
                    <button onClick={handleSave} className="p-2 rounded-xl cursor-pointer hover:bg-white/25">
                        <img className="w-6 h-w-6" src="/images/docs/save.svg" alt="save" />
                    </button>
                    <button onClick={() => signOut(auth)} className="p-2 rounded-xl cursor-pointer hover:bg-white/25">
                        <img className="w-6 h-w-6" src="/images/docs/logout.svg" alt="logout" />
                    </button>
                </>
                    : null
                }
            </header>

            {loading ? (
                <div className="w-full h-screen flex-1 flex justify-center items-center">
                    <img src="/images/docs/loader.svg" alt="loading" className="w-20 h-20 animate-spin" />
                </div>
            ) : !docExists ? (
                <div className="w-full h-screen flex-1 flex justify-center items-center">
                    <p className="text-gray text-2xl font-semibold">404 Not Found</p>
                </div>
            ) : (
                <div className="space-y-2 p-4 docs-container">
                    {blocks.map((b, i) => (
                        <div
                            key={b.id}
                            className="group flex gap-3 items-start rounded"
                            style={{
                                marginLeft: `${Math.min(
                                    (() => {
                                        let depth = 0;
                                        let parentId = b.parentId;
                                        const byId = new Map(blocks.map((x) => [x.id, x]));
                                        const visited = new Set();
                                        while (parentId && byId.has(parentId) && !visited.has(parentId)) {
                                            visited.add(parentId);
                                            depth += 1;
                                            parentId = byId.get(parentId)?.parentId || null;
                                        }
                                        return depth;
                                    })(),
                                    8
                                ) * INDENT_PX}px`
                            }}
                        >
                            <div className="relative opacity-0 group-hover:opacity-100 flex gap-1 group">
                                <button className="cursor-pointer" onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDropDownId(prev => prev === b.id ? null : b.id);
                                }}>
                                    <img className="w-6 h-w-6" src="/images/docs/plus.svg" alt="add" />
                                </button>
                                <button className="cursor-pointer" onClick={() => deleteBlock(b.id)}>
                                    <img className="w-5 h-w-5" src="/images/docs/delete.svg" alt="delete" />
                                </button>
                                <div className={`${activeDropDownId === b.id ? "flex flex-col gap-2 bg-lightGray p-1 rounded-md absolute top-full left-0 z-20" : "hidden"} text-xs`}>
                                    <button className="p-2 hover:bg-gray cursor-pointer rounded-md" onClick={() => addBlock(i, "h1")}>H1</button>
                                    <button className="p-2 px-3 hover:bg-gray cursor-pointer rounded-md" onClick={() => addBlock(i, "ol")}>1.</button>
                                    <button className="p-2 px-3 hover:bg-gray cursor-pointer rounded-md" onClick={() => addBlock(i, "p")}>P</button>
                                    <button className="p-2 hover:bg-gray cursor-pointer rounded-md" onClick={() => addBlock(i, "table")}>Table</button>
                                    <button className="p-2 hover:bg-gray cursor-pointer rounded-md" onClick={() => addBlock(i, "code")}>{"</>"}</button>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <Block b={b} i={i} updateBlock={updateBlock} handleKeyDown={handleKeyDown} olNumber={getOlNumber(b)} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
