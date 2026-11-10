
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

type Partner = {
  name: string;
  image: string;
};

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

type LogoRowProps = {
  partners: Partner[];
  reverse?: boolean;
};

function LogoRow({ partners, reverse = false }: LogoRowProps) {
  // Duplicate logos for smooth continuous sliding
  const repeatedPartners = [
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <div className="w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        speed={5000}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: reverse,
        }}
        allowTouchMove={true}
        className="partner-swiper"
      >

        {repeatedPartners.map((partner, index) => (

          <SwiperSlide
            key={`${partner.name}-${index}`}
            className="!w-[190px] md:!w-[225px]"
          >

            
            <div className="flex h-[112px] items-center justify-center rounded-[22px] border border-[#e0e5f3] bg-white px-5 shadow-sm transition-all duration-300 cursor-pointer hover:border-gray-400 ease-in-out hover:scale-95 hover:shadow-md md:h-[115px]">

              <img
                src={`/centres/${partner.image}`}
                alt={partner.name}
                loading="lazy"
                draggable={false}
                className="max-h-[75px] max-w-full object-contain"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}

export default function PartnerLogos() {
  return (
    <div className="w-full space-y-8">

      
      <LogoRow partners={firstRow} />

      
      <LogoRow partners={secondRow} reverse />

    </div>
  );
}
