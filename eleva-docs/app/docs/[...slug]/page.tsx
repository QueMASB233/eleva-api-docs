"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AppShell from "@/components/AppShell";
import DocRenderer from "@/components/DocRenderer";
import ApiExplorer from "@/components/ApiExplorer";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslation } from "@/lib/i18n";
import { TocData } from "@/lib/toc";

export default function DocPage() {
  const params = useParams();
  const slugParts = (params.slug as string[]) || [];
  const slug = slugParts.join("/");
  const { locale } = useLocale();
  const tocUrl = locale === "es" ? "/content/toc.es.json" : "/content/toc.json";
  const t = (key: string) => getTranslation(locale, key);

  const [contentType, setContentType] = useState<"md" | "json" | "loading" | "error">("loading");
  const [content, setContent] = useState("");
  const [specUrl, setSpecUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setContentType("loading");

    fetch(tocUrl)
      .then((r) => r.json())
      .then((toc: TocData) => {
        let matchedUri: string | null = null;
        let matchedTitle = "";

        for (const item of toc.items) {
          if (item.type === "item") {
            const itemSlug = item.uri
              .replace(/\.(md|json)$/, "")
              .replace(/\s+/g, "-")
              .toLowerCase();

            if (itemSlug === slug) {
              matchedUri = item.uri;
              matchedTitle = item.title;
              break;
            }
          }
        }

        if (!matchedUri) {
          setContentType("error");
          return;
        }

        setTitle(matchedTitle);

        if (matchedUri.endsWith(".json")) {
          const filename = matchedUri.split("/").pop()!;
          const esPath = `/content/es/apps/${filename}`;
          const enPath = `/content/apps/${filename}`;
          if (locale === "es") {
            fetch(esPath)
              .then((r) => (r.ok ? esPath : enPath))
              .then((path) => {
                setSpecUrl(path);
                setContentType("json");
              });
          } else {
            setSpecUrl(enPath);
            setContentType("json");
          }
        } else {
          const tryFetch = (url: string) =>
            fetch(url).then((r) => (r.ok ? r.text() : Promise.reject(new Error("Not found"))));

          if (locale === "es") {
            tryFetch(`/content/es/${matchedUri}`)
              .then((md) => {
                setContent(md);
                setContentType("md");
              })
              .catch(() =>
                tryFetch(`/content/${matchedUri}`)
                  .then((md) => {
                    setContent(md);
                    setContentType("md");
                  })
                  .catch(() => setContentType("error"))
              );
          } else {
            tryFetch(`/content/${matchedUri}`)
              .then((md) => {
                setContent(md);
                setContentType("md");
              })
              .catch(() => setContentType("error"));
          }
        }
      })
      .catch(() => setContentType("error"));
  }, [slug, tocUrl, locale]);

  return (
    <AppShell>
      {contentType === "loading" && (
        <div className="doc-content">
          <div className="skeleton" style={{ height: "36px", width: "260px", marginBottom: "24px" }} />
          <div className="skeleton" style={{ height: "16px", width: "100%", marginBottom: "12px" }} />
          <div className="skeleton" style={{ height: "16px", width: "80%", marginBottom: "12px" }} />
          <div className="skeleton" style={{ height: "16px", width: "60%", marginBottom: "32px" }} />
        </div>
      )}

      {contentType === "md" && <DocRenderer content={content} />}

      {contentType === "json" && <ApiExplorer specUrl={specUrl} />}

      {contentType === "error" && (
        <div className="doc-content" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "16px" }}>{t("ui.pageNotFound")}</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
            {t("ui.pageNotFoundDescription")}
          </p>
          <a
            href="/docs/docs/oauth/overview"
            style={{
              display: "inline-flex",
              padding: "10px 24px",
              background: "var(--color-accent)",
              color: "#fff",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {t("ui.backToDocs")}
          </a>
        </div>
      )}
    </AppShell>
  );
}
