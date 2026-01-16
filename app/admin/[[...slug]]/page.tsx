"use client";

import dynamic from "next/dynamic";

const TinaAdmin = dynamic(() => import("tinacms").then((mod) => mod.TinaAdmin), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto mb-4"></div>
        <p className="text-neutral-600">Indlæser TinaCMS...</p>
      </div>
    </div>
  ),
});

export default function AdminPage() {
  return <TinaAdmin />;
}

