import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#406345]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center overflow-hidden">
            <Image
              src="/images/logo/logo-horizontal-green-bg.jpg"
              alt="제미공 JEMIGONG HAIR BANPO"
              width={280}
              height={280}
              className="h-[68px] w-[190px] object-cover object-center scale-110"
            />
          </div>

          {/* SNS Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/jemigonghair_banpo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-light/50 hover:text-text-light/90 transition-colors font-sans"
            >
              Instagram
            </a>
            <a
              href="https://m.place.naver.com/hairshop/2092432048/stylist?theme=place&entry=pll&lang=ko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-light/50 hover:text-text-light/90 transition-colors font-sans"
            >
              네이버 예약
            </a>
            <a
              href="tel:050713417524"
              className="text-sm text-text-light/50 hover:text-text-light/90 transition-colors font-sans"
            >
              전화문의
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-text-light/10 mt-8 pt-6">
          <p className="text-xs text-text-light/30 text-center font-sans">
            © 2026 제미공 반포 본점 JEMIGONG HAIR BANPO. All rights reserved.
          </p>
          <p className="text-xs text-text-light/20 text-center mt-1 font-sans">
            서울특별시 서초구 서초중앙로29길 26 1층 101호
          </p>
        </div>
      </div>
    </footer>
  );
}
