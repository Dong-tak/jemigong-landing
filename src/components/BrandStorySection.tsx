export default function BrandStorySection() {
  return (
    <section id="brand-story" className="py-24 md:py-32 bg-bg-ivory">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-6 font-sans">
          Our Philosophy
        </p>

        {/* Main Message */}
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-text-primary leading-snug mb-8">
          두피에 닿기 전,
          <br />
          먼저 생각합니다.
        </h2>

        {/* Body Text */}
        <div className="max-w-[680px] mx-auto text-center mb-20">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-sans">
            염색약이 혈액에 흡수되기 전, 두피에 자극 없이 시술하는 것.
            <br className="hidden md:block" />
            그것이 제미공이 가장 먼저 생각하는 기본입니다.
            <br />
            <br />
            영국 비달 사순 컬러 전문 교육과 10여 종의 특허 기술,
            <br className="hidden md:block" />
            그리고 책임감 있는 모발·두피 진단 후 맞춤 시술을 권해드립니다.
            <br />
            시술 이후 홈 클리닉의 중요성까지 꼼꼼히 안내해드려요.
          </p>
        </div>

        {/* Credentials - 원장 이력 핵심 */}
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-4 font-sans">
            Credentials
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-center text-text-primary mb-12">
            40년 경력의 전문성
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "커트 전문",
                items: [
                  "영국 Vidal Sassoon A.B.C Cut 40인 장학생",
                  "일본 P-R-C Cut 국가고시 전문강사",
                ],
              },
              {
                num: "02",
                title: "컬러 & 클리닉",
                items: [
                  "영국 비달 사순 컬러 염색 터치 전문",
                  "전국 유일 모이스춰 펌 & 새치 컬러 전문가",
                ],
              },
              {
                num: "03",
                title: "수상 & 미디어",
                items: [
                  "대한미용협회 커트·펌 최우수상 다수",
                  "TV조선 '두피 미용 전문가' 출연",
                ],
              },
              {
                num: "04",
                title: "자격 & 특허",
                items: [
                  "두피 1·2급 / 피부관리사 자격",
                  "서울 산업미술 전공 · 디자인 특허 다수",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl overflow-hidden border border-border/40 hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-3xl font-bold text-primary/15 font-serif leading-none">
                      {card.num}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-text-primary">
                      {card.title}
                    </h4>
                  </div>
                  <ul className="space-y-3 pl-1">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-bg-green-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </span>
                        <p className="text-sm text-text-secondary font-sans leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
