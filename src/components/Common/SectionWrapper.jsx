import FloatingBlobs from "./FloatingBlobs";

export default function SectionWrapper({
  id,
  children,
  variant = "dark",
  className = "",
}) {
  const variants = {
    light: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white",
    dark: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white",
    white: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white",
  };

  const auroraClass = "aurora-bg-dark";

  const blobVariant = "dark";

  return (
    <section
      id={id}
      className={`relative overflow-hidden section-padding ${variants[variant]} ${className}`}
    >
      {auroraClass && (
        <div className={`pointer-events-none absolute inset-0 ${auroraClass}`} />
      )}
      <FloatingBlobs variant={blobVariant} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
