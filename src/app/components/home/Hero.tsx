import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function Hero() {
  const features = [
    {
      icon: "♧",
      title: "UG / PG",
      subtitle: "Degree Programs",
    },
    {
      icon: "⚗",
      title: "Hands-on IVF",
      subtitle: "Lab Training",
    },
    {
      icon: "♧",
      title: "10+ IVF",
      subtitle: "Partner Centres",
    },
    {
      icon: "◎",
      title: "National &",
      subtitle: "International Students",
    },
  ];

  const imageFadeMask =
    "linear-gradient(to right, transparent 0%, #000 28%), linear-gradient(to bottom, transparent 0%, #000 16%)";

  // NOTE: Mobile changes "base" classes me hain, aur purani values sm: / lg: par waapas set hain,
  // isliye tablet (sm+) aur desktop bilkul pehle jaisa rahega.

  return (
    <section
      className="relative min-h-[850px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home/bg-hero-v4.webp')",
        backgroundPosition: "center top",
      }}
    >
      {/* Embryologist Image - Desktop */}
      <img
        src="/home/hero-embryologist.webp"
        alt="Embryologist working with microscope"
        fetchPriority="high"
        className="pointer-events-none absolute right-0 top-[110px] z-0 hidden h-auto w-[85%] max-w-[1200px] select-none lg:block"
        style={{
          WebkitMaskImage: imageFadeMask,
          maskImage: imageFadeMask,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />

      {/* Mobile: side padding px-4, top padding thodi kam (165px) */}
      <div className="relative z-10 mx-auto max-w-[1620px] px-4 pb-10 pt-[165px] sm:px-6 sm:pt-[190px] md:pt-[220px] lg:px-10 lg:pt-[245px]">

        {/* Badge: mobile par full-width pill, content center me; sm+ par pehle jaisa inline pill */}
        <div className="mb-6 flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-full border border-gray-200 bg-white/90 px-5 py-2.5 text-center text-[13px] text-[#29378e] shadow-sm sm:mb-5 sm:ml-15 sm:inline-flex sm:w-auto sm:justify-start sm:gap-2 sm:py-3 sm:text-left sm:text-sm md:text-md">

          <span className="text-blue-900 text-[16px]"><HiOutlineAcademicCap /></span>

          <span>
            Off-Site Campus of Gurugram University
          </span>

          <span className="hidden text-gray-400 sm:inline">
            ·
          </span>

          <strong>
            State Govt. University
          </strong>

        </div>

        {/* pl-15 ab sirf sm+ par, mobile par left se touching */}
        <div className="max-w-[850px] sm:pl-15">

          <h1 className="text-[40px] leading-[1.1] font-extrabold tracking-tight text-[#080b1c] sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-[55px]">

            Shape Your Career with

            <span className="block text-[#29378e]">
              Clinical Embryology
            </span>

          </h1>

          <p className="mt-6 max-w-[680px] text-base leading-[1.7] text-[#40536d] sm:mt-7 sm:text-lg md:text-xl">

            Gain in-depth knowledge and hands-on training in embryology
            with our Master's, Integrated B.Sc. + M.Sc. and Fellowship in
            Clinical ART programs, designed for future leaders in ART and
            IVF labs. Discover a vibrant campus life and programs designed
            for your success.

          </p>

          {/* Buttons: mobile par full-width stacked, sm+ par side-by-side */}
          <div className="mt-9 flex flex-col gap-3.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-5">

            <a
              href="/enquiry"
              className="flex items-center justify-center gap-4 rounded-xl bg-[#29378e] px-6 py-3.5 font-semibold text-white shadow-xl transition duration-300 hover:bg-[#19266e] sm:py-3"
            >
              Enroll Now

              <span className="text-xl">
                →
              </span>

            </a>

            <a
              href="#courses"
              className="rounded-xl border-2 border-[#29378e] bg-white/60 px-6 py-3.5 text-center font-semibold text-[#29378e] transition duration-300 hover:bg-[#29378e] hover:text-white sm:py-3"
            >
              Explore Courses
            </a>

          </div>

        </div>

        {/* Embryologist Image - Mobile */}
        <img
          src="/home/hero-embryologist.webp"
          alt="Embryologist working in IVF laboratory"
          className="mt-8 block h-auto w-full lg:hidden"
        />

        {/* Bottom Features */}
        <div className="mt-12 grid grid-cols-2 gap-5 pt-7 md:grid-cols-4 lg:mt-14 lg:max-w-[1050px]">

          {features.map((item) => (

            <div
              key={item.title}
              className="flex items-center gap-3"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#29378e] shadow-sm">

                {item.icon}

              </div>

              <div>

                <h3 className="font-semibold text-[#11182d]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#40536d]">
                  {item.subtitle}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}