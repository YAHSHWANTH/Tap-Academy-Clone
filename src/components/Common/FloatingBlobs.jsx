import { motion } from "framer-motion";

const blobConfigs = {
  dark: [
    { className: "blob-1 -left-32 top-10 h-[420px] w-[420px] bg-pink-500/20", delay: 0 },
    { className: "blob-2 -right-24 bottom-10 h-[380px] w-[380px] bg-purple-500/20", delay: 2 },
    { className: "blob-3 left-1/3 top-1/2 h-[300px] w-[300px] bg-fuchsia-500/10", delay: 4 },
  ],
  light: [
    { className: "blob-1 -left-40 top-0 h-96 w-96 bg-pink-300/25", delay: 0 },
    { className: "blob-2 -right-40 bottom-0 h-96 w-96 bg-purple-300/25", delay: 3 },
    { className: "blob-3 left-1/2 top-1/4 h-72 w-72 bg-fuchsia-200/20", delay: 1.5 },
  ],
  white: [
    { className: "blob-1 -left-20 top-20 h-80 w-80 bg-pink-200/30", delay: 0 },
    { className: "blob-2 -right-20 bottom-20 h-80 w-80 bg-purple-200/30", delay: 2 },
  ],
};

export default function FloatingBlobs({ variant = "dark" }) {
  const blobs = blobConfigs[variant] || blobConfigs.dark;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: blob.delay * 0.2 }}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
        />
      ))}
    </div>
  );
}
