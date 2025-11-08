import "../assets/style/globals.css";
import BackGroundVideo from "@/components/backgroundVideo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <BackGroundVideo>{children}</BackGroundVideo>
      </body>
    </html>
  );
}
