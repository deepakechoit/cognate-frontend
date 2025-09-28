"use client";

import { useRef, useEffect } from "react";

interface Nudge {
  id: number;
  title: string;
  description: string;
}

interface WeeklyNudgesProps {
  nudges: Nudge[];
}

const WeeklyNudges: React.FC<WeeklyNudgesProps> = ({ nudges }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // prevent vertical scroll and scroll horizontally instead
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
    >
      <div className="flex gap-4 py-4 px-2">
        {nudges.map((nudge) => (
          <div
            key={nudge.id}
            className="min-w-[16rem] max-w-[22rem] bg-white rounded-lg p-4 flex-shrink-0  transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{nudge.title}</h3>
            <p className="text-gray-500 text-sm">{nudge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyNudges;
