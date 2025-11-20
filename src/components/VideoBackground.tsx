"use client";

export default function BackGroundVideo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-x-hidden">
      <video className="fixed top-0 left-0 w-full min-h-screen object-cover z-0" autoPlay loop muted playsInline preload="auto" poster="/img/poster.webp">
        <source src="/video/bg.webm" type="video/webm" />
      </video>

      <div className="fixed inset-0 bg-black/30 z-10 pointer-events-none" />

      <div className="relative z-20 min-h-screen">{children}</div>
    </div>
  );
}
