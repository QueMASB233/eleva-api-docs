"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Fuse from "fuse.js";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslation } from "@/lib/i18n";
import { SearchEntry, buildSearchIndex } from "@/lib/content";
import { TocData } from "@/lib/toc";

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const fuseRef = useRef<Fuse<SearchEntry> | null>(null);
  const { locale } = useLocale();
  const tocUrl = locale === "es" ? "/content/toc.es.json" : "/content/toc.json";
  const t = (key: string) => getTranslation(locale, key);

  useEffect(() => {
    inputRef.current?.focus();

    fetch(tocUrl)
      .then((r) => r.json())
      .then((toc: TocData) => buildSearchIndex(toc))
      .then((items) => {
        setEntries(items);
        fuseRef.current = new Fuse(items, {
          keys: ["title", "preview", "section"],
          threshold: 0.3,
          includeScore: true,
        });
      });
  }, [tocUrl]);

  useEffect(() => {
    if (!query.trim() || !fuseRef.current) {
      setResults(entries.slice(0, 8));
      return;
    }
    const hits = fuseRef.current.search(query, { limit: 12 });
    setResults(hits.map((h) => h.item));
    setSelectedIndex(0);
  }, [query, entries]);

  const navigate = useCallback(
    (slug: string) => {
      window.location.href = `/docs/${slug}`;
      onClose();
    },
    [onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      navigate(results[selectedIndex].slug);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  // Group results by section
  const grouped: Record<string, SearchEntry[]> = {};
  for (const r of results) {
    if (!grouped[r.section]) grouped[r.section] = [];
    grouped[r.section].push(r);
  }

  let flatIndex = 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* On mobile position near the top so virtual keyboard doesn't obscure results */
        paddingTop: "max(env(safe-area-inset-top, 0px) + 8px, min(15vh, 80px))",
        padding: "max(env(safe-area-inset-top, 0px) + 8px, min(15vh, 80px)) 16px 16px",
        animation: "fadeIn 150ms ease",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          width: "min(640px, 100%)",
          /* On mobile, give more height since results are important */
          maxHeight: "min(520px, 75vh)",
          background: "var(--bg-primary)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow-md), 0 0 0 1px var(--border)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 16px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <svg width="18" height="18" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
            <circle cx="8" cy="8" r="6" />
            <path d="M17 17l-4-4" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder={t("ui.searchModalPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "16px",
              color: "var(--text-primary)",
              background: "transparent",
              fontFamily: "inherit",
            }}
          />
          <kbd
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "5px",
              padding: "2px 8px",
              fontSize: "11px",
              color: "var(--text-muted)",
              fontFamily: "inherit",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div style={{ overflowY: "auto", padding: "8px" }}>
          {Object.entries(grouped).map(([section, items]) => (
            <div key={section}>
              <div
                style={{
                  padding: "8px 12px 4px",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "var(--text-muted)",
                }}
              >
                {section}
              </div>
              {items.map((item) => {
                const idx = flatIndex++;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.slug}
                    onClick={() => navigate(item.slug)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      padding: "11px 12px",
                      border: "none",
                      borderRadius: "8px",
                      background: isSelected ? "var(--bg-secondary)" : "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 100ms ease",
                      /* Adequate touch target */
                      minHeight: "48px",
                      WebkitTapHighlightColor: "transparent",
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
                      {item.preview}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}

          {results.length === 0 && query.trim() && (
            <div
              style={{
                padding: "32px",
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "14px",
              }}
            >
              {t("ui.noResults")} &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
