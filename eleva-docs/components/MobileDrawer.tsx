"use client";

import { useEffect } from "react";
import { TocSection } from "@/lib/toc";
import Sidebar from "./Sidebar";

export default function MobileDrawer({
  open,
  onClose,
  sections,
}: {
  open: boolean;
  onClose: () => void;
  sections: TocSection[];
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handler);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.3)",
          animation: "fadeIn 250ms ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "min(300px, 85vw)",
          background: "var(--bg-secondary)",
          animation: "slideIn 250ms ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "16px", color: "var(--color-accent)" }}>
            Eleva CRM <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>API</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--text-muted)",
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>

        {/* Sidebar content - reuse Sidebar but override styles */}
        <div
          style={{ flex: 1, overflowY: "auto" }}
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") {
              onClose();
            }
          }}
        >
          <div style={{ padding: "8px 0" }}>
            {sections.map((section) => (
              <div key={section.title} style={{ marginBottom: "8px" }}>
                <div
                  style={{
                    padding: "8px 20px 4px",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "var(--text-muted)",
                  }}
                >
                  {section.title}
                </div>
                {section.items.map((item) => {
                  const href = "/docs/" + item.uri
                    .replace(/\.(md|json)$/, "")
                    .replace(/\s+/g, "-")
                    .toLowerCase();
                  return (
                    <a
                      key={item.uri}
                      href={href}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        minHeight: "44px",
                        lineHeight: "24px",
                      }}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sticky CTA at bottom */}
        <div
          style={{
            padding: "16px 20px",
            paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
            borderTop: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          <a
            href="https://app.elevabuilds.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              width: "100%",
              padding: "12px",
              background: "var(--color-accent)",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              minHeight: "44px",
            }}
          >
            Get API Key &rarr;
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
