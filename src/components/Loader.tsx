"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
      />
    </div>
  );
}
