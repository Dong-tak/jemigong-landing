"use client";

export default function KakaoChatButton() {
  return (
    <a
      href="https://pf.kakao.com/_gKQxhX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 상담"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#FEE500] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      {/* Kakao Talk icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477l-10.534 38.576c-.906 3.316 2.9 5.98 5.847 4.098l45.652-29.149C119.553 202.334 123.738 202.667 128 202.667c57.438 0 104-36.713 104-82.667S185.438 36 128 36z"
          fill="#3C1E1E"
        />
      </svg>
    </a>
  );
}
