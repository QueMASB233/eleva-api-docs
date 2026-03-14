"use client";

import { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button onClick={handleCopy} className="copy-btn">
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export default function DocRenderer({ content }: { content: string }) {
  return (
    <div className="doc-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => {
            const text = typeof children === "string" ? children : String(children);
            const id = slugify(text);
            return (
              <h2 id={id}>
                {children}
                <a href={`#${id}`} className="anchor-link" aria-hidden>
                  #
                </a>
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = typeof children === "string" ? children : String(children);
            const id = slugify(text);
            return (
              <h3 id={id}>
                {children}
                <a href={`#${id}`} className="anchor-link" aria-hidden>
                  #
                </a>
              </h3>
            );
          },
          pre: ({ children }) => {
            const codeEl = children as React.ReactElement<{ children?: string }>;
            const codeText = codeEl?.props?.children || "";
            return (
              <pre>
                {children}
                <CopyButton text={String(codeText)} />
              </pre>
            );
          },
          // Wrap tables for horizontal scrolling on mobile
          table: ({ children }) => (
            <div className="table-wrapper">
              <table>{children}</table>
            </div>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
