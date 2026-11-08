import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neocle International — PA66, 스크랩, 석영",
  description:
    "Neocle International은 코팅·비코팅 PA66 에어백 원단을 태국과 한국으로, 스크랩을 한국으로 수출합니다. 석영과 자단은 구매 상담을 받으며, 자단은 관련 허가와 서류 확인 후 안내합니다.",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="theme-color" content="#f3f0e8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
