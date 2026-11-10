
import AboutFeatures from "./AboutFeatures";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-[205px] pb-24">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-36 opacity-30">
        <svg width="140" height="150" viewBox="0 0 140 150" fill="none">
          <path
            d="M30 10 L60 65 L5 95 M60 65 L125 90"
            stroke="#cbd5e1"
            strokeWidth="3"
          />
          <circle cx="30" cy="10" r="12" fill="#cbd5e1" />
          <circle cx="60" cy="65" r="10" fill="#cbd5e1" />
          <circle cx="5" cy="95" r="9" fill="#cbd5e1" />
          <circle cx="125" cy="90" r="11" fill="#cbd5e1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1540px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-[75px] lg:px-10">

        {/* Left Images Section */}
        <div className="relative mb-12 min-h-[480px] sm:min-h-[620px]">

          {/* Main Team Image */}
          <img
            src="/about/team.webp"
            alt="SEART embryology team"
            className="h-[450px] w-full rounded-[20px] object-cover shadow-sm sm:h-[570px]"
          />

          {/* Institute Badge */}
          <div className="absolute top-5 left-[-10px] flex items-center gap-3 rounded-2xl bg-[#29378e] px-5 py-4 text-white shadow-lg sm:left-[-18px]">

            <span className="text-2xl">♧</span>

            <span className="text-sm font-semibold sm:text-base">
              India's Leading Embryology Institute
            </span>

          </div>

          {/* Students Count Card */}
          <div className="absolute bottom-[-20px] left-[-10px] flex items-center gap-4 rounded-2xl border border-[#e0e5f3] bg-white px-5 py-5 shadow-lg sm:bottom-7 sm:left-[-18px] sm:px-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f2fa] text-2xl text-[#29378e]">
              ♧
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#101426]">
                200+
              </h3>

              <p className="mt-1 text-sm text-[#40536d]">
                Students Trained
              </p>
            </div>

          </div>

          {/* Small Student Image */}
          <div className="absolute right-[-5px] bottom-[-30px] h-[155px] w-[180px] overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-xl sm:right-[-10px] sm:bottom-[-25px] sm:h-[230px] sm:w-[270px]">

            <img
              src="/about/students.webp"
              alt="Embryology students"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

        {/* Right Content Section */}
        <div>

          {/* Small Heading */}
          <span className="inline-block rounded-md bg-[#f0f2fa] px-5 py-3 text-sm font-bold tracking-[3px] text-[#29378e]">
            ABOUT SEART
          </span>

          {/* Main Heading */}
          <h2 className="mt-7 text-3xl leading-tight font-bold text-[#101426] sm:text-4xl">

            A Premier Institute For

            <span className="block text-[#29378e]">
              Clinical Embryology
            </span>

          </h2>

          {/* Description */}
          <p className="mt-7 text-base leading-[1.75] text-[#40536d] sm:text-lg">

            School of Embryology and Assisted Reproductive Technology
            (SEART) is India's leading institute for clinical embryology
            courses. Renowned for excellence in education and practical
            training in assisted reproductive technology (ART), SEART
            prepares students to excel as clinical embryologists and
            leaders in reproductive healthcare.

          </p>

          {/* Feature Cards */}
          <AboutFeatures />
          <span>
            <a
              href="/enquiry"
              className="flex w-50 h-15 mt-5  items-center gap-4 rounded-xl bg-[#29378e] px-8 py-5 font-semibold text-white shadow-xl transition duration-300 hover:bg-[#19266e]"
            >
              Enroll Now

              <span className="text-xl">
                →
              </span>

            </a>
          </span>
        </div>

      </div>

    </section>
  );
}
