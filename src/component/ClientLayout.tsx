"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // ✅ start true so first load shows loader

  useEffect(() => {
    if (!pathname) return;

    // For initial load OR route change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-lg animate-pulse">Loading...</p>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
