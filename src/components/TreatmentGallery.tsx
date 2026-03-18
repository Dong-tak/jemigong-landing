"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/treatment/cut-result-01.jpg",
    alt: "사순 커트 - 레이어드 볼륨",
    caption: "레이어드 볼륨 커트",
  },
  {
    src: "/images/treatment/cut-result-02.jpg",
    alt: "사순 커트 - 시니어 볼륨",
    caption: "시니어 볼륨 커트",
  },
  {
    src: "/images/treatment/cut-result-03.jpg",
    alt: "비건 염색 결과",
    caption: "비건 새치 컬러링",
  },
];

export default function TreatmentGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-bg-ivory">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-6 font-sans">
          Our Results
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-text-primary leading-snug mb-14">
          시술 결과를 확인하세요
        </h2>

        {/* Slideshow */}
        <div className="relative max-w-[900px] mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-bg-cream">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === current ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-serif font-medium">
                {slides[current].caption}
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-secondary"
                }`}
                aria-label={`슬라이드 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
