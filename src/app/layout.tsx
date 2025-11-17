import "../assets/style/globals.css";
import Header from "@/components/Header";
import { Exo_2 } from "next/font/google";
import BackGroundVideo from "@/components/VideoBackground";
import QueryProviders from "@/providers/QueryProvider";

export const metadata = {
  metadataBase: new URL("https://weather-facts-one.vercel.app/"),

  title: "Dark Weather – Real-Time Global Weather & 3-Day Forecast",
  description:
    "Dark Weather provides accurate real-time weather updates for any city worldwide. View 3-day forecasts, temperature, humidity, wind speed, UV index, sky conditions, and more in a fast, responsive interface.",

  keywords: [
    "weather app",
    "weather forecast",
    "global weather",
    "real-time weather",
    "3-day forecast",
    "temperature today",
    "humidity",
    "wind speed",
    "UV index",
    "weather conditions",
    "nextjs weather app",
    "climate info",
    "live weather",
  ],

  authors: [{ name: "Mahmoud Abu Zaid", url: "https://weather-facts-one.vercel.app/" }],
  creator: "Mahmoud Abu Zaid",
  publisher: "Dark Weather",
  robots: "index, follow",

  alternates: {
    canonical: "https://weather-facts-one.vercel.app/",
  },

  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
  },

  openGraph: {
    title: "Dark Weather – Real-Time Global Weather & Forecast",
    description: "Check accurate and real-time weather conditions worldwide. Get 3-day forecasts, UV index, humidity, wind speed, and temperature insights instantly.",
    url: "https://weather-facts-one.vercel.app/",
    siteName: "Dark Weather",
    images: [
      {
        url: "/img/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Dark Weather App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
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
