"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    title: "비건 새치 컬러링",
    subtitle: "Vegan Gray Hair Coloring",
    description:
      "의사분들이 먼저 찾는 안심 염색. 영국 비달 사순 컬러 전문 교육을 이수한 원장이 직접 시술합니다. 발암물질 제로, ICEA 비건 인증 Villa Lodola로 두피 자극 없이 안전하게. 염색 후 밀본 클리닉으로 보습과 탈모 관리까지 한번에 케어합니다.",
    features: [
      "ICEA 이탈리아 비건 인증 Villa Lodola",
      "발암물질 ZERO — 천연 오일 기반 염모제",
      "염색 후 밀본 클리닉 보습·탈모 관리",
      "10회권 멤버십으로 합리적인 관리",
    ],
    images: [
      "/images/treatment/blog-cut-before.jpg",
      "/images/treatment/blog-cut-after.jpg",
    ],
  },
  {
    title: "사순 프리시전 커트",
    subtitle: "Vidal Sassoon Precision Cut",
    description:
      "\"헤어 시술 중에서도 커트가 가장 재미있다\"고 말하는 원장의 자신감. 비달 사순 A.B.C Cut 40인 장학생 출신이 직접 커트합니다. 커트→드라이→샴푸→드라이, 독자적 4단계 시술로 레이어드 라인의 완성도를 높입니다. 프라이빗 샴푸실에서 리클라이너 안마의자로 편안한 힐링까지.",
    features: [
      "비달 사순 아카데미 장학생 · 커트 대회 상위권",
      "커트→드라이→샴푸→드라이 4단계 완성",
      "1인 프라이빗 샴푸실 · 리클라이너 안마의자",
      "레드벨벳 웬디컷부터 10살 젊어지는 볼륨컷까지",
    ],
    images: [
      "/images/treatment/blog-cut-01.jpg",
      "/images/treatment/blog-cut-02.jpg",
    ],
  },
];

function ServiceSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-bg-cream">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}
      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white w-6"
                  : "bg-white/50"
              }`}
              aria-label={`이미지 ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServiceSection() {
  return (
    <section id="service" className="py-24 md:py-32 bg-bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-6 font-sans">
          Signature Service
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-text-primary leading-snug mb-20">
          제미공의 시그니처 시술
        </h2>

        {/* Services - alternating layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image slideshow */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <ServiceSlideshow images={service.images} />
              </div>

              {/* Text content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-xs tracking-[0.2em] text-secondary uppercase mb-3 font-sans">
                  {service.subtitle}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed mb-8 font-sans">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-base text-text-primary font-sans"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
