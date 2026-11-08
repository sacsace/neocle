import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteDescription, siteTitle, structuredData } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neocle.in"),
  title: {
    default: siteTitle,
    template: "%s | Neocle International",
  },
  description: siteDescription,
  applicationName: "Neocle International",
  authors: [{ name: "Neocle International Private Limited", url: "https://www.neocle.in" }],
  creator: "Neocle International Private Limited",
  publisher: "Neocle International Private Limited",
  category: "export",
  keywords: [
    "Neocle International",
    "네오클 인터내셔널",
    "PA66",
    "PA66 에어백 원단",
    "코팅 PA66",
    "비코팅 PA66",
    "스크랩 수출",
    "석영 원석",
    "자단",
    "레드 샌달우드",
    "인도 수출",
    "인도 수입 대행",
    "태국 수출",
    "한국 수출",
    "파파람바캄 창고",
    "벵갈루루 사무실",
  ],
  alternates: {
    canonical: "/",
    languages: { ko: "https://www.neocle.in" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.neocle.in",
    siteName: "Neocle International",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/photos/pa66-ready.jpg",
        width: 1600,
        height: 650,
        alt: "출고를 기다리는 PA66 톤백",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/photos/pa66-ready.jpg"],
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f0e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <Script id="gtm" src="https://www.googletagmanager.com/gtm.js?id=GTM-TQQH6MMT" strategy="beforeInteractive" />
        <Script id="gtm-2" src="https://www.googletagmanager.com/gtm.js?id=GTM-TV7W8DN2" strategy="beforeInteractive" />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
