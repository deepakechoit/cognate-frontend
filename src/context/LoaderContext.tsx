"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LoaderContextType {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderContext = createContext<LoaderContextType>({
  loading: false,
  setLoading: () => {},
});

export function LoaderProvider({ children }: LoaderProviderProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // for fade animation

  useEffect(() => {
    setVisible(true); // fade in
    setLoading(true);

    const timeout = setTimeout(() => {
      // start fade out
      setVisible(false);

      // remove loader after fade duration
      const removeTimeout = setTimeout(() => setLoading(false), 500); // 500ms = transition duration
      return () => clearTimeout(removeTimeout);
    }, 200); // loader duration
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const setRootFontSize = () => {

      let baseWidth = 1920;
      let baseFontSize = 16;
      
      if (window.innerWidth < 640) {
        // mobile
        baseWidth = 640;
        baseFontSize = 16;
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        // Tablet
        baseWidth = 1920;
        baseFontSize = 16;
      } else {
        // Desktop
        baseWidth = 1920;
        baseFontSize =16;
      }

      
      const scale = window.innerWidth / baseWidth;
      const newFontSize = baseFontSize * scale;
      document.documentElement.style.fontSize = `${newFontSize}px`;
    };

    setRootFontSize();
    window.addEventListener("resize", setRootFontSize);
    return () => window.removeEventListener("resize", setRootFontSize);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-[50] flex items-center justify-center bg-black backdrop-blur-[4px] transition-opacity duration-[500ms] ${
          visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* <div className="flex flex-col items-center">
          <div className="w-[64px] h-[64px] border-[4px] border-t-transparent border-[#7557FF] rounded-full animate-spin"></div>
          <p className="mt-[16px] text-[18px] text-white animate-pulse">Loading...</p>
        </div> */}
      </div>
      {children}
    </LoaderContext.Provider>
  );
}
