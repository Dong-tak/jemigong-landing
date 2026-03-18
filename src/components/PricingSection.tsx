const pricingCategories = [
  {
    title: "커트",
    subtitle: "Cut",
    items: [
      { name: "우먼 커트", price: "33,000원", note: null },
      { name: "맨즈 커트", price: "28,000원", note: null },
    ],
  },
  {
    title: "비건 염색",
    subtitle: "Vegan Color",
    items: [
      {
        name: "비건 뿌리 염색 + 모발 클리닉",
        price: "120,000원",
        note: null,
      },
      {
        name: "Villa Lodola 비건 염색 10회+1",
        price: "700,000원",
        note: "멤버십",
      },
      {
        name: "넘버쓰리 비건 염색 10회+1",
        price: "600,000원",
        note: "멤버십",
      },
    ],
  },
  {
    title: "클리닉",
    subtitle: "Clinic",
    items: [
      { name: "염색 후 모발 클리닉", price: "80,000원", note: null },
      {
        name: "밀본 탈모 라인 스파 클리닉",
        price: "80,000원",
        note: null,
      },
      { name: "아베다 두피 샴푸 서비스", price: "30,000원", note: null },
    ],
  },
  {
    title: "기타",
    subtitle: "Others",
    items: [
      { name: "눈썹 컬러 염색", price: "50,000원", note: null },
      {
        name: "열펌 (염색 회원 40% 할인)",
        price: "상담",
        note: null,
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg-ivory">
      <div className="max-w-[960px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-6 font-sans">
          Price Guide
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-text-primary leading-snug mb-4">
          시술 가격 안내
        </h2>

        <p className="text-base text-text-secondary text-center max-w-[480px] mx-auto mb-16 font-sans">
          모든 시술은 원장이 직접 진행합니다.
          <br />
          멤버십 회원권으로 더 합리적인 관리가 가능합니다.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border/60 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-border/40">
                <h3 className="font-serif text-xl font-semibold text-text-primary">
                  {category.title}
                </h3>
                <span className="text-xs tracking-[0.15em] text-secondary uppercase font-sans">
                  {category.subtitle}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-base text-text-primary font-sans leading-snug">
                        {item.name}
                      </p>
                      {item.note && (
                        <span className="inline-block mt-1 text-xs text-secondary bg-bg-green-tint px-2 py-0.5 rounded-full font-sans">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-base font-semibold flex-shrink-0 ${
                        item.price === "상담"
                          ? "text-secondary"
                          : "text-text-primary"
                      }`}
                    >
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-text-secondary mt-10 font-sans">
          * 카드수수료 10% 부과 · 자세한 상담은 네이버 예약을 이용해주세요
        </p>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://m.place.naver.com/hairshop/2092432048/stylist?theme=place&entry=pll&lang=ko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-base font-medium hover:bg-primary-dark transition-colors shadow-md font-sans"
          >
            네이버 예약하기
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
