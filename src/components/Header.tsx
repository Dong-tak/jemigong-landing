"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "브랜드 철학", href: "#brand-story" },
  { label: "시술 안내", href: "#service" },
  { label: "가격 안내", href: "#pricing" },
  { label: "사용 제품", href: "#products" },
  { label: "오시는 길", href: "#contact" },
];

const NAVER_BOOKING_URL =
  "https://m.place.naver.com/hairshop/2092432048/stylist?theme=place&entry=pll&lang=ko";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="w-full px-4 lg:px-8 h-[80px] flex items-center justify-between">
        {/* Logo - 왼쪽 끝 정렬 */}
        <a href="#" className="flex-shrink-0 mr-auto">
          <Image
            src="/images/logo/logo-horizontal-white-bg.jpg"
            alt="제미공 JEMIGONG HAIR BANPO"
            width={280}
            height={280}
            className="h-[72px] w-[200px] object-cover object-center"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 mr-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[17px] font-medium text-text-secondary hover:text-primary transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={NAVER_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-7 py-3 bg-primary text-white text-base font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          네이버 예약
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <svg
            className="w-7 h-7 text-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-ivory border-t border-border px-6 py-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-text-primary py-3 border-b border-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white text-base font-semibold rounded-lg mt-4"
            >
              네이버 예약하기
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
