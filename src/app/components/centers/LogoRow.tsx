
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

type Partner = {
  name: string;
  image: string;
};

type LogoRowProps = {
  partners: Partner[];
  reverse?: boolean;
};

export default function LogoRow({
  partners,
  reverse = false,
}: LogoRowProps) {
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
            className="!w-[190px] md:!w-[180px]"
          >
            <div className="partner-card flex h-[112px] items-center justify-center rounded-[22px] border border-[#e0e5f3] bg-white px-8 py-3 shadow-sm transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-md md:h-[115px]">

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
