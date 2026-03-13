"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function SkeletonLoader() {
  return (
    <div style={{ width: "100%", padding: "48px 32px" }}>
      <div className="skeleton" style={{ height: "36px", width: "260px", marginBottom: "24px" }} />
      <div className="skeleton" style={{ height: "16px", width: "100%", marginBottom: "12px" }} />
      <div className="skeleton" style={{ height: "16px", width: "80%", marginBottom: "12px" }} />
      <div className="skeleton" style={{ height: "16px", width: "60%", marginBottom: "32px" }} />
      <div className="skeleton" style={{ height: "200px", width: "100%", marginBottom: "16px" }} />
      <div className="skeleton" style={{ height: "120px", width: "100%", marginBottom: "16px" }} />
    </div>
  );
}

export default function ApiExplorer({ specUrl }: { specUrl: string }) {
  const [spec, setSpec] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(specUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load spec: ${r.status}`);
        return r.text();
      })
      .then(setSpec)
      .catch((e) => setError(e.message));
  }, [specUrl]);

  if (error) {
    return (
      <div style={{ width: "100%", padding: "48px 32px" }}>
        <div
          style={{
            padding: "20px",
            background: "#FFF2F2",
            border: "1px solid #FFCCCC",
            borderRadius: "var(--radius)",
            color: "#CC3333",
            fontSize: "14px",
          }}
        >
          Failed to load API specification. {error}
        </div>
      </div>
    );
  }

  if (!spec) return <SkeletonLoader />;

  return <StoplightWrapper spec={spec} />;
}

function StoplightWrapper({ spec }: { spec: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!document.querySelector('link[href*="stoplight"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/@stoplight/elements/styles.min.css";
      document.head.appendChild(link);
    }
    setReady(true);
  }, []);

  if (!ready) return <SkeletonLoader />;

  return <StoplightAPI spec={spec} />;
}

function StoplightAPI({ spec }: { spec: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [API, setAPI] = useState<any>(null);

  useEffect(() => {
    import("@stoplight/elements").then((mod) => {
      setAPI(() => mod.API);
    });
  }, []);

  if (!API) return <SkeletonLoader />;

  const APIComponent = API;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="sl-elements" style={{ padding: "24px 32px", width: "100%" }}>
        <APIComponent
          apiDescriptionDocument={spec}
          router="hash"
          layout="stacked"
        />
      </div>
    </QueryClientProvider>
  );
}
