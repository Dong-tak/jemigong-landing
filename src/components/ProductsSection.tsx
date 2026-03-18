import Image from "next/image";

const products = [
  {
    name: "Milbon Enhancing Vivacity",
    description: "두피 스캘프 케어에 특화된 프리미엄 라인. 일상에 생기를 더하다.",
    image: "/images/products/milbon-vivacity-lineup.png",
  },
  {
    name: "Milbon Smooth",
    description: "윤기감 넘치고 매끄러운 감촉의 모발로 이끌어주는 스무스 시리즈.",
    image: "/images/products/milbon-smooth-lineup.png",
  },
  {
    name: "Milbon Repair",
    description: "손상된 모발을 복원하고 건강한 윤기를 되찾아주는 리페어 라인.",
    image: "/images/products/milbon-repair-lineup.png",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-bg-green-tint">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs tracking-[0.25em] text-secondary uppercase text-center mb-6 font-sans">
          Premium Products
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-text-primary leading-snug mb-4">
          검증된 프리미엄, 밀본
        </h2>

        <p className="text-base text-text-secondary text-center max-w-[560px] mx-auto mb-16 font-sans">
          글로벌 프리미엄 헤어 브랜드 밀본(Milbon)의 공식 사용 매장입니다.
          <br />
          최상의 제품으로 최상의 결과를 약속합니다.
        </p>

        {/* Product Cards - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-[220px] bg-bg-cream overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Villa Lodola Feature */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto bg-bg-cream overflow-hidden">
              <Image
                src="/images/products/villa-lodola-wood.png"
                alt="Villa Lodola 비건 염색"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs tracking-[0.15em] text-secondary uppercase mb-3 font-sans">
                Vegan Color
              </p>
              <h3 className="font-serif text-2xl font-semibold text-text-primary mb-4">
                Villa Lodola Clear Veil
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 font-sans">
                세계 최초 ICEA 비건 인증 컬러. 비건으로 편안하게, 동시에 투명하고
                밝은 헤어 컬러가 가능한 프리미엄 비건 패션 그레이 헤어 컬러.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-text-secondary font-sans">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full flex-shrink-0" />
                  ICEA 비건 인증
                </li>
                <li className="flex items-center gap-2 text-sm text-text-secondary font-sans">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full flex-shrink-0" />
                  식물성 원료 기반
                </li>
                <li className="flex items-center gap-2 text-sm text-text-secondary font-sans">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full flex-shrink-0" />
                  두피 자극 최소화
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Milbon Official Partner Badge */}
        <p className="text-center text-xs text-secondary tracking-[0.2em] uppercase mt-12 font-sans">
          Milbon Official Partner Salon
        </p>
      </div>
    </section>
  );
}
