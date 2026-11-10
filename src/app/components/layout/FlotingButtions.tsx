import { FaWhatsapp } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function FloatingButtons() {
  return (
    <>
      
      <a
        href="https://wa.me/919870109545"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#20c765] text-3xl text-white shadow-lg"
      >
       <FaWhatsapp />
      </a>

      
      <button
        type="button"
        aria-label="Open chat"
        className="fixed right-6 bottom-6 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#29378e] text-3xl text-white shadow-lg"
      >
        <IoChatbubbleOutline />
      </button>
    </>
  );
}
