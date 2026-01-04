"use client";

import { useState } from "react";
import Loader from "../components/Loader";
import Hero from "../components/Hero";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onComplete={() => setLoaded(true)} />;
  }

  return (
    <>
      <Hero />
    </>
  );
}
