import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "제미공 반포 본점 | 프리미엄 비건 새치염색 & 사순 커트 전문 미용실",
  description:
    "서울 서초구 반포동 비건 새치 전문 미용실. Villa Lodola 100% 비건 염색, 영국 비달사순 프리시전 커트, 밀본 공식 사용 매장. 두피에 닿는 순간까지 자연주의 철학을 담은 안심 시술.",
  keywords: [
    "비건 염색",
    "새치 염색",
    "비건 새치 컬러링",
    "반포 미용실",
    "서초 미용실",
    "비달사순 커트",
    "사순 프리시전 커트",
    "Villa Lodola",
    "빌라로돌라",
    "밀본",
    "두피 케어",
    "제미공",
    "제미공 반포",
    "프리미엄 미용실",
    "40대 미용실",
    "50대 미용실",
    "새치 전문",
    "비건 미용실",
    "서울 비건 염색",
    "반포동 헤어살롱",
  ],
  authors: [{ name: "제미공 JEMIGONG HAIR BANPO" }],
  creator: "제미공 반포 본점",
  publisher: "제미공 반포 본점",
  formatDetection: {
    telephone: true,
    email: false,
  },
  metadataBase: new URL("https://jemigong.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jemigong.com",
    siteName: "제미공 반포 본점",
    title: "제미공 반포 본점 | 프리미엄 비건 새치염색 & 사순 커트 전문",
    description:
      "서울 서초구 반포동 비건 새치 전문 미용실. Villa Lodola 100% 비건 염색, 영국 비달사순 프리시전 커트. 두피에 닿는 순간까지 자연주의 철학을 담은 안심 시술.",
    images: [
      {
        url: "/images/logo/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "제미공 반포 본점 JEMIGONG HAIR BANPO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "제미공 반포 본점 | 비건 새치염색 & 사순 커트 전문",
    description:
      "서울 서초구 반포동 비건 새치 전문 미용실. Villa Lodola 100% 비건 염색, 비달사순 프리시전 커트.",
    images: ["/images/logo/og-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    other: {
      "naver-site-verification": "8767f434e41bd8fd16d698c325a7d0faff0ce90d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "제미공 반포 본점",
              alternateName: "JEMIGONG HAIR BANPO",
              description:
                "서울 서초구 반포동 비건 새치 전문 미용실. Villa Lodola 100% 비건 염색, 영국 비달사순 프리시전 커트, 밀본 공식 사용 매장.",
              url: "https://jemigong.com",
              image: "https://jemigong.com/images/logo/og-preview.jpg",
              telephone: "+82-0507-1341-7524",
              address: {
                "@type": "PostalAddress",
                streetAddress: "서초중앙로29길 26 1층 101호",
                addressLocality: "서초구",
                addressRegion: "서울특별시",
                postalCode: "06654",
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.4923,
                longitude: 127.0068,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              priceRange: "₩₩₩",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "시술 메뉴",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "우먼컷",
                      description: "비달사순 프리시전 커트",
                    },
                    price: "33000",
                    priceCurrency: "KRW",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "비건 뿌리 염색 + 클리닉",
                      description: "Villa Lodola 100% 비건 새치 컬러링",
                    },
                    price: "120000",
                    priceCurrency: "KRW",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "128",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${notoSerifKR.variable} ${notoSansKR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
