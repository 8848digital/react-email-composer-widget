/** Lightweight skeleton placeholder — no PrimeReact dependency. */
const EmailTemplateSkeleton = () => {
  const skeletonStyle = (width: string, height = "14px"): React.CSSProperties => ({
    width,
    height,
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
    animation: "email-skeleton-pulse 1.5s ease-in-out infinite",
  });

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ ...skeletonStyle("60%"), marginBottom: "11px" }} />
          <div style={{ borderTop: "1px solid #e5e7eb", width: "100%", marginBottom: "16px" }} />
          <div style={{ ...skeletonStyle("100%"), marginBottom: "8px" }} />
          <div style={{ ...skeletonStyle("90%"), marginBottom: "8px" }} />
          <div style={skeletonStyle("70%")} />
        </div>
      ))}
    </div>
  );
};

export default EmailTemplateSkeleton;
