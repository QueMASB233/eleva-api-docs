"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslation } from "@/lib/i18n";
import SearchModal from "./SearchModal";

export default function TopBar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = (key: string) => getTranslation(locale, key);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--topbar-height)",
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: "16px",
        }}
      >
        {/* Mobile hamburger */}
        <button
          onClick={onMenuToggle}
          aria-label={t("ui.openMenu")}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--text-primary)",
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {/* Logo */}
        <a href="/docs/docs/oauth/overview" style={{ display: "flex", alignItems: "center", gap: "4px", textDecoration: "none", flexShrink: 0 }}>
          <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--color-accent)" }}>
            Eleva CRM
          </span>
          <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "18px", color: "var(--text-muted)" }}>
            API
          </span>
        </a>

        {/* Search bar */}
        <button
          onClick={() => setSearchOpen(true)}
          style={{
            flex: 1,
            maxWidth: "480px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 14px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            cursor: "pointer",
            color: "var(--text-muted)",
            fontSize: "14px",
            transition: "border-color 150ms ease",
          }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="7" cy="7" r="5" />
            <path d="M15 15l-3.5-3.5" />
          </svg>
          <span style={{ flex: 1, textAlign: "left" }}>{t("ui.searchPlaceholder")}</span>
          <kbd
            style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              borderRadius: "5px",
              padding: "1px 6px",
              fontSize: "11px",
              color: "var(--text-muted)",
              fontFamily: "inherit",
            }}
          >
            &#8984;K
          </kbd>
        </button>

        {/* Right section */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--text-muted)",
              background: "var(--bg-secondary)",
              padding: "3px 10px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
            className="hide-mobile"
          >
            v2025
          </span>
          <a
            href="https://app.elevabuilds.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "7px 18px",
              background: "var(--color-accent)",
              color: "#fff",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 150ms ease",
              whiteSpace: "nowrap",
            }}
          >
            {t("ui.getApiKey")}
            <span style={{ fontSize: "14px" }}>&rarr;</span>
          </a>
          <div style={{ display: "flex", gap: "4px" }}>
            <button
              type="button"
              onClick={() => setLocale("en")}
              style={{
                padding: "4px 10px",
                fontSize: "12px",
                fontWeight: locale === "en" ? 600 : 400,
                background: locale === "en" ? "var(--color-accent)" : "transparent",
                color: locale === "en" ? "#fff" : "var(--text-muted)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("es")}
              style={{
                padding: "4px 10px",
                fontSize: "12px",
                fontWeight: locale === "es" ? 600 : 400,
                background: locale === "es" ? "var(--color-accent)" : "transparent",
                color: locale === "es" ? "#fff" : "var(--text-muted)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

      <style jsx>{`
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
