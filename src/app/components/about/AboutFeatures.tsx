
export default function AboutFeatures() {
  const features = [
    {
      icon: "♙",
      title: "Courses Offered By UGC-Approved University",
    },
    {
      icon: "▤",
      title: "Learn From India's Top Faculty Of Embryologists",
    },
    {
      icon: "♧",
      title: "Hands-on Training In Advanced Labs & Fertility Centres",
    },
    {
      icon: "♧",
      title: "Modern Classrooms & State-of-the-art Facilities",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

      {features.map((item) => (
        <div
          key={item.title}
          className="flex min-h-[95px] items-center gap-4 rounded-2xl border border-[#e0e5f3] bg-white p-5 transition-all duration-300 hover:shadow-md"
        >

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f2fa] text-2xl text-[#29378e]">
            {item.icon}
          </div>

          <h3 className="text-base font-medium leading-6 text-[#26364e]">
            {item.title}
          </h3>

        </div>
      ))}

    </div>
  );
}
