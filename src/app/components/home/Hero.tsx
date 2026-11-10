
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
 
  return (
    <section
      className="relative min-h-[850px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home/bg-hero-v4.webp')",
        backgroundPosition: "center top",
      }}
    >
      
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
 
      <div className="relative z-10 mx-auto max-w-[1620px] px-6 pb-10 pt-[190px] md:pt-[220px] lg:px-10 lg:pt-[245px]">
 
        <div className="mb-5 ml-15 inline-flex flex-wrap items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-5 py-3 text-sm text-[#29378e] shadow-sm md:text-md">
 
          <span>♧</span>
 
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
 
        <div className="max-w-[850px] pl-15">
 
          <h1 className="text-4xl leading-[1.12] font-extrabold tracking-tight text-[#080b1c] sm:text-4xl md:text-5xl lg:text-[55px]">
 
            Shape Your Career with
 
            <span className="block text-[#29378e]">
              Clinical Embryology
            </span>
 
          </h1>
 
          <p className="mt-7 max-w-[680px] text-base leading-[1.7] text-[#40536d] sm:text-lg md:text-xl">
 
            Gain in-depth knowledge and hands-on training in embryology
            with our Master's, Integrated B.Sc. + M.Sc. and Fellowship in
            Clinical ART programs, designed for future leaders in ART and
            IVF labs. Discover a vibrant campus life and programs designed
            for your success.
 
          </p>
 
          <div className="mt-5 flex flex-wrap gap-5">
 
            <a
              href="/enquiry"
              className="flex items-center gap-4 rounded-xl bg-[#29378e] px-6 py-3 font-semibold text-white shadow-xl transition duration-300 hover:bg-[#19266e]"
            >
              Enroll Now
 
              <span className="text-xl">
                →
              </span>
 
            </a>
 
            <a
              href="#courses"
              className="rounded-xl border-2 border-[#29378e] bg-white/60 px-6 py-3 font-semibold text-[#29378e] transition duration-300 hover:bg-[#29378e] hover:text-white"
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
 