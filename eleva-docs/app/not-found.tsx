export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "32px",
        textAlign: "center",
        fontFamily: "DM Sans, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "#D1D1D6",
          marginBottom: "8px",
          letterSpacing: "-2px",
        }}
      >
        404
      </div>
      <h1 style={{ fontSize: "24px", fontWeight: 600, color: "#1C1C1E", marginBottom: "8px" }}>
        Page not found
      </h1>
      <p style={{ fontSize: "15px", color: "#8E8E93", marginBottom: "32px", maxWidth: "400px" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/docs/docs/oauth/overview"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 24px",
          background: "#0099FF",
          color: "#fff",
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        &larr; Back to Docs
      </a>
    </div>
  );
}
