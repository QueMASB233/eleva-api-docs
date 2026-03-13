"use client";

import { usePathname } from "next/navigation";
import { TocSection } from "@/lib/toc";

function uriToSlug(uri: string): string {
  return "/docs/" + uri
    .replace(/\.(md|json)$/, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export default function Sidebar({ sections }: { sections: TocSection[] }) {
  const pathname = usePathname();

  return (
    <nav
      style={{
        width: "var(--sidebar-width)",
        height: "calc(100vh - var(--topbar-height))",
        position: "fixed",
        top: "var(--topbar-height)",
        left: 0,
        overflowY: "auto",
        background: "var(--bg-secondary)",
        borderRight: "1px solid var(--border)",
        padding: "16px 0",
        zIndex: 50,
      }}
    >
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
            const href = uriToSlug(item.uri);
            const isActive = pathname === href;
            return (
              <a
                key={item.uri}
                href={href}
                style={{
                  display: "block",
                  padding: "7px 20px 7px 17px",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--color-accent)" : "var(--text-secondary)",
                  textDecoration: "none",
                  borderLeft: isActive ? "3px solid var(--color-accent)" : "3px solid transparent",
                  background: isActive ? "var(--bg-primary)" : "transparent",
                  transition: "all 150ms ease",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--bg-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      ))}

      {/* Bottom padding for scrolling */}
      <div style={{ height: "80px" }} />
    </nav>
  );
}
