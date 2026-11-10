
import PartnerLogos from "./PartenerLogo";

export default function CentresHero() {
  const badges = [
    {
      icon: "♧",
      text: "10+ Partner Centres",
    },
    {
      icon: "◎",
      text: "Pan-India",
    },
    {
      icon: "↗",
      text: "High Placement Ratio",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eff6ff] via-white to-[#eff6ff] pt-[65px] pb-16">

      
      <div className="pointer-events-none absolute left-0 top-40 opacity-40">
        <svg width="260" height="270" viewBox="0 0 260 270" fill="none">
          <path
            d="M55 25 L155 120 L55 215 M155 120 L235 45 M155 120 L225 230"
            stroke="#bfdbfe"
            strokeWidth="6"
          />
          <circle cx="55" cy="25" r="22" fill="#bfdbfe" />
          <circle cx="155" cy="120" r="40" fill="#bfdbfe" />
          <circle cx="55" cy="215" r="23" fill="#bfdbfe" />
          <circle cx="235" cy="45" r="20" fill="#bfdbfe" />
          <circle cx="225" cy="230" r="17" fill="#bfdbfe" />
        </svg>
      </div>

     
      <div className="pointer-events-none absolute right-0 top-64 rotate-180 opacity-40">
        <svg width="230" height="270" viewBox="0 0 260 270" fill="none">
          <path
            d="M55 25 L155 120 L55 215 M155 120 L235 45 M155 120 L225 230"
            stroke="#bfdbfe"
            strokeWidth="6"
          />
          <circle cx="55" cy="25" r="22" fill="#bfdbfe" />
          <circle cx="155" cy="120" r="40" fill="#bfdbfe" />
          <circle cx="55" cy="215" r="23" fill="#bfdbfe" />
          <circle cx="235" cy="45" r="20" fill="#bfdbfe" />
          <circle cx="225" cy="230" r="17" fill="#bfdbfe" />
        </svg>
      </div>

      
      <div className="relative z-10 mx-auto max-w-[1500px] px-5">

        
        <div className="mb-8 flex items-center justify-center gap-5">

          <div className="h-[2px] w-12 bg-[#cbd5e1]" />

          <span className="rounded-full bg-[#e8edff] px-7 py-2 text-center text-sm font-bold tracking-[3px] text-[#29378e] md:text-sm">
            OUR NETWORK OF CENTRES
          </span>

          <div className="h-[2px] w-12 bg-[#cbd5e1]" />

        </div>

        
        <h1 className="text-center text-3xl leading-tight font-bold text-[#101426] md:text-3xl">

          Partnering with India's most trusted

          <span className="block text-[#29378e]">
            IVF & Fertility Centres
          </span>

        </h1>

        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

          {badges.map((badge) => (

            <div
              key={badge.text}
              className="flex items-center gap-3 rounded-full border border-[#a5b4fc] bg-white/80 px-4 py-2 text-base font-medium text-[#29378e] md:text-md"
            >

              <span className="text-xl">
                {badge.icon}
              </span>

              {badge.text}

            </div>

          ))}

        </div>

      </div>

      
      <div className="relative z-10 mt-12">
        <PartnerLogos />
      </div>

    </section>
  );
}
