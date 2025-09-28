"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
