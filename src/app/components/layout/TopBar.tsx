
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#11132f] text-white">
      <div className="mx-auto flex h-12.75 max-w-[1620px] items-center justify-between px-5 text-sm">

        {/* Left Side */}
        <div className="flex items-center gap-6">

          <span className="hidden lg:block">
            Have any questions?
          </span>

          <a href="tel:+919870109545">
            ☎ +91 98701 09545
          </a>

          <a
            href="mailto:admissions@embryologytraining.in"
            className="hidden border-l border-white/30 pl-6 md:block"
          >
            ✉ admissions@embryologytraining.in
          </a>

          <a
            href="mailto:info@embryologytraining.in"
            className="hidden border-l border-white/30 pl-6 xl:block"
          >
            ✉ info@embryologytraining.in
          </a>

        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-7 lg:flex">

          <a href="#">
            ▤ Brochure Download
          </a>

          <Link href="/enquiry">
            ▤ Registration Form
          </Link>

        </div>

      </div>
    </div>
  );
}
