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
      <header className="topbar">
        {/* Mobile hamburger */}
        <button
          onClick={onMenuToggle}
          aria-label={t("ui.openMenu")}
          className="topbar-hamburger"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h16M3 12h16M3 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <a href="/docs/docs/oauth/overview" className="topbar-logo">
          <span className="topbar-logo-brand">Eleva CRM</span>
          <span className="topbar-logo-api">API</span>
        </a>

        {/* Full search bar — desktop only */}
        <button
          onClick={() => setSearchOpen(true)}
          className="topbar-search-bar"
          aria-label={t("ui.searchPlaceholder")}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="7" cy="7" r="5" />
            <path d="M15 15l-3.5-3.5" />
          </svg>
          <span className="topbar-search-text">{t("ui.searchPlaceholder")}</span>
          <kbd className="topbar-kbd">&#8984;K</kbd>
        </button>

        {/* Spacer — visible on mobile to push right content to edge */}
        <div className="topbar-spacer" />

        {/* Right section */}
        <div className="topbar-right">
          {/* Search icon — mobile only */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label={t("ui.searchPlaceholder")}
            className="topbar-search-icon"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="9" cy="9" r="6" />
              <path d="M18 18l-4.35-4.35" />
            </svg>
          </button>

          {/* Version badge — desktop only */}
          <span className="topbar-version">v2025</span>

          {/* Get API Key — desktop only */}
          <a
            href="https://app.elevabuilds.com"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-cta"
          >
            {t("ui.getApiKey")}
            <span aria-hidden="true">&rarr;</span>
          </a>

          {/* Language switcher */}
          <div className="topbar-lang">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`topbar-lang-btn${locale === "en" ? " active" : ""}`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`topbar-lang-btn${locale === "es" ? " active" : ""}`}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

      <style jsx>{`
        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--topbar-height);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          z-index: 100;
          display: flex;
          align-items: center;
          padding: 0 20px;
          gap: 12px;
        }

        .topbar-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          margin: -8px -4px -8px -8px;
          color: var(--text-primary);
          border-radius: 8px;
          flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
          align-items: center;
          justify-content: center;
        }
        .topbar-hamburger:active {
          background: var(--bg-secondary);
        }

        .topbar-logo {
          display: flex;
          align-items: center;
          gap: 3px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .topbar-logo-brand {
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: var(--color-accent);
        }
        .topbar-logo-api {
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 18px;
          color: var(--text-muted);
        }

        .topbar-search-bar {
          flex: 1;
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 14px;
          font-family: inherit;
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        .topbar-search-bar:hover {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(0, 153, 255, 0.08);
        }
        .topbar-search-text {
          flex: 1;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .topbar-kbd {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 1px 6px;
          font-size: 11px;
          color: var(--text-muted);
          font-family: inherit;
          flex-shrink: 0;
        }

        .topbar-spacer {
          display: none;
          flex: 1;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .topbar-search-icon {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--text-secondary);
          border-radius: 8px;
          -webkit-tap-highlight-color: transparent;
          align-items: center;
          justify-content: center;
        }
        .topbar-search-icon:active {
          background: var(--bg-secondary);
        }

        .topbar-version {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 3px 10px;
          border-radius: 8px;
          border: 1px solid var(--border);
          white-space: nowrap;
        }

        .topbar-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 7px 16px;
          background: var(--color-accent);
          color: #fff;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: background 150ms ease;
          white-space: nowrap;
        }
        .topbar-cta:hover {
          background: var(--color-accent-dark);
          color: #fff;
        }

        .topbar-lang {
          display: flex;
          gap: 4px;
        }
        .topbar-lang-btn {
          padding: 4px 9px;
          font-size: 12px;
          font-weight: 400;
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          transition: background 100ms ease, color 100ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .topbar-lang-btn.active {
          font-weight: 600;
          background: var(--color-accent);
          color: #fff;
          border-color: var(--color-accent);
        }

        /* ── Mobile ──────────────────────────────────── */
        @media (max-width: 767px) {
          .topbar {
            padding: 0 12px;
            gap: 8px;
          }

          .topbar-hamburger {
            display: flex;
          }

          .topbar-logo-brand,
          .topbar-logo-api {
            font-size: 16px;
          }

          /* Hide full search bar, show icon instead */
          .topbar-search-bar {
            display: none;
          }
          .topbar-spacer {
            display: block;
          }
          .topbar-search-icon {
            display: flex;
          }

          /* Hide version badge and CTA — CTA lives in the mobile drawer */
          .topbar-version {
            display: none;
          }
          .topbar-cta {
            display: none;
          }

          .topbar-right {
            gap: 4px;
          }

          .topbar-lang-btn {
            padding: 5px 8px;
            min-height: 36px;
          }
        }

        @media (max-width: 340px) {
          .topbar-logo-api {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
