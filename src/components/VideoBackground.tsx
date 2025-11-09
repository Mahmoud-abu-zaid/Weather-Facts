export default function BackGroundVideo({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-center object-cover scale-[1.01]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="../../img/poster.wepb"
          style={{
            imageRendering: "auto",
            transform: "translateZ(0)",
          }}
        >
          <source src="../../video/bg.webm" />
          <source src="../../video/bg.mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

        <div className="relative z-10">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
