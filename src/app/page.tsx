import AboutSection from "./components/about/AboutSection";
import CentresHero from "./components/centers/CentersHero";
import EnquirySection from "./components/enquiry/EnquirySection";
import Hero from "./components/home/Hero";


export default function Home() {
  return (
  <main>
    <Hero/>
    <CentresHero/>
    <AboutSection/>
    <EnquirySection/>
  </main>
  );
}
