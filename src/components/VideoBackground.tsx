export default function BackGroundVideo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-screen">
      {/* الفيديو في الخلفية */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="../../img/poster.webp"
        style={{
          imageRendering: "auto",
          transform: "translateZ(0)",
        }}
      >
        <source src="../../video/bg.webm" type="video/webm" />
        <source src="../../video/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay لإضافة تأثير داكن */}
      <div className="fixed inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* محتوى الصفحة */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
