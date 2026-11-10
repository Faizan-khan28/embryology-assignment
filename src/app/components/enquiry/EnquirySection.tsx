
import EnquiryForm from "./EnquiryForm";

export default function EnquirySection() {
  const benefits = [
    {
      icon: "♧",
      title: "Expert-led training",
      description: "Learn directly from top embryologists.",
    },
    {
      icon: "☆",
      title: "Industry recognition",
      description: "UGC-approved and widely respected.",
    },
    {
      icon: "→",
      title: "Hands-on experience",
      description: "Get real-world lab training.",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 pt-[150px] md:py-16 md:pt-[80px]"
      style={{
        backgroundImage: "url('/enquiry/enquiry.webp')",
      }}
    >

      
      <div className="absolute inset-0 bg-[#edf4ff]/60" />

      
      <div className="relative z-10 mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-8">

      
        <div className="mx-auto w-full max-w-[500px]">

          
          <span className="inline-flex items-center gap-2 rounded-md bg-[#29378e] px-4 py-2 text-xs font-bold tracking-widest text-white shadow-md">
            ▣ ENQUIRE NOW
          </span>

          
          <h1 className="mt-5 text-3xl leading-tight font-bold text-[#101426] sm:text-4xl">

            Transform your future in

            <span className="block text-[#29378e]">
              Embryology
            </span>

          </h1>

          
          <p className="mt-5 text-base leading-7 text-[#40536d]">

            Take the first step towards a rewarding career in embryology.
            Join our expert-led courses and unlock your potential.

          </p>

          
          <div className="mt-7 space-y-3">

            {benefits.map((item) => (

              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-[#dce2f0] bg-white/90 p-4 shadow-sm transition duration-300 hover:shadow-md"
              >

                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f2fa] text-2xl text-[#29378e]">
                  {item.icon}
                </div>

               
                <div>

                  <h3 className="font-semibold text-[#101426]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#52627a]">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        
        <div className="mx-auto w-full max-w-[600px]">
          <EnquiryForm />
        </div>

      </div>

    </section>
  );
}
