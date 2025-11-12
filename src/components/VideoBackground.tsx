export default function BackGroundVideo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="../../img/poster.wepb"
        style={{
          imageRendering: "auto",
          transform: "translateZ(0)",
        }}
      >
        <source src="../../video/bg.webm" type="video/webm" />
        <source src="../../video/bg.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/30 z-10 pointer-events-none" />

      <div className="relative z-20">{children}</div>
    </div>
  );
}
