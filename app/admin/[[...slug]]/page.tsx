"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the static TinaCMS admin page
    window.location.replace("/admin/index.html");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto mb-4"></div>
        <p className="text-neutral-600">Indlæser TinaCMS...</p>
      </div>
    </div>
  );
}

