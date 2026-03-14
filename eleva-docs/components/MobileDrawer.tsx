"use client";

import { useEffect } from "react";
import { TocSection } from "@/lib/toc";
import { usePathname } from "next/navigation";

function uriToSlug(uri: string): string {
  return "/docs/" + uri
    .replace(/\.(md|json)$/, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export default function MobileDrawer({
  open,
  onClose,
  sections,
}: {
  open: boolean;
  onClose: () => void;
  sections: TocSection[];
}) {
  const pathname = usePathname();

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
          background: "rgba(0, 0, 0, 0.4)",
          animation: "drawerFadeIn 220ms ease",
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "min(300px, 85vw)",
          background: "var(--bg-secondary)",
          animation: "drawerSlideIn 250ms cubic-bezier(0.32, 0.72, 0, 1)",
          display: "flex",
          flexDirection: "column",
          /* Support notch / Dynamic Island */
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid var(--border)",
            flexShrink: 0,
          }}
        >
          <a
            href="/docs/docs/oauth/overview"
            onClick={onClose}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "3px" }}
          >
            <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "17px", color: "var(--color-accent)" }}>
              Eleva CRM
            </span>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "17px", color: "var(--text-muted)" }}>
              {" "}API
            </span>
          </a>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--text-muted)",
              borderRadius: "8px",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"] }}
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") {
              onClose();
            }
          }}
        >
          <div style={{ padding: "8px 0 24px" }}>
            {sections.map((section) => (
              <div key={section.title} style={{ marginBottom: "4px" }}>
                <div
                  style={{
                    padding: "10px 16px 4px",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1.2px",
                    color: "var(--text-muted)",
                  }}
                >
                  {section.title}
                </div>
                {section.items.map((item) => {
                  const href = uriToSlug(item.uri);
                  const isActive = pathname === href;
                  return (
                    <a
                      key={item.uri}
                      href={href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 16px 10px 13px",
                        fontSize: "15px",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--color-accent)" : "var(--text-secondary)",
                        textDecoration: "none",
                        borderLeft: isActive ? "3px solid var(--color-accent)" : "3px solid transparent",
                        background: isActive ? "rgba(0, 153, 255, 0.06)" : "transparent",
                        /* Large enough tap target */
                        minHeight: "44px",
                        WebkitTapHighlightColor: "transparent",
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

        {/* Sticky bottom CTA */}
        <div
          style={{
            padding: "16px",
            paddingBottom: "max(16px, env(safe-area-inset-bottom, 16px))",
            borderTop: "1px solid var(--border)",
            background: "var(--bg-secondary)",
            flexShrink: 0,
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
              padding: "13px",
              background: "var(--color-accent)",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              minHeight: "48px",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Get API Key &rarr;
          </a>
        </div>
      </div>

      <style>{`
        @keyframes drawerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawerSlideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
