"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";
import { useLocale } from "@/contexts/LocaleContext";
import { parseToc, TocSection } from "@/lib/toc";
import { TocData } from "@/lib/toc";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sections, setSections] = useState<TocSection[]>([]);
  const { locale } = useLocale();
  const tocUrl = locale === "es" ? "/content/toc.es.json" : "/content/toc.json";

  useEffect(() => {
    fetch(tocUrl)
      .then((r) => r.json())
      .then((data: TocData) => {
        setSections(parseToc(data));
      });
  }, [tocUrl]);

  return (
    <>
      <TopBar onMenuToggle={() => setDrawerOpen(true)} />

      {/* Desktop sidebar */}
      <div className="desktop-sidebar">
        <Sidebar sections={sections} />
      </div>

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} sections={sections} />

      {/* Main content */}
      <main
        style={{
          marginTop: "var(--topbar-height)",
          transition: "margin-left 150ms ease",
        }}
        className="main-content"
      >
        {children}
      </main>

      <style>{`
        .desktop-sidebar {
          display: block;
        }
        .main-content {
          margin-left: var(--sidebar-width);
        }
        @media (max-width: 767px) {
          .desktop-sidebar {
            display: none;
          }
          .main-content {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
}
