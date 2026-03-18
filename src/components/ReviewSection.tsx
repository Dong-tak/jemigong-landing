import Image from "next/image";

const reviews = [
  {
    author: "다니린",
    source: "네이버 블로그",
    date: "2026.03.11",
    rating: 5,
    service: "레이어드 커트",
    quote:
      "얼굴 주변 라인을 자연스럽게 정리해 주셔서 전체적인 분위기가 훨씬 가벼워 보이고 세련된 느낌이 났습니다.",
    detail:
      "커트→드라이→샴푸→드라이 순서로 진행되어 레이어드 라인의 완성도가 더 높아지는 느낌이 들었습니다. 1인 프라이빗 샴푸실에 리클라이너 안마의자가 있어서 정말 편안했어요.",
    image: "/images/treatment/blog-cut-after.jpg",
  },
  {
    author: "솜푸딩집",
    source: "네이버 블로그",
    date: "2026.02",
    rating: 5,
    service: "비건 염색 + 클리닉",
    quote:
      "조용하고 편안한 힐링 공간. 1인샵이라 프라이빗하게 시술 받을 수 있어서 좋았습니다.",
    detail:
      "반포에서 조용히 머리하고 싶은 분들에게 강력 추천합니다. 아늑하고 편안한 분위기에서 꼼꼼한 상담과 시술을 받을 수 있었어요.",
    image: "/images/store/interior-wide.jpeg",
  },
  {
    author: "의료진 고객님",
    source: "단골 고객",
    date: "",
    rating: 5,
    service: "Villa Lodola 비건 염색",
    quote:
      "백화점 라인보다 미용실 제품이 확실한 것 같아요. 밀본 스파 클리닉과 비건 염모제를 사랑합니다.",
    detail:
      "병원 근무하시는 분들이 밀본 스파 클리닉과 비건 염모제를 더욱 사랑하고 있습니다. 발암물질 제로, 천연 오일 기반이라 안심하고 받을 수 있어요.",
    image: "/images/store/blog-store-01.jpg",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#A68B6B"
          className="flex-shrink-0"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-6 font-sans">
          Client Reviews
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-text-primary leading-snug mb-4">
          고객님의 이야기
        </h2>

        <p className="text-base text-text-secondary text-center max-w-[480px] mx-auto mb-16 font-sans">
          실제 방문하신 고객님들의 솔직한 후기입니다.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-bg-ivory rounded-xl border border-border/40 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image (if available) */}
              {review.image && (
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={review.image}
                    alt={`${review.author} 후기`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-3">
                  <StarRating count={review.rating} />
                  <span className="text-xs text-secondary font-sans px-2 py-1 bg-bg-green-tint rounded-full">
                    {review.service}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base text-text-primary leading-relaxed mb-3 font-sans">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* Detail */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4 font-sans">
                  {review.detail}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                  <div className="w-8 h-8 rounded-full bg-bg-green-tint flex items-center justify-center">
                    <span className="text-xs text-primary font-semibold">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary font-sans">
                      {review.author}
                    </p>
                    <p className="text-xs text-text-secondary font-sans">
                      {review.source}
                      {review.date && ` · ${review.date}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
