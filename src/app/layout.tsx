import "../assets/style/globals.css";
import Header from "@/components/Header";
import BackGroundVideo from "@/components/VideoBackground";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={exo_2.className}>
        <BackGroundVideo>
          <Header />
          {children}
        </BackGroundVideo>
      </body>
    </html>
  );
}
