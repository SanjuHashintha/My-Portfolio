"use client";

import { useState } from "react";
import Loader from "../components/Loader";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <main className="min-h-screen flex items-center justify-center bg-white text-gray-900">
          <h1 className="text-5xl md:text-7xl font-bold">
            Welcome to Home Page
          </h1>
        </main>
      )}
    </>
  );
}
