import React, { useState } from 'react';
import ai from "../docs/ai.json"
import git from "../docs/git.json"
import java from "../docs/java.json"
import react from "../docs/react.json"
import rn from "../docs/rn.json"
const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-lg bg-black p-4 text-sm text-white">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 z-10 rounded p-1 transition-colors hover:bg-gray/20"
        title="Copy code"
      >
        {copied ? (
          <span className="text-xs text-green-400">Copied!</span>
        ) : (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        )}
      </button>
      <pre className="overflow-x-auto font-mono whitespace-pre-wrap">{code}</pre>
    </div>
  );
};

const DocumentRender = ({ documentName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dataMap = {
    'ai': ai,
    'git': git,
    'java': java,
    'react': react,
    'rn': rn
  }
  const data = dataMap[documentName];

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary">404</h1>
          <p className="mt-2 text-gray">Document not found</p>
          <a href="/" className="mt-4 inline-block text-secondary underline">
            Go back Home
          </a>
        </div>
      </div>
    );
  }

  const renderItem = (item, index) => {
    switch (item.type) {
      case 'h1':
        return (
          <h1 key={index} className="mb-8 mt-12 text-3xl font-bold text-secondary first:mt-0 max-[426px]:text-2xl">
            {item.content}
          </h1>
        );
      case 'h2':
        return (
          <h2 key={index} className="mb-4 mt-8 text-2xl font-bold text-brown max-[426px]:text-xl">
            {item.content}
          </h2>
        );
      case 'h3':
        return (
          <h3 key={index} className="mb-3 mt-6 text-xl font-semibold text-brown max-[426px]:text-lg">
            {item.content}
          </h3>
        );
      case 'h4':
        return (
          <h4 key={index} className="mb-2 mt-4 text-lg text-gray">
            {item.content}
          </h4>
        );
      case 'p':
        return (
          <p key={index} className="mb-4 text-gray leading-relaxed">
            {item.content}
          </p>
        );
      case 'bold':
        return (
          <p key={index} className="mb-1 font-bold text-black">{item.content}</p>
        );
      case 'code':
        return <CodeBlock key={index} code={item.content} />;
      case 'table':
        return (
          <div key={index} className="my-6 overflow-x-auto rounded-lg border border-lightGray shadow-sm">
            <table className="w-full text-left text-sm text-gray">
              <thead className="bg-primary text-secondary">
                <tr>
                  {item.content.headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 font-bold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-lightGray">
                {item.content.rows.map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-primary/50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full bg-primary pb-20 pt-10 px-4">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-hero max-[800px]:p-6 max-[426px]:p-4">
        <header className="mb-10 flex items-center justify-between border-b border-lightGray pb-6 max-[426px]:flex-col max-[426px]:items-start max-[426px]:gap-4">
          <h1 className="text-2xl font-bold text-secondary">
            {documentName.toUpperCase()} <span className="text-gray font-normal">DOCUMENTATION</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded-full bg-secondary px-6 py-2 text-sm font-bold text-white transition-all hover:bg-secondary/90 active:scale-95"
              >
                {documentName.toUpperCase()}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block transition-transform duration-200 transform-gpu origin-center" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg">
                  {isDropdownOpen?<path d="M10 15l5-5 5 5z"></path>:<path d="M10 10l5 5 5-5z"></path>}
                </svg>
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-40 flex flex-col overflow-hidden rounded-xl bg-white shadow-xl z-50 border border-lightGray">
                    {Object.keys(dataMap).map((doc) => (
                      <button
                        key={doc}
                        onClick={() => {
                          window.location.search = `?doc=${doc}`;
                          setIsDropdownOpen(false);
                        }}
                        className={`px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-primary ${doc === documentName ? 'text-secondary bg-primary/90' : 'text-gray'
                          }`}
                      >
                        {doc.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <a
              href="/"
              className="rounded-full border-2 border-secondary px-6 py-1.5 text-sm font-bold text-secondary transition-all hover:bg-secondary hover:text-white"
            >
              HOME
            </a>
          </div>
        </header>
        <div className="document-content">
          {data.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </div>
  );
};

export default DocumentRender;
