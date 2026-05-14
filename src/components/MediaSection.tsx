import Image from "next/image";

const highlights = [
  "PowerKorea 2026년 5월 표지모델",
  "선한 영향력 인물 CEO 40인 선정",
  "제미공헤어 전미라 대표 인터뷰 및 방송 소개",
  "비건 천연 염색과 자연주의 헤어 철학 소개",
];

export default function MediaSection() {
  return (
    <>
      <section id="media" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[500px_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.25em] text-secondary uppercase mb-6 font-sans">
                PowerKorea Cover
              </p>
              <h2 className="font-serif text-3xl md:text-4xl xl:text-[42px] font-semibold text-text-primary leading-snug mb-6">
                파워코리아 5월 표지모델
                <br />
                전미라 대표
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed font-sans mb-8">
                선한 영향력 인물 CEO 40인에 선정된 제미공헤어 전미라 대표의
                자연주의 헤어 철학과 비건 천연 염색 이야기가 PowerKorea
                표지로 소개되었습니다.
              </p>

              <ul className="space-y-3">
                {highlights.slice(0, 3).map((item) => (
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

            <figure className="w-full max-w-[620px] lg:justify-self-end bg-bg-ivory border border-border rounded-xl overflow-hidden">
              <div className="relative aspect-[3/4] bg-bg-cream">
                <Image
                  src="/media/powerkorea-2026-cover.jpg"
                  alt="PowerKorea 2026년 5월 Special 제미공헤어 표지"
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="px-6 py-5 text-base text-text-secondary font-sans leading-relaxed">
                PowerKorea 2026년 5월 표지모델 · 전미라 대표
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-green-tint">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.8fr)_420px] gap-10 lg:gap-16 items-center">
            <div className="bg-text-primary border border-border rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  src="/media/powerkorea-broadcast.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="제미공헤어 방송 소개 영상"
                />
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] text-secondary uppercase mb-5 font-sans">
                Broadcast
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug mb-5">
                방송 소개 영상
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed font-sans mb-7">
                선한 영향력 인물 CEO 40인으로 소개된 전미라 대표의 비건 제품,
                자연주의 염색 철학, 전문 시술 과정을 영상으로 확인하실 수
                있습니다.
              </p>

              <ul className="space-y-3">
                {[
                  "제미공헤어 전미라 대표 인터뷰",
                  "비건 천연 염색과 자연주의 헤어 철학 소개",
                  "전문 시술 과정과 매장 분위기 조명",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-text-primary font-sans"
                  >
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
