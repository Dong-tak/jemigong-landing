import Image from "next/image";

const NAVER_BOOKING_URL =
  "https://m.place.naver.com/hairshop/2092432048/stylist?theme=place&entry=pll&lang=ko";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-bg-ivory">
      {/* Top: Full-width interior image with overlay */}
      <div className="relative h-[400px] md:h-[480px]">
        <Image
          src="/images/store/interior-main.jpg"
          alt="제미공 반포 본점 매장 내부"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 to-primary-dark/80" />

        {/* Text over image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-sans opacity-70">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            제미공 반포 본점
          </h2>
          <p className="text-text-light/60 text-base font-sans max-w-[400px]">
            건강한 아름다움을 위한 공간에서 만나보세요
          </p>
        </div>
      </div>

      {/* Bottom: Contact info cards */}
      <div className="max-w-[1000px] mx-auto px-6 -mt-16 relative z-10 pb-24">
        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
            {/* Address */}
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.2em] text-secondary uppercase mb-3 font-sans">
                Address
              </p>
              <p className="text-text-primary text-base font-medium font-sans leading-relaxed">
                서울 서초구 서초중앙로29길 26
                <br />
                1층 101호
              </p>
            </div>

            {/* Hours */}
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.2em] text-secondary uppercase mb-3 font-sans">
                Hours
              </p>
              <div className="text-text-primary text-base font-sans space-y-1">
                <p>매일 10:00 – 19:00</p>
                <p className="text-text-secondary text-sm">19:00 영업 종료</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.2em] text-secondary uppercase mb-3 font-sans">
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href="tel:050713417524"
                  className="text-text-primary text-base font-sans hover:text-primary transition-colors block"
                >
                  0507-1341-7524
                </a>
                <a
                  href="https://www.instagram.com/jemigonghair_banpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm font-sans hover:text-primary transition-colors block"
                >
                  @jemigonghair_banpo
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-10" />

          {/* CTA */}
          <div className="text-center">
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              네이버 예약하기
            </a>
            <p className="text-text-secondary text-sm mt-4 font-sans">
              건물 내 주차 가능 · 지금 바로 예약하세요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
