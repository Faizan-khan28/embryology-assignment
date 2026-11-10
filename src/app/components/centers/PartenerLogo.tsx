
"use client";

import dynamic from "next/dynamic";

type Partner = {
  name: string;
  image: string;
};

type LogoRowProps = {
  partners: Partner[];
  reverse?: boolean;
};

// Load Swiper only in the browser
const LogoRow = dynamic<LogoRowProps>(
  () => import("./LogoRow"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[130px] w-full" />
    ),
  }
);

const firstRow: Partner[] = [
  { name: "Hira Fertility Centre", image: "hira.webp" },
  { name: "Thakral Hospital", image: "Thakral.webp" },
  { name: "Origyn IVF", image: "Origin.webp" },
  { name: "Birla Fertility", image: "Birla.webp" },
  { name: "Indira IVF", image: "Indira.webp" },
  { name: "Nova IVF", image: "Nova.webp" },
];

const secondRow: Partner[] = [
  { name: "Aveya IVF", image: "Aveya.webp" },
  { name: "CIFAR", image: "Ifar.webp" },
  { name: "Hajela Hospital", image: "Hajela.webp" },
  { name: "Jindal Hospital", image: "jindal.webp" },
  { name: "Ajanta Hospital", image: "Ajanta.webp" },
  { name: "Aveta IVF", image: "Aveta.webp" },
];

export default function PartnerLogos() {
  return (
    <div className="w-full space-y-8">

      {/* First Row */}
      <LogoRow partners={firstRow} />

      {/* Second Row */}
      <LogoRow partners={secondRow} reverse />

    </div>
  );
}
