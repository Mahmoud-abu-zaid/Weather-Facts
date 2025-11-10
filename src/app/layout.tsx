import "../assets/style/globals.css";
import Header from "@/components/Header";
import { Exo_2 } from "next/font/google";
import BackGroundVideo from "@/components/VideoBackground";
import QueryProviders from "@/providers/QueryProvider";

const exo_2 = Exo_2();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <QueryProviders>
          <BackGroundVideo>
            <Header />
            {children}
          </BackGroundVideo>
        </QueryProviders>
      </body>
    </html>
  );
}
