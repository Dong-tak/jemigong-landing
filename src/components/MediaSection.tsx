import Image from "next/image";

const highlights = [
  "PowerKorea 2026년 5월 표지모델",
  "선한 영향력 인물 CEO 40인 선정",
  "제미공헤어 전미라 대표 인터뷰 및 방송 소개",
  "비건 천연 염색과 자연주의 헤어 철학 소개",
];

export default function MediaSection() {
  return (
    <section id="media" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-secondary uppercase mb-6 font-sans">
              Media Spotlight
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug mb-6">
              파워코리아 5월 표지모델
              <br />
              전미라 대표
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed font-sans mb-8">
              선한 영향력 인물 CEO 40인에 선정된 제미공헤어 전미라 대표의
              자연주의 헤어 철학과 비건 천연 염색 이야기를 PowerKorea 표지와
              방송 영상으로 먼저 소개합니다.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-text-primary font-sans"
                >
                  <span className="w-5 h-5 rounded-full bg-bg-green-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[0.78fr_1.22fr] gap-5 md:gap-6 items-stretch">
            <figure className="bg-bg-ivory border border-border rounded-xl overflow-hidden">
              <div className="relative aspect-[3/4] bg-bg-cream">
                <Image
                  src="/media/powerkorea-2026-cover.jpg"
                  alt="PowerKorea 2026년 5월 Special 제미공헤어 표지"
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 38vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-text-secondary font-sans leading-relaxed">
                PowerKorea 2026년 5월 표지모델 · 전미라 대표
              </figcaption>
            </figure>

            <div className="bg-bg-green-tint border border-border rounded-xl overflow-hidden flex flex-col">
              <div className="relative aspect-video bg-text-primary">
                <video
                  className="w-full h-full object-cover"
                  src="/media/powerkorea-broadcast.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="제미공헤어 방송 소개 영상"
                />
              </div>
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-center">
                <p className="text-xs tracking-[0.18em] text-secondary uppercase mb-3 font-sans">
                  Broadcast
                </p>
                <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3">
                  방송 소개 영상
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  선한 영향력 인물 CEO 40인으로 소개된 전미라 대표의 비건
                  제품, 자연주의 염색 철학, 전문 시술 과정을 영상으로 확인하실
                  수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
