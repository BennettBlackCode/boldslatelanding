"use client";

import { Play } from "lucide-react";

interface DemoVideoProps {
  title: string;
}

export function DemoVideo({ title }: DemoVideoProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FAF8F7] to-[#e8e6e5]">
      {/* Placeholder content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Play button */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#010100] text-white shadow-lg transition-transform hover:scale-105">
          <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
        </div>
        
        {/* Title */}
        <p className="text-sm font-medium text-[#545555]">{title}</p>
        <p className="mt-1 text-xs text-[#545555]/60">Demo Video Coming Soon</p>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, #010100 1px, transparent 1px),
            linear-gradient(to bottom, #010100 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  );
}

