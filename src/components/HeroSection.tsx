"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAVER_BOOKING_URL =
  "https://m.place.naver.com/hairshop/2092432048/stylist?theme=place&entry=pll&lang=ko";

const heroImages = [
  { src: "/images/treatment/blog-cut-after.jpg", alt: "레이어드 컬 시술 결과" },
  { src: "/images/store/interior-main.jpg", alt: "제미공 매장 내부" },
  { src: "/images/treatment/blog-cut-01.jpg", alt: "사이드 밥컷 시술 결과" },
  { src: "/images/store/blog-store-01.jpg", alt: "제미공 아로마 오일 & 카운터" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-primary-dark text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/treatment/healing-spa-banner.jpg"
          alt="제미공 두피&모발 힐링 스파"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-primary-dark/90" />
      </div>

      {/* Content - 2 Column Layout */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Sub Label */}
            <p className="text-sm tracking-[0.25em] text-text-light/60 uppercase mb-6 font-sans">
              Premium Vegan Hair Salon · Banpo
            </p>

            {/* Main Catchphrase */}
            <h1 className="font-serif text-[28px] md:text-5xl lg:text-[56px] font-bold leading-[1.2] mb-6">
              두피에 닿는 순간까지
              <br />
              편안하게.
            </h1>

            {/* Sub Copy */}
            <p className="text-base md:text-xl text-text-light/70 mb-10 max-w-[480px] leading-relaxed font-sans">
              자연주의 철학을 담은 100% 비건 제품으로{" "}
              <br className="hidden md:block" />
              건강한 아름다움을 완성합니다
            </p>

            {/* CTA Button */}
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-white text-primary-dark text-lg font-semibold rounded-lg hover:bg-bg-ivory transition-colors"
            >
              네이버 예약하기
            </a>
          </div>

          {/* Right: 시술 결과 캐러셀 */}
          <div className="hidden lg:block">
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: index === current ? 1 : 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />

              {/* Dot indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-white w-6"
                        : "bg-white/50 w-2"
                    }`}
                    aria-label={`이미지 ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-text-light/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
